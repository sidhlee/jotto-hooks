import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Congrats from "./Congrats";

const defaultProps = { success: false };
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

describe("render", () => {
  let wrapper, component;
  beforeEach(() => {
    wrapper = setup();
    component = findByTestAttr(wrapper, "component-congrats");
  });
  test("renders without error", () => {
    expect(component.length).toBe(1);
  });
  test("renders no text when 'success' prop is false", () => {
    expect(component.text().length).toBe(0);
  });
  test("renders non-empty congrats message when 'success' prop is true", () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message.text().length).toBeGreaterThan(0);
  });
});

test("does no throw warning with expected props", () => {
  const expectedProps = defaultProps;
  checkProps(Congrats, expectedProps);
});