import SkillToggler from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("SkillToggler", () => {
  it("should render correctly", () => {
    let SkillTogglerSnapshot = shallow(<SkillToggler/>);
    expect(SkillTogglerSnapshot).toMatchSnapshot();
  });
});