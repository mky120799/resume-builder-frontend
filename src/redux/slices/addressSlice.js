import { createSlice } from "@reduxjs/toolkit";

const addressInitialState = {
  postal_code: "",
  city: "",
  state: "",
  country: "",
  phone: "",
  email: ""
}

const addressSlice = createSlice({
  name: "address",
  initialState: addressInitialState,
  reducers: {
    modifyAddress: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});


export const { modifyAddress } = addressSlice.actions;
export default addressSlice.reducer;


