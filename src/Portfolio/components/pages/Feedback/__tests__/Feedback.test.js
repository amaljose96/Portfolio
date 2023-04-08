import Feedback from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Feedback", () => {
  it("should render correctly", () => {
    let FeedbackSnapshot = shallow(<Feedback/>);
    expect(FeedbackSnapshot).toMatchSnapshot();
  });
});