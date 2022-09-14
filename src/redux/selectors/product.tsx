import { RootState } from "../reducers/rootReducers";

export const getAuthUser = (state: RootState) => state.productSlice.product;

// export const getUsers = (state: RootState) => state.auth.allUsers;
