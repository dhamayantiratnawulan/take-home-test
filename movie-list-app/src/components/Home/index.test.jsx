import { screen } from "@testing-library/react";

import { renderWithProviders } from "@/test/utils";
import { Home } from "./index";

describe("Home Component", () => {
  it("renders correctly", () => {
    renderWithProviders(<Home />);
    const title = screen.getByText("Movie Finder");
    const input = screen.getByPlaceholderText(
      "Input min 3 characters to search..."
    );
    const welcomeMessage = screen.getByText(
      "Search any movie title to get started"
    );

    expect(title).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(welcomeMessage).toBeInTheDocument();
  });

  it("renders loading state", () => {
    renderWithProviders(<Home />, {
      preloadedState: {
        movies: {
          loading: true,
        },
      },
    });
    const shimmerMovieList = screen.getByTestId("shimmer-movie-list");

    expect(shimmerMovieList).toBeInTheDocument();
  });

  it("renders movie list", () => {
    renderWithProviders(<Home />, {
      preloadedState: {
        movies: {
          loading: false,
          list: [
            {
              imdbID: "tt1234567",
              Title: "Movie 1",
              Year: "2020",
              Poster: "N/A",
            },
            {
              imdbID: "tt2345678",
              Title: "Movie 2",
              Year: "2021",
              Poster: "N/A",
            },
          ],
        },
      },
    });
    const movieCard1 = screen.getByText("Movie 1");
    const movieCard2 = screen.getByText("Movie 2");

    expect(movieCard1).toBeInTheDocument();
    expect(movieCard2).toBeInTheDocument();
  });
});
