import { Typography } from "@material-ui/core";
import testImg from "../../../assets/images/img.jpg";
import CardMedia from "@mui/material/CardMedia";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import IndeterminateCheckBoxSharpIcon from "@mui/icons-material/IndeterminateCheckBoxSharp";

const Cart = ({ ele }: any) => {
  return (
    <>
      <div className="cart">
        <CardMedia style={{ width: "150px" }} />
        <Typography variant="h6" style={{ fontWeight: "600" }}>
          Product Name
        </Typography>
        <Typography variant="h6" style={{ fontWeight: "600" }}>
          Description
        </Typography>
        <Typography variant="h6" style={{ fontWeight: "600" }}>
          Quantity
        </Typography>
        <Typography variant="h6" style={{ fontWeight: "600" }}>
          Unit Price
        </Typography>
      </div>
      <div className="cart">
        <CardMedia
          component="img"
          height="100px"
          image={testImg}
          alt="testImg"
          style={{ width: "150px", borderRadius: ".25rem" }}
        />
        <Typography>Product Name</Typography>
        <Typography>Description</Typography>
        <div style={{ display: "flex" }}>
          <AddBoxSharpIcon />
          <Typography>Quantity</Typography>
          <IndeterminateCheckBoxSharpIcon />
        </div>
        <Typography>Unit Price</Typography>
      </div>
    </>
  );
};

export default Cart;
