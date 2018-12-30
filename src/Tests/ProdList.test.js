import React from "react";
import { mount } from "enzyme";
import ProductList from "../routes/ProductList/ProductList";
import { products } from "../db/yacht.json";
import { BrowserRouter } from "react-router-dom";
import { PRODUCTS_LIMIT } from "../common/Constants";

let component;
const mockAddProductToCart = jest.fn(({ name }) => name);
const mockFetchProducts = jest.fn();
let myProps = {
  items: products,
  start: 3,
  end: 6,
  addProductToCart: mockAddProductToCart,
  fetchProducts: mockFetchProducts
};

describe("Testing ProductList with 6 items", () => {
  beforeEach(() => {
    component = mount(
      <BrowserRouter>
        <ProductList {...myProps} />
      </BrowserRouter>
    );
  });

  it("ProductList will have 6 product cards ", () => {
    expect(component.find("ul").children().length).toBe(6);
  });

  it('Pressing "Buy" button on every product call addProductToCart function with appropriate arguments', () => {
    component.find("button.buyBtn").forEach((element, i) => {
      element.simulate("click");
      expect(mockAddProductToCart).toBeCalledTimes(i + 1);
      expect(mockAddProductToCart.mock.calls[i][0]).toBe(products[i]);
    });
  });

  it('Click on "Show more" button when products.length === end don`t call FetchProducts', () => {
    component.find("button.showMoreBtn").simulate("click");
    expect(mockFetchProducts).toBeCalledTimes(0);
  });
});

describe("Testing when ProductList call FetchProducts ", () => {
  it('Click on "Show more" button when products.length < end call FetchProducts with appropriate arguments', () => {
    myProps.end = 9;
    component = mount(
      <BrowserRouter>
        <ProductList {...myProps} />
      </BrowserRouter>
    );
    component.find("button.showMoreBtn").simulate("click");
    expect(mockFetchProducts).toBeCalledTimes(1);
    expect(mockFetchProducts.mock.calls[0][0]).toBe(myProps.start);
    expect(mockFetchProducts.mock.calls[0][1]).toBe(PRODUCTS_LIMIT);
  });

  it("Initially when products.length === 0 ProductList call FetchProducts with appropriate arguments", () => {
    myProps.products = [];
    component = mount(
      <BrowserRouter>
        <ProductList {...myProps} />
      </BrowserRouter>
    );
    expect(mockFetchProducts).toBeCalledTimes(1);
    expect(mockFetchProducts.mock.calls[0][0]).toBe(myProps.start);
    expect(mockFetchProducts.mock.calls[0][1]).toBe(PRODUCTS_LIMIT);
  });
});
