import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItem : localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItem.findIndex(
                (item) => item.id === action.payload.id
                );
                if(itemIndex >= 0) {
                    state.cartItem[itemIndex].cartQuantity +=1;
                    toast.info(
                        `increased ${state.cartItem[itemIndex].name} cart quantity`,
                        {
                            position : "bottom-left",
                        }
                    )
                }else {
                    const tempProduct = {...action.payload , cartQuantity: 1};
                    state.cartItem.push(tempProduct);
                    toast.success(
                        `${action.payload.name} added to cart`,
                        {
                            position : "bottom-left",
                        });
                }
        
            localStorage.setItem("cartItems" , JSON.stringify(state.cartItem))
        },
    },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;