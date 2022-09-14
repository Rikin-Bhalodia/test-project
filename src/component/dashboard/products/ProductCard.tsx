import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartProductAction,
  getCartProductAction,
} from "../../../redux/actions/cartActions";
import {
  addProductToCart,
  getAllProductFromCart,
} from "../../../utils/api/Cart";
import { getAllCartProducts } from "../../../redux/selectors/product";

const ProductCard = ({ ele }: any) => {
  const { name, description, price, quantity, id, isInCart, url } = ele;
  const dispatch = useDispatch();
  const products = useSelector(getAllCartProducts);
  console.log(ele, isInCart, "ele");

  const allCartProduct = async () => {
    const cartProducts = await getAllProductFromCart();
    dispatch(getCartProductAction(cartProducts));
  };

  const addToCart = async (id: string) => {
    const newCartProduct = await addProductToCart(id);
    console.log(newCartProduct, "newCartProduct");

    dispatch(addCartProductAction(newCartProduct));
    allCartProduct();
  };

  const removeToCart = async (id: string) => {};

  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia component="img" height="200" image={url} alt="testImg" />
        <CardContent>
          <Typography>{name}</Typography>
          <Typography>{description}</Typography>
          <Typography>{quantity}</Typography>
          <Typography>{price}</Typography>
          <Button
            type="submit"
            size="medium"
            color="primary"
            variant="contained"
            style={{ marginTop: "10px" }}
            onClick={() => {
              isInCart ? removeToCart(id) : addToCart(id);
            }}
          >
            {isInCart ? "Remove From Cart" : "Add to cart"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
