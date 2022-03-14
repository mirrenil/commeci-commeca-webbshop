import { Box, Container, Grid, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
export function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#6C665F"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Customer Care</Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  FAQ
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Collection</Box>
              <Box>
                <Link href="/" color="inherit">
                  The Lookbook
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  2022 Spring Collection
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>About us</Box>
              <Box>
                <Link href="/" color="inherit">
                  Design philiosophy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Find a store near you
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Work with us
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box
            textAlign="center"
            pt={{ xs: 5, sm: 10 }}
            pb={{ xs: 5, sm: 0 }}
            display="flex"
            justifyContent="space-evenly"
          >
            <LocalPhoneIcon />
            <InstagramIcon />
            <FacebookIcon />
          </Box>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            comme ci comme ça &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
