import { LoadingButton } from "@mui/lab";
import { CSSProperties, useState } from "react";
// import { setOrder, useOrder } from "../context/OrderContextProvider";

interface Props {
  size: string | any;
  style?: CSSProperties;
}

const ConfirmPurchaseButton = (props: Props) => {
  // const { setOrder } = useOrder();
  const [isLoading, setIsLoading] = useState(false);

  const buttonOnLoad = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <LoadingButton
      size={props.size}
      variant="contained"
      loading={isLoading}
      loadingIndicator="Confirming Purchase..."
      style={{ ...props.style, backgroundColor: "#CAC2B9" }}
      sx={{ width: "400px" }}
      onClick={() => {
        buttonOnLoad();
        // setOrder();
      }}
    >
      Confirm Purchase
    </LoadingButton>
  );
};

export default ConfirmPurchaseButton;
