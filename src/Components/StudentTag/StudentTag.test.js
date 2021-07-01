import React from "react";
import { cleanup, render } from "@testing-library/react";
import StudentTag from "./StudentTag";

afterEach(cleanup);


describe(`<StudentTag />`, () => {
  it("should display data", () => {
    const { getByTestId } = render(<StudentTag />);
    expect(getByTestId("tag-input")).toBeTruthy();
  });

});
