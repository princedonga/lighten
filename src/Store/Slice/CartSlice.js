import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cartItem: [],
    totalQuantity: 0,
    totalAmount: 0
}


const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {


        addItem(state, action) {
            // console.log(action);
            const newItem = action.payload;

            const oldItem = state.cartItem.find(item => item.id === newItem.id)

            state.totalQuantity++;

            if (!oldItem) {
                state.cartItem.push({
                    id: newItem.id,
                    title: newItem.title,
                    image01: newItem.image01,
                    price: newItem.price,
                    quantity: 1,
                    totalprice: newItem.price
                })
            } else {
                oldItem.quantity++;
                oldItem.totalprice = Number(oldItem.totalprice) + Number(newItem.price)
            }
            // console.log(current(state.cartItem));

            state.totalAmount = state.cartItem.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 10)
        },


        removeItem(state, action) {
            // console.log(action);
            const newItem = action.payload;

            const oldItem = state.cartItem.find(item => item.id === newItem.id)

            state.totalQuantity--;

            if (oldItem.quantity === 1) {
                state.cartItem = state.cartItem.filter(item => item.id !== newItem.id)
            } else {
                oldItem.quantity--;
                oldItem.totalprice = Number(oldItem.totalprice) - Number(oldItem.price)
            }
            // console.log(current(state.cartItem));
            state.totalAmount = state.cartItem.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 10)
        },

        // delete item --

        deleteItem(state, action) {
            // console.log(action);
            const newItem = action.payload;

            const oldItem = state.cartItem.find(item => item.id === newItem.id)

            if (oldItem) {
                state.cartItem = state.cartItem.filter(item => item.id !== newItem.id)
                state.totalQuantity = state.totalQuantity - oldItem.quantity
            }
            state.totalAmount = state.cartItem.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 10)
        }
        
    }
})
export const cartactions = cartSlice.actions
export default cartSlice