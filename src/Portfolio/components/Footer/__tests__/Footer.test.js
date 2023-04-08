import Footer from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Footer", () => {
  it("should render correctly", () => {
    let FooterSnapshot = shallow(<Footer/>);
    expect(FooterSnapshot).toMatchSnapshot();
  });
});