import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProductCard from "../products/ProductCard";
import { getAllProducts } from "../../../utils/api/Product";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "../../../redux/selectors/product";

import { getProductAction } from "../../../redux/actions";
import ProductHeader from "../../Common/ProductHeader";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAuthUser);
  console.log(products, "lllllllllll");

  const AllProduct = async () => {
    const products = await getAllProducts();
    dispatch(getProductAction(products));
  };
  useEffect(() => {
    AllProduct();
  }, []);

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
            return (
              <Grid item xs={2} sm={3} md={3}>
                <ProductCard ele={ele} />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default Products;
