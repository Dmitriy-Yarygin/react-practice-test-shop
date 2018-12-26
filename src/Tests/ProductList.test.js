import React from "react";
import ProductList from "../routes/ProductList/ProductList";
import ProductCard from "../routes/ProductList/ProductCard";
import { products } from "../db/yacht.json";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { shallow, mount, render } from "enzyme";
configure({ adapter: new Adapter() });
/*
describe("<ProductList />", () => {
  // it("allows us to set props", () => {
  //   const wrapper = mount(
  //     <ProductList bar="baz" items={[]} fetchProducts={() => {}} />
  //   );
  //   expect(wrapper.props().bar).to.equal("baz");

  //   wrapper.setProps({ bar: "foo" });
  //   expect(wrapper.props().bar).to.equal("foo");
  // });

  it("renders three <ProductCard /> components", () => {
    const wrapper = shallow(
      <ProductCard
        item={products[0]}
        fetchProducts={() => {}}
        addProductToCart={() => {}}
      />
    );
    console.log( products[0].name );

    // <p class="MuiTypography-root-67 MuiTypography-body1-76">Current Price: 1,200</p>
    console.log(wrapper);
    // expect(wrapper.find(ProductCard)).to.have.lengthOf(3);
  });
});
*/