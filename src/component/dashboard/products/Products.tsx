import * as React from "react";
import Grid from "@mui/material/Grid";
import Cart from "../cart/Cart";
import { Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Products = () => {
  return (
    <div>
      <Typography variant="h5" className="product-header">
        Shopping Cart
        <ShoppingCartIcon fontSize="large" style={{marginRight: "20px", cursor: "pointer"}} />
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {[1, 2, 3, 4].map((_) => {
          return (
            <Grid item xs={2} sm={3} md={3}>
              <Cart />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Products;
