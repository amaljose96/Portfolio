import Loader from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("Loader", () => {
  it("should render correctly", () => {
    let LoaderSnapshot = shallow(<Loader/>);
    expect(LoaderSnapshot).toMatchSnapshot();
  });
});