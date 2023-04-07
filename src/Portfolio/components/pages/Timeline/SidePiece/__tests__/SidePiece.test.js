import SidePiece from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("SidePiece", () => {
  it("should render correctly", () => {
    let SidePieceSnapshot = shallow(<SidePiece/>);
    expect(SidePieceSnapshot).toMatchSnapshot();
  });
});