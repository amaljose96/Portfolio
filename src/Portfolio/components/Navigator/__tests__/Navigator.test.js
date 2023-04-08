import Navigator from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Navigator", () => {
  it("should render correctly", () => {
    let NavigatorSnapshot = shallow(<Navigator/>);
    expect(NavigatorSnapshot).toMatchSnapshot();
  });
});