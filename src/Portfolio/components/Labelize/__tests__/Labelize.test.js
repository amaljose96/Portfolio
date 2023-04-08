import Labelize from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Labelize", () => {
  it("should render correctly", () => {
    let LabelizeSnapshot = shallow(<Labelize/>);
    expect(LabelizeSnapshot).toMatchSnapshot();
  });
});