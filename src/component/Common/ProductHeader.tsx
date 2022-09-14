import { Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ProductHeader = () => {
  return (
    <Typography variant="h5" className="product-header">
      Shopping Cart
      <div>
        <ShoppingCartIcon
          fontSize="large"
          style={{ marginRight: "20px", cursor: "pointer" }}
        />
      </div>
    </Typography>
  );
};

export default ProductHeader;
