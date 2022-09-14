import * as React from "react";
import Grid from "@mui/material/Grid";
import ProductHeader from "../../Common/ProductHeader";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <div>
      <ProductHeader />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {[1, 2, 3, 4].map((_) => {
          return (
            <Grid item xs={2} sm={3} md={3}>
              <ProductCard />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
