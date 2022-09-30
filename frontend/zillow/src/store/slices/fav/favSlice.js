import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "immer/dist/internal";

export const fetchFavList = createAsyncThunk("fetch/fav", 
  async(params)= {
    // const res = await g ('fav-lists')
  }
)