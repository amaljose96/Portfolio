import Skills from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Skills", () => {
  it("should render correctly", () => {
    let SkillsSnapshot = shallow(<Skills/>);
    expect(SkillsSnapshot).toMatchSnapshot();
  });
});