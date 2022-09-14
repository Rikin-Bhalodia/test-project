import { Typography, Button } from "@material-ui/core";
import testImg from "../../../assets/images/img.jpg";
import CardMedia from "@mui/material/CardMedia";
import AddBoxSharpIcon from "@mui/icons-material/AddBoxSharp";
import IndeterminateCheckBoxSharpIcon from "@mui/icons-material/IndeterminateCheckBoxSharp";
import ProductHeader from "../../Common/ProductHeader";
import { getAllProductFromCart } from "../../../utils/api/Cart";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartProducts } from "../../../redux/selectors/product";
import { getCartProductAction } from "../../../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAllCartProducts);
  console.log(products, "kkkkk");

  const allCartProduct = async () => {
    const cartProducts = await getAllProductFromCart();
    dispatch(getCartProductAction(cartProducts));
  };

  useEffect(() => {
    allCartProduct();
  }, []);
  return (
    <>
      <ProductHeader />
      <div className="home">
        <div className="cart-main">
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
              <AddBoxSharpIcon style={{ cursor: "pointer" }} />
              <Typography style={{ margin: "0 5px" }}>Quantity</Typography>
              <IndeterminateCheckBoxSharpIcon style={{ cursor: "pointer" }} />
            </div>
            <Typography>Unit Price</Typography>
            <DeleteIcon style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="filters summary">
          <Typography variant="h4">Subtotal</Typography>
          <Typography variant="h6" style={{ margin: "20px 0" }}>
            Total: ₹ 500
          </Typography>
          <Button size="medium" color="default" variant="contained">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
