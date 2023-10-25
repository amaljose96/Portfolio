import QuestionsView from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("QuestionsView", () => {
  it("should render correctly", () => {
    let QuestionsViewSnapshot = shallow(<QuestionsView/>);
    expect(QuestionsViewSnapshot).toMatchSnapshot();
  });
});