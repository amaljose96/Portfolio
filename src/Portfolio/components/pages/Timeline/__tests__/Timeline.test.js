import Timeline from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Timeline", () => {
  it("should render correctly", () => {
    let TimelineSnapshot = shallow(<Timeline/>);
    expect(TimelineSnapshot).toMatchSnapshot();
  });
});