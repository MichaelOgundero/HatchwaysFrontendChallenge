import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

jest.mock("./Components/FetchData/FetchData", () => () => (
  <div data-testid="fetch-data" />
));

describe("<App/>", () => {
  it("it should render the parent div of the App component", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("parent-div")).toBeTruthy();
  });

  it("it should render the FetchData component", () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId("fetch-data")).toBeInTheDocument();
  });
});
