import React from "react";
import { cleanup, render } from "@testing-library/react";
import SearchBar from "./SearchBar";

afterEach(cleanup);

describe(`<SearchBar />`, () => {
  it("should display name searchbar", () => {
    const { getByTestId } = render(<SearchBar />);
    expect(getByTestId("name-search")).toBeTruthy();
  });
  it("should display tag searchbar", () => {
    const { getByTestId } = render(<SearchBar />);
    expect(getByTestId("tag-search")).toBeTruthy();
  });
});
