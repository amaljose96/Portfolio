import Projects from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Projects", () => {
  it("should render correctly", () => {
    let ProjectsSnapshot = shallow(<Projects/>);
    expect(ProjectsSnapshot).toMatchSnapshot();
  });
});