import { renderWithProviders } from "@/test/utils";
import { screen } from "@testing-library/react";

import { ShimmerCard } from "./ShimmerCard";

describe("ShimmerCard Component", () => {
  it("renders correctly", () => {
    renderWithProviders(<ShimmerCard />);
    const shimmerElement = screen.getByTestId("shimmer-card");

    expect(shimmerElement).toBeInTheDocument();
  });
});
