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
import { useCart } from "../context/CartContextProvider";
import HomeButton from "./shared/HomeButton";

const OrderConfirmation = () => {
  const { order, sumProductPrice, numWithSpaces, sumCartAmount } = useCart();

  return (
    <Container
      sx={{
        padding: "2rem",
        minHeight: "35rem",
      }}
    >
      {order.map((orderDetail) => {
        return (
          <Container
            maxWidth="md"
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              background: "#F3F2F0",
              textAlign: "center",
            }}
            key={orderDetail.orderNo}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontFamily: "Prata",
                mt: "1rem",
              }}
              variant="h6"
            >
              Thank you for your purchase!
            </Typography>
            <Typography
              sx={{ fontFamily: "Prata", mt: "1rem" }}
              variant="inherit"
            >
              Order#: {orderDetail.orderNo}
              {/* {console.log(orderDetail.boughtItems)} */}
              {/* {console.log(
                Object.keys(orderDetail.boughtItems).map(function (key, item) {
                  return orderDetail.boughtItems[key];
                })
              )} */}
              {/* {console.log(orderDetail.boughtItems.length)} */}
            </Typography>
            <Typography
              sx={{ fontFamily: "Prata", mt: "1rem" }}
              variant="inherit"
            ></Typography>
            <Box>
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
                    {orderDetail.boughtItems.map((product) => (
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
                          padding: "16px 16px 0 16px",
                          fontWeight: "bold",
                        }}
                        colSpan={3}
                      >
                        {orderDetail.name}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        colSpan={1}
                        sx={{
                          border: "none",
                          padding: "0 16px",
                        }}
                      />
                      <TableCell
                        sx={{
                          border: "none",
                          padding: "0 16px",
                          fontWeight: "bold",
                        }}
                        colSpan={3}
                      >
                        {orderDetail.address}
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
                        {orderDetail.email}
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
                        {orderDetail.phonenumber}
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
            </Box>
            <HomeButton message="Back to home" />
          </Container>
        );
      })}
    </Container>
  );
};

export default OrderConfirmation;
