import { Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const ProductHeader = () => {
    const navigate = useNavigate();
    
  return (
    <Typography variant="h5" className="product-header">
      Shopping Cart
      <div onClick={() => navigate("/cart")}>
        <ShoppingCartIcon
          fontSize="large"
          style={{ marginRight: "20px", cursor: "pointer" }}
        />
      </div>
    </Typography>
  );
};

export default ProductHeader;
