import React from "react";
import { shallow } from "enzyme";
import Cart from "../routes/Cart/Cart";
import { products } from "../db/yacht.json";
import { INIT_CURRENCY } from "../common/Constants";

describe("<Cart />", () => {
  let component;

  it("Empty Cart has Total sum ", () => {
    component = shallow(
      <Cart
        currency={INIT_CURRENCY}
        cartItems={[]}
        cartProductsTotalCount={0}
      />
    );
    expect(component.find(".cart-list").children().length).toBe(0);
    expect(component.find(".cart-totalSum").text()).toBe("Total sum: 0 UAH");
  });

  it("Cart with 2 products ", () => {
    component = shallow(
      <Cart
        currency={INIT_CURRENCY}
        cartItems={[{ ...products[0] }, { ...products[3] }]}
      />
    );
    expect(component.find(".cart-list").children().length).toBe(2);
  });
});
