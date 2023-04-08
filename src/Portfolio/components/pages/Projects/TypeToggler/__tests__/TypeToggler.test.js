import TypeToggler from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("TypeToggler", () => {
  it("should render correctly", () => {
    let TypeTogglerSnapshot = shallow(<TypeToggler/>);
    expect(TypeTogglerSnapshot).toMatchSnapshot();
  });
});