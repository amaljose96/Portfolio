import SkillItem from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("SkillItem", () => {
  it("should render correctly", () => {
    let SkillItemSnapshot = shallow(<SkillItem/>);
    expect(SkillItemSnapshot).toMatchSnapshot();
  });
});