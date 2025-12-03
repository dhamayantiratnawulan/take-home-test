import { screen } from "@testing-library/react";
import { renderWithProviders } from "@/test/utils";

import { Detail } from "./index";

describe("Detail Component", () => {
  it("renders correctly", () => {
    renderWithProviders(<Detail />);
    const detailElement = screen.getByTestId("detail-component");

    expect(detailElement).toBeInTheDocument();
  });

  it("renders movie detail", () => {
    renderWithProviders(<Detail />, {
      preloadedState: {
        movies: {
          detail: {
            Title: "Inception",
            Plot: "A thief who steals corporate secrets through the use of dream-sharing technology...",
            Poster: "N/A",
            Runtime: "148 min",
            Genre: "Action, Adventure, Sci-Fi",
            Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
            Director: "Christopher Nolan",
            Released: "16 Jul 2010",
          },
        },
      },
    });

    const title = screen.getByText("Inception");
    const plot = screen.getByText(/A thief who steals corporate secrets/i);
    const runtime = screen.getByText("148 min");
    const genre = screen.getByText(/Genre:/i);
    const actors = screen.getByText(/Actors:/i);
    const director = screen.getByText(/Director:/i);
    const released = screen.getByText(/Released:/i);

    expect(title).toBeInTheDocument();
    expect(plot).toBeInTheDocument();
    expect(runtime).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(actors).toBeInTheDocument();
    expect(director).toBeInTheDocument();
    expect(released).toBeInTheDocument();
  });

  it("renders back button", () => {
    renderWithProviders(<Detail />);
    const backButton = screen.getByRole("button", { name: /back/i });

    expect(backButton).toBeInTheDocument();
  });
});
