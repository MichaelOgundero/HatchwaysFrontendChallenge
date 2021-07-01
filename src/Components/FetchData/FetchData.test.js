import React from "react";
import { cleanup, render, waitFor } from "@testing-library/react";
import FetchData from "./FetchData";
import axiosMock from "axios";

afterEach(cleanup);

jest.mock("../DataList/DataList", () => () => <div data-testid="data-list" />);
jest.mock("axios");

describe("<FetchData />", () => {
  it("should display data", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        students: [
          {
            city: "random city",
          },
        ],
      },
    });

    const { getByTestId } = render(<FetchData />);
    expect(getByTestId("loading-div")).toHaveTextContent("Loading...");

    const resolvedDataList = await waitFor(() => getByTestId("parent-div"));
    expect(resolvedDataList).toBeTruthy();
    expect(resolvedDataList).toBeInTheDocument();
  });
});
