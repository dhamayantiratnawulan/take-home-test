import { renderWithProviders } from "@/test/utils";
import { screen } from "@testing-library/react";
import { vi } from "vitest";
import { DialogDetail } from "./DialogDetail";

describe("DialogDetail Component", () => {
  it("renders correctly when open", () => {
    const movieDetail = {
      Title: "Inception",
      Year: "2010",
      Type: "movie",
      Poster: "N/A",
      imdbID: "tt1375666",
    };
    const onClose = vi.fn();

    renderWithProviders(
      <DialogDetail isOpen={true} onClose={onClose} movieDetail={movieDetail} />
    );

    const title = screen.getByText("Inception");
    const year = screen.getByText("2010");
    const type = screen.getByText("movie");
    const seeDetailButton = screen.getByText("See Detail");

    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(type).toBeInTheDocument();
    expect(seeDetailButton).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    const movieDetail = {
      Title: "Inception",
      Year: "2010",
      Type: "movie",
      Poster: "N/A",
      imdbID: "tt1375666",
    };
    const onClose = vi.fn();

    renderWithProviders(
      <DialogDetail
        isOpen={false}
        onClose={onClose}
        movieDetail={movieDetail}
      />
    );

    const title = screen.queryByText("Inception");

    expect(title).not.toBeInTheDocument();
  });
});
