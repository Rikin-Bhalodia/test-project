import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IAuthType, IUser } from "../../interface/cartProduct";

const initialState: IAuthState = {
  loading: false,
  product: null || [],
  allProducts: null,
};

const cartSlice = createSlice({
  name: "cartProduct",
  initialState,
  reducers: {
    getCartProducts(state: any, action: PayloadAction<IAuthType>) {
      return {
        ...state,
        allProducts: action.payload,
      };
    },
    addCartProduct(state: any, action: PayloadAction<IUser>) {
      return {
        ...state,
        product: [...state.allUsers, action.payload],
      };
    },
    changeQuantityProduct(state: any, action: PayloadAction<IUser>) {
      const updatedUsers = state.allUsers.filter(
        (data: any) => data.email !== action.payload.email
      );
      return {
        ...state,
        allUsers: updatedUsers,
      };
    },
    deleteCartProduct(state: any, action: PayloadAction<IUser>) {
      const updatedUsers = state.allUsers.filter(
        (data: any) => data.email !== action.payload.email
      );
      return {
        ...state,
        allUsers: updatedUsers,
      };
    },
  },
});

export const {
  getCartProducts,
  addCartProduct,
  changeQuantityProduct,
  deleteCartProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
