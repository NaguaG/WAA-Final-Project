
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import{get} from "../../../api"

export const fetchProperties = createAsyncThunk("properties/getAll", async (params) => {
    try {
      let url = "/api/properties";
      const response= await get(url);
      console.log("PRADIP", response);
      return response.data.content;
    } catch (err) {
        throw err;
    }
  });
const initialState={
    properties: [],
    loading:false,
    error:null,
    success:null,
}

//==================
const param={
    name:'property',
    initialState:initialState,
    reducers:{
        loadProperty:(state)=>{
        }
    },

    extraReducers:(builder)=>{
      builder.addCase(fetchProperties.pending, (state)=>
      {
        state.loading=true;
        state.success=false;
        state.error=false;
        state.properties=[];
      });
    //========================================================

    builder.addCase(fetchProperties.fulfilled,(state,action)=>{
      state.loading=false;
      state.success=true;
      state.error=false;
      state.properties=action.payload;
    });

    builder.addCase(fetchProperties.rejected, (state)=>{
      state.properties=[];
      state.loading=false;
      state.success=false;
      state.error=true;
    })

}}
const propertySlice=createSlice(param);

export default propertySlice.reducer;


