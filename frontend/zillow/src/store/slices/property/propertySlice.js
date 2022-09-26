import { createSlice } from "@reduxjs/toolkit";

export const propertyDetails = createAsyncThunk("user/login", async (params) => {
    try {
      const response = await post("/api/token", {
        username: params.email,
        password: params.password,
      });
      return response.data;
    } catch (err) {
      throw err;
    }
  });
const initialState={
    id:0,
        title:null,
        isForSell:false,
        isForRent:false,
        numberOfRooms:0,
        price:0,
        propertyType:"home",
        homeType:"condo",
        description:"desc this property",
        location:"current location",
        images:"use url",
        user:"admin"
}
const param={
    name:'property',
    initialState:initialState,
    reducers:{
        loadData:(state)=>{

        }
    }
}
