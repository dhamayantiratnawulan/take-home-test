import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { movieService } from "./movieService";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ keyword, page }) => {
    const data = await movieService.searchMovies(keyword, page);

    const results = data.Search || [];
    const totalResults = Number(data.totalResults || 0);

    return {
      results,
      page,
      totalResults,
      hasMore: page * 10 < totalResults,
      response: data.Response || "False",
      error: data.Error || null,
    };
  }
);

export const fetchMovieDetail = createAsyncThunk(
  "movies/fetchMovieDetail",
  async (id, thunkAPI) => {
    try {
      return await movieService.getMovieDetail(id);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    loading: false,
    error: null,
    page: 1,
    keyword: "",
    totalResults: 0,
    hasMore: true,
  },
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
      state.page = 1;
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.page = action.payload.page + 1;
        state.hasMore = action.payload.hasMore;

        if (action.payload.page === 1) {
          state.list = action.payload.results;
        } else {
          state.list = [...state.list, ...action.payload.results];
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch movies";
        if (state.keyword.length >= 3) {
          state.list = [];
        }
      })
      .addCase(fetchMovieDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovieDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detail = action.payload;
      });
  },
});

export const { setKeyword } = movieSlice.actions;

export default movieSlice.reducer;
