import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Button } from "@material-ui/core";
import testImg from "../../../assets/images/img.jpg";

const ProductCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia component="img" height="200" image={testImg} alt="testImg" />
        <CardContent>
          <Typography>Product Name</Typography>
          <Typography>Description</Typography>
          <Typography>Quantity</Typography>
          <Typography>Unit Price</Typography>
          <Button
            type="submit"
            size="medium"
            color="primary"
            variant="contained"
            style={{ marginTop: "10px" }}
          >
            Add to cart
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
