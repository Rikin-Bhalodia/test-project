import React, { useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../products/ProductCard";
import { getAllProducts } from "../../../utils/api/Product";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCartProducts,
  getProducts,
} from "../../../redux/selectors/product";

import { getProductAction } from "../../../redux/actions";
import ProductHeader from "../../Common/ProductHeader";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const cartProducts = useSelector(getAllCartProducts);

  const AllProduct = async () => {
    const products = await getAllProducts();
    dispatch(getProductAction(products));
  };

  useEffect(() => {
    AllProduct();
  }, []);

  const checkProducts = useMemo(() => {
    return products.map((data: any) => {
      if (cartProducts.find((ele: any) => ele.id === data.id)) {
        return {
          ...data,
          isInCart: true,
        };
      } else {
        return {
          ...data,
          isInCart: false,
        };
      }
    });
  }, [products]);

  console.log(checkProducts, "checkProducts");

  return (
    <div>
      <ProductHeader />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {products &&
          products?.map((ele: any) => {
            const data = cartProducts.find((data: any) => ele.id === data.id)
              ? { ...ele, isInCart: true }
              : { ...ele, isInCart: false };

            return (
              <Grid item xs={2} sm={3} md={3}>
                <ProductCard ele={data} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Products;
