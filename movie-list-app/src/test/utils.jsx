import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import movieSlice from "@/features/movies/movieSlice";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    route = "/",
    store = configureStore({
      reducer: { movies: movieSlice },
      preloadedState: {
        movies: {
          list: [],
          loading: false,
          hasMore: true,
          page: 1,
          keyword: "",
          detail: null,
          ...preloadedState.movies,
        },
      },
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
