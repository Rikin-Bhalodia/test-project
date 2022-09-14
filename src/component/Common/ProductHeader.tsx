import { Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import MyForm from "./Form";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ProductHeader = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Typography variant="h5" className="product-header">
      Shopping Cart
      <Typography onClick={handleOpen} style={{ cursor: "pointer" }}>
        Add Product
      </Typography>
      <div onClick={() => navigate("/cart")} className="main_logo">
        <ShoppingCartIcon
          fontSize="large"
          style={{ marginRight: "20px", cursor: "pointer" }}
        />
        <div className="circle">1</div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <MyForm setOpen={setOpen} />
          </Box>
        </Fade>
      </Modal>
    </Typography>
  );
};

export default ProductHeader;
