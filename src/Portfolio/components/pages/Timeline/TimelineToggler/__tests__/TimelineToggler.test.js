import TimelineToggler from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("TimelineToggler", () => {
  it("should render correctly", () => {
    let TimelineTogglerSnapshot = shallow(<TimelineToggler/>);
    expect(TimelineTogglerSnapshot).toMatchSnapshot();
  });
});