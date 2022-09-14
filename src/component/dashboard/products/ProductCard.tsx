import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Button } from "@material-ui/core";

const ProductCard = ({ ele }: any) => {
  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia component="img" height="200" image={ele.url} alt="testImg" />
        <CardContent>
          <Typography>{ele.name}</Typography>
          <Typography>{ele.description}</Typography>
          <Typography>{ele.quantity}</Typography>
          <Typography>{ele.price}</Typography>
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
