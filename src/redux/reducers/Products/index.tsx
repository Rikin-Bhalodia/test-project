import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState, IAuthType, IUser } from "../../interface/product";

const initialState: IAuthState = {
  loading: false,
  allProducts: null,
  product: null || [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state: any, action: PayloadAction<IAuthType>) {
      return {
        ...state,
        // allProducts: action.payload,
      };
    },
    addProduct(state: any, action: PayloadAction<IUser>) {
      return {
        ...state,
        product: [...state.allUsers, action.payload],
      };
    },
    deleteProduct(state: any, action: PayloadAction<IUser>) {
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

export const { getProducts, deleteProduct, addProduct } = productSlice.actions;

export default productSlice.reducer;
