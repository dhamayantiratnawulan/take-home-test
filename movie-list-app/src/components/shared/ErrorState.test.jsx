import { renderWithProviders } from "@/test/utils";
import { screen } from "@testing-library/react";

import { ErrorState } from "./ErrorState";

describe("ErrorState Component", () => {
  it("renders correctly", () => {
    renderWithProviders(<ErrorState />);
    const errorStateElement = screen.getByTestId("error-state");

    expect(errorStateElement).toBeInTheDocument();
  });

  it("renders with custom message", () => {
    const customMessage = "Custom error message.";
    renderWithProviders(<ErrorState message={customMessage} />);
    const errorMessage = screen.getByText(customMessage);

    expect(errorMessage).toBeInTheDocument();
  });
});
