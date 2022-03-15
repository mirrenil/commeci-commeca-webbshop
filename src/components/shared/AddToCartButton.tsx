import LoadingButton from "@mui/lab/LoadingButton";
import { Box } from "@mui/system";
import { CSSProperties, useState } from "react";
import { useCart } from "../../context/CartContextProvider";
import { ProductData } from "../../ProductData";

interface Props {
  product: ProductData;
  size: string | any;
  style?: CSSProperties;
}

const AddToCartButton = (props: Props) => {
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  // change button text for one second
  const buttonOnLoad = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <LoadingButton
      size={props.size}
      variant="contained"
      loading={isLoading}
      loadingIndicator="Adding..."
      style={{ ...props.style, backgroundColor: "#CAC2B9" }}
      onClick={() => {
        addToCart(props.product);
        buttonOnLoad();
      }}
    >
      Add to cart
    </LoadingButton>
  );
};

export default AddToCartButton;
