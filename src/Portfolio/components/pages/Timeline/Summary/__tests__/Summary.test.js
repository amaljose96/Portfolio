import Summary from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Summary", () => {
  it("should render correctly", () => {
    let SummarySnapshot = shallow(<Summary/>);
    expect(SummarySnapshot).toMatchSnapshot();
  });
});