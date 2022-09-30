import { Satellite } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";

export const fetchProperties = createAsyncThunk("properties/getAll", async (params) => {
    try {
      const response = await get("/api/properties");
      return response.data;
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
      builder.addCase(fetchProperty.pending, (state)=>
      {
        state.loading=true;
        state.success=false;
        state.error=false;
        state.properties=[];
      });
    //========================================================

    builder.addCase(fetchProperty.fulfilled,(state,action)=>{
      state.loading=false;
      state.success=true;
      state.error=false;
      state.properties=action.payload;
    });

    builder.addCase(fetchProperty.rejected, (state)=>{
      state.properties=[];
      state.loading=false;
      state.success=false;
      state.error=true;
    })

}}
const propertySlice=createSlice(param);

export default propertySlice.reducer;


