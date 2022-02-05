import CalendarEvent from "../index";
import { shallow } from "enzyme";
import React from 'react';
describe("CalendarEvent", () => {
  it("should render correctly", () => {
    let CalendarEventSnapshot = shallow(<CalendarEvent/>);
    expect(CalendarEventSnapshot).toMatchSnapshot();
  });
});