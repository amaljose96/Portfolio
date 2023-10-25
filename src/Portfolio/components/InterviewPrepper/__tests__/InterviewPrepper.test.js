import InterviewPrepper from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("InterviewPrepper", () => {
  it("should render correctly", () => {
    let InterviewPrepperSnapshot = shallow(<InterviewPrepper/>);
    expect(InterviewPrepperSnapshot).toMatchSnapshot();
  });
});