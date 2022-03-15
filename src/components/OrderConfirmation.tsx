import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { useCart } from "../context/CartContextProvider";

const OrderConfirmation = () => {
  const { cart, sumProductPrice, numWithSpaces, sumCartAmount } = useCart();

  // this function should probably be put the step before and pass in to the order array/api (if there is one) as a new number is generated now whenever we refresh the page
  const generateOrderNum = () => {
    const yy: string = new Date().getFullYear().toString().substr(-2);
    const mm: number = new Date().getMonth() + 1;
    const dd: number = new Date().getDate();
    const formattedDate =
      yy + (mm > 9 ? "" : "0") + mm + (dd > 9 ? "" : "0") + dd;

    const randomNum: number = Math.floor(Math.random() * 100000);
    const orderNum: string = formattedDate + "-" + randomNum;
    return orderNum;
  };

  return (
    <Container
      sx={{
        padding: "2rem",
        minHeight: "35rem",
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          background: "#F3F2F0",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{ textTransform: "uppercase", fontFamily: "Prata", mt: "1rem" }}
          variant="h6"
        >
          Thank you for your purchase!
        </Typography>
        <Typography sx={{ fontFamily: "Prata", mt: "1rem" }} variant="inherit">
          Order#: {generateOrderNum()}
        </Typography>
        <Typography
          sx={{ fontFamily: "Prata", mt: "1rem" }}
          variant="inherit"
        ></Typography>
        <Box sx={{}}>
          <TableContainer>
            <Table aria-label="order list">
              <TableHead>
                <TableRow>
                  <TableCell>Article</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                  <TableCell align="right">Unit Price</TableCell>
                  <TableCell align="right">Subtotal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell
                      size="small"
                      component="th"
                      scope="row"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        height="60px"
                      />
                      {product.title}
                    </TableCell>
                    <TableCell align="right">{product.quantity}</TableCell>
                    <TableCell align="right">
                      {numWithSpaces(product.price)} SEK
                    </TableCell>
                    <TableCell align="right">
                      {numWithSpaces(sumProductPrice(product))} SEK
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell
                    size="small"
                    align="right"
                    sx={{
                      border: "none",
                      padding: "30px 16px 5px 16px",
                    }}
                    colSpan={3}
                  >
                    Item Subtotal
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ padding: "30px 16px 5px 16px", border: "none" }}
                  >
                    {numWithSpaces(sumCartAmount() * 0.75)} SEK
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: "none" }} />
                  <TableCell
                    align="right"
                    sx={{ border: "none", padding: "0px 16px" }}
                    colSpan={2}
                  >
                    Delivery
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ padding: "0px 16px", border: "none" }}
                  >
                    {numWithSpaces(0)} SEK
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ border: "none" }} />
                  <TableCell
                    align="right"
                    sx={{
                      border: "none",
                      fontWeight: "bold",
                      padding: "0px 16px",
                    }}
                    colSpan={2}
                  >
                    Total
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      fontWeight: "bold",
                      padding: "0px 16px",
                      border: "none",
                    }}
                  >
                    {numWithSpaces(sumCartAmount())} SEK
                  </TableCell>
                </TableRow>
                <TableRow>
                  {/* <TableCell sx={{ border: "none" }} /> */}
                  <TableCell
                    sx={{
                      border: "none",
                      padding: "8px 16px 0px 16px",
                    }}
                  >
                    Delivery Method
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "none",
                      padding: "0px 16px",
                      fontWeight: "bold",
                    }}
                  >
                    Postnord (3-5 weekdays)
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ border: "none", padding: "0px 16px" }}
                    colSpan={1}
                  >
                    VAT 25%
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ padding: "0px 16px", border: "none" }}
                  >
                    {numWithSpaces(sumCartAmount() * 0.25)} SEK
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      border: "none",
                      padding: "16px 16px 0px 16px",
                    }}
                  >
                    Contact Information
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "none",
                      padding: "16px 16px 0px 16px",
                      fontWeight: "bold",
                    }}
                    colSpan={3}
                  >
                    Name
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    sx={{
                      border: "none",
                    }}
                  />
                  <TableCell
                    sx={{
                      border: "none",
                      padding: "0px 16px",
                      fontWeight: "bold",
                    }}
                    colSpan={3}
                  >
                    Address Line 1 <br />
                    Address Line 2
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    sx={{
                      border: "none",
                      padding: "0px 16px",
                    }}
                  />
                  <TableCell
                    sx={{
                      border: "none",
                      padding: "0px 16px",
                      fontWeight: "bold",
                    }}
                    colSpan={3}
                  >
                    Email Address
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    colSpan={1}
                    sx={{
                      border: "none",
                      padding: "0px 16px",
                    }}
                  />
                  <TableCell
                    sx={{
                      border: "none",
                      padding: "0px 16px",
                      fontWeight: "bold",
                    }}
                    colSpan={3}
                  >
                    Contact Number
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    sx={{
                      border: "none",
                      padding: "16px",
                    }}
                  >
                    Payment Method
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "none",
                      fontWeight: "bold",
                    }}
                    colSpan={3}
                  >
                    Swish
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Typography sx={{ textAlign: "center", fontFamily: "Prata" }}>
            We are working hard to source new products from worldwide. <br />
            Sign up for our membership to make sure you are the first to be
            notified when we officially launch our store.
          </Typography> */}
        </Box>
      </Container>
    </Container>
  );
};
export default OrderConfirmation;
