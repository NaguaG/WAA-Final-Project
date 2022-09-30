import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../../api";

export const fetchFavList = createAsyncThunk("fetch/fav", 
  async(params) => {
    const res = await get('/api/fav-lists');
    return res.data;
  }
)

const initialState = {
  isFirst: true,
  loading: false,
  favList: [],
  token: null,
  error: null,
  success: null,
};

const favSlice = createSlice({
  name:"fav/list",
  initialState,
  reducers:{
    setAddEditForm: (state,action) => {
      state.isFirst = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFavList.fulfilled, (state, action) => {
      state.favList = action.payload;
      state.success = true;
    });
    builder.addCase(fetchFavList.pending, (state, action) => {
      state.loading = true;
    })
  }

})

export const { setAddEditForm } = favSlice.actions; 
export default favSlice;