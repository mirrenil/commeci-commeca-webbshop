import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/icons/icon-shopping-cart.webp";
import userIcon from "../assets/icons/icon-user.webp";
import logo from "../assets/images/logo.svg";

interface Page {
  label: string;
  href: string;
}

function Header() {
  const [anchorMenu, setAnchorMenu] = useState(false);
  const { logoStyle, icon, iconsContainer, menuItems } = useStyles();

  const menuLeft: Page[] = [
    {
      label: "Furniture",
      href: "/",
    },
    {
      label: "Textiles",
      href: "/textiles",
    },
    {
      label: "Lighting",
      href: "/lighting",
    },
  ];

  const menuRight: Page[] = [
    {
      label: "Decoration",
      href: "/decoration",
    },
    {
      label: "Inspiration",
      href: "/inspiration",
    },
  ];

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorMenu(true);
  };

  const handleCloseMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorMenu(false);
  };

  const icons = () => {
    return (
      <div className={iconsContainer}>
        <Link to="/account">
          <img className={icon} src={userIcon} alt="login/logout" />
        </Link>
        <Link to="/checkoutpage">
          <img className={icon} src={cartIcon} alt="cart" />
        </Link>
      </div>
    );
  };

  const getMenuButtonsLeft = () => {
    return menuLeft.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
          }}
          sx={{
            textTransform: "capitalize",
            fontFamily: "Prata",
            m: "2.5rem",
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        >
          {label}
        </Button>
      );
    });
  };

  const getMenuButtonsRight = () => {
    return menuRight.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            component: <Link to={href}>,
          }
          sx={{
            textTransform: "capitalize",
            fontFamily: "Prata",
            m: "2.5rem",
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}}
          
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <AppBar
      sx={{
        backgroundColor: "#6C665F",
        padding: "0.5rem 1rem",
        placeContent: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          justifyContent: {
            xs: "space-between",
            sm: "space-between",
            md: "space-around",
            lg: "space-around",
          },
        }}
      >
        <Box
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenMenu}
            sx={{
              color: "white",
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorReference="anchorPosition"
            anchorPosition={{ top: 75, left: 0 }}
            keepMounted
            open={Boolean(anchorMenu)}
            onClose={handleCloseMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {menuLeft.map((item) => (
              <MenuItem
                sx={{
                  width: "200px",
                }}
                key={item.label}
                onClick={handleCloseMenu}
                component={Link}
                to={item.href}
              >
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "Prata",
                    fontSize: ".9rem",
                  }}
                  textAlign="center"
                >
                  {item.label}
                </Typography>
              </MenuItem>
            ))}
            {menuRight.map((item) => (
              <MenuItem
                key={item.label}
                onClick={handleCloseMenu}
                component={Link}
                to={item.href}
              >
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontFamily: "Prata",
                    fontSize: ".9rem",
                  }}
                  textAlign="center"
                >
                  {item.label}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        {getMenuButtonsLeft()}
        <img className={logoStyle} src={logo} alt="comme ci comme ca"></img>
        {getMenuButtonsRight()}
        {icons()}
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles(() => ({
  logoStyle: {
    width: "80px",
    height: "80px",
    margin: "0 1rem",
  },
  iconsContainer: {
    display: "flex",
    alignSelf: "center",
  },
  icon: {
    width: "25px",
    height: "25px",
    margin: ".5rem",
  },
  menuItems: {
    textTransform: "capitalize",
    fontFamily: "Prata",
  },
}));

export default Header;
