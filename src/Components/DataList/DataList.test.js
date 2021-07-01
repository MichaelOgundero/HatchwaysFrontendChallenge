import React from "react";
import { cleanup, render } from "@testing-library/react";
import DataList from "./DataList";

afterEach(cleanup);

jest.mock("../SearchBar/SearchBar", () => () => (
  <div data-testid="searchbar-component" />
));

const student = [
  {
    firstName: "firstName",
    lastName: "lastName",
    pic: "pic",
    company: "company",
    grades: ["1", "2", "3"],
    id: "1",
    isOpen: false,
    skill: "skill",
    tags: [],
  },
];

describe(`<DataList />`, () => {
  it("should display data", () => {
    const { getByTestId } = render(<DataList data={student} />);
    expect(getByTestId("data-list")).toBeTruthy();
    expect(getByTestId("unordered-list")).toBeTruthy();
    expect(getByTestId("student-row")).toBeInTheDocument();
    expect(getByTestId("student-grades-button")).toBeInTheDocument();
  });

  it("it should render the Searchbar component", () => {
    const { getByTestId } = render(<DataList data={student} />);
    expect(getByTestId("searchbar-component")).toBeInTheDocument();
  });
});
