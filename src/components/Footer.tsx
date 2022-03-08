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
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Customer Care</Box>
              <Box>
                <Link href="/" color="inherit">
                  Kontakta oss
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
              <Box borderBottom={1}>Kollektion</Box>
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
              <Box borderBottom={1}>Om oss</Box>
              <Box>
                <Link href="/" color="inherit">
                  Designfiliosofi
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Hitta butiker
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Arbeta hos oss
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
