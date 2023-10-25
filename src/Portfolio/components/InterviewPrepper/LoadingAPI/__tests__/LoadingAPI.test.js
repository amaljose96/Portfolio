import LoadingAPI from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("LoadingAPI", () => {
  it("should render correctly", () => {
    let LoadingAPISnapshot = shallow(<LoadingAPI/>);
    expect(LoadingAPISnapshot).toMatchSnapshot();
  });
});