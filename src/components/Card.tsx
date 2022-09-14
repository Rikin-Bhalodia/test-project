import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import BookmarkAdd from "@mui/icons-material/BookmarkAddOutlined";

export default function BasicCard({props}) {
  console.log(props)
  return (
    <Card variant="outlined" sx={{ maxWidth: "200px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        <Typography level="h2" fontSize="md" sx={{ alignSelf: "flex-start" }}>
          {props.product_name}
        </Typography>
      </Box>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}
      >
        {/* <BookmarkAdd /> */}
      </IconButton>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={props.product_image} alt={props.product_name} />
      </AspectRatio>
      <Typography level="body2">{props.description}</Typography>

      <Box sx={{ display: "flex" }}>
        <div>
          <Typography level="body3">price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {props.unit_Price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="neutral"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: "auto", fontWeight: 600 }}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
}
