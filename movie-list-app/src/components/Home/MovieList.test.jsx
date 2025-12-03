
import { screen } from "@testing-library/react";

import { renderWithProviders } from "@/test/utils";
import { MovieList } from "./MovieList";

describe("MovieList Component", () => {
  it("renders movie list correctly", () => {
    const movies = [
      { imdbID: "tt1234567", Title: "Movie 1", Year: "2020", Poster: "N/A" },
      { imdbID: "tt2345678", Title: "Movie 2", Year: "2021", Poster: "N/A" },
    ];

    renderWithProviders(<MovieList movies={movies} />);

    const movieCard1 = screen.getByText("Movie 1");
    const movieCard2 = screen.getByText("Movie 2");

    expect(movieCard1).toBeInTheDocument();
    expect(movieCard2).toBeInTheDocument();
  });

  it("renders no movies when list is empty", () => {
    renderWithProviders(<MovieList movies={[]} />);

    const movieCards = screen.queryAllByTestId("movie-card");

    expect(movieCards.length).toBe(0);
  });
});
