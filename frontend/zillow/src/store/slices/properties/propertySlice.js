import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../../api";

export const loadProperties = createAsyncThunk(
  "properties/load",
  async (params, rejectWithValue) => {
    try {
      let baseUrl = "/api/properties";
      if (params.location) {
        baseUrl += `?location=${params.location}`;
      }
      if (params.propertyType) {
        baseUrl += `&propertyType=${params.propertyType}`;
      }
      const response = await get(baseUrl);
      console.log("response: ", response);
      return response.data;
    } catch (err) {
      rejectWithValue(err.response);
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: [],
  totalProperties: 0,
};

const propertySlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadProperties.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(loadProperties.fulfilled, (state, action) => {
      const { content, totalElements } = action.payload;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.totalProperties = totalElements;
      state.data = content;
    });

    builder.addCase(loadProperties.rejected, (state) => {
      state.loading = false;
      state.success = false;
      state.error = true;
    });
  },
});

export default propertySlice.reducer;
