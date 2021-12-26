import Portfolio from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Portfolio", () => {
  it("should render correctly", () => {
    let PortfolioSnapshot = shallow(<Portfolio/>);
    expect(PortfolioSnapshot).toMatchSnapshot();
  });
});