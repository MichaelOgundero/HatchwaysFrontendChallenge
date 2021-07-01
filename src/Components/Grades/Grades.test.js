import React from "react";
import { cleanup, render } from "@testing-library/react";
import Grades from "./Grades";

afterEach(cleanup);

const grades = ["1", "2", "3"];

describe(`<Grades />`, () => {
  it("should display data", () => {
    const { getByTestId } = render(<Grades gradesArray={grades} />);
    expect(getByTestId("grades-parentdiv")).toBeTruthy();
  });
  it("should display grades", () => {
    const { getAllByTestId } = render(<Grades gradesArray={grades} />);
    expect(getAllByTestId("grade-item")).toBeTruthy();
  });
});
