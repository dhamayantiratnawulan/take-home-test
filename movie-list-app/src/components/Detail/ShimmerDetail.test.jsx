import { renderWithProviders } from "@/utils/testUtils";
import { screen } from "@testing-library/react";

import { ShimmerDetail } from "./ShimmerDetail";

describe("ShimmerDetail Component", () => {
  it("renders correctly", () => {
    renderWithProviders(<ShimmerDetail />);
    const shimmerDetailElement = screen.getByTestId("shimmer-detail");

    expect(shimmerDetailElement).toBeInTheDocument();
  });
});
