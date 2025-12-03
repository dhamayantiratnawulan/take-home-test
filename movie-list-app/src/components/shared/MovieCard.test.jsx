
import { it } from "vitest";

import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";
import { MovieCard } from "./MovieCard";

describe("MovieCard Component", () => {
  it("renders correctly", () => {
    const mockMovie = {
      imdbID: "tt1234567",
      Title: "Test Movie",
      Year: "2022",
      Poster: "N/A",
    };
    const mockOnClick = vi.fn();

    renderWithProviders(<MovieCard movie={mockMovie} onClick={mockOnClick} />);
    const titleElement = screen.getByText("Test Movie");
    const yearElement = screen.getByText("2022");
    const posterElement = screen.getByAltText("Test Movie");

    expect(titleElement).toBeInTheDocument();
    expect(yearElement).toBeInTheDocument();
    expect(posterElement).toBeInTheDocument();
  });

  it("handles click event", () => {
    const mockMovie = {
      imdbID: "tt1234567",
      Title: "Test Movie",
      Year: "2022",
      Poster: "N/A",
    };
    const mockOnClick = vi.fn();

    renderWithProviders(<MovieCard movie={mockMovie} onClick={mockOnClick} />);
    const cardElement = screen.getByText("Test Movie").closest("div");

    fireEvent.click(cardElement);

    expect(mockOnClick).toHaveBeenCalledWith(mockMovie);
  });
});
