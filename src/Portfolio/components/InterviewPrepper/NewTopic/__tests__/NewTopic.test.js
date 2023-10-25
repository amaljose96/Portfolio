import NewTopic from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("NewTopic", () => {
  it("should render correctly", () => {
    let NewTopicSnapshot = shallow(<NewTopic/>);
    expect(NewTopicSnapshot).toMatchSnapshot();
  });
});