import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items : [],
    status: null
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {}
})


// export {} = productSlice.actions
export default productsSlice.reducer;
