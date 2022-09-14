import { AppDispatch } from "../store";
import { IAuthType, IUser } from "./../interface/product";
import { getProducts, addProduct, deleteProduct } from "../reducers/Products";

export const getProductAction: any =
  (values: IAuthType) => async (dispatch: AppDispatch) => {
    // Api call for register
    const response = values;
    if (response) {
      dispatch(getProducts(response));
    }
  };

export const addProductAction: any =
  (values: IUser) => async (dispatch: AppDispatch) => {
    // Api call for Add user
    const response = values;
    if (response) {
      dispatch(addProduct(response));
    }
  };

export const deleteProductAction: any =
  (values: IUser) => async (dispatch: AppDispatch) => {
    // Api call for delete user
    const response = values;
    if (response) {
      dispatch(deleteProduct(response));
    }
  };
