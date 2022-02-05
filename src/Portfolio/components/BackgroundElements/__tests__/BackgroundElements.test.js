import BackgroundElements from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("BackgroundElements", () => {
  it("should render correctly", () => {
    let BackgroundElementsSnapshot = shallow(<BackgroundElements/>);
    expect(BackgroundElementsSnapshot).toMatchSnapshot();
  });
});