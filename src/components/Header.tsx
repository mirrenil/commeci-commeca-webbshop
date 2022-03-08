import { AppBar, Button, Toolbar } from "@mui/material";
import cartIcon from "../assets/icons/icon-shopping-cart.webp";
import userIcon from "../assets/icons/icon-user.webp";
import logo from "../assets/images/logo.svg";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

interface Page {
  label: string;
  href: string;
}

function Header() {
  const { header, navItems, logoStyle, icon, iconsContainer } = useStyles();

  const menuLeft: Page[] = [
    {
      label: "Furniture",
      href: "/furniture",
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

  const navbar = () => {
    return (
      <Toolbar>
        {getMenuButtonsLeft()}
        <img className={logoStyle} src={logo} alt="comme ci comme ca"></img>
        {getMenuButtonsRight()}
      </Toolbar>
    );
  };

  const icons = () => {
    return (
      <div className={iconsContainer}>
        {/* <Link to="/"> */}
        <img className={icon} src={userIcon} alt="login/logout" />
        {/* </Link>
        <Link to="/"> */}
        <img className={icon} src={cartIcon} alt="cart" />
        {/* </Link> */}
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
            // component: RouterLink,
            className: navItems,
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
            to: href,
            // component: RouterLink,
            className: navItems,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <AppBar className={header}>
      {navbar()}
      {icons()}
    </AppBar>
  );
}

const useStyles = makeStyles(() => ({
  header: {
    background: "#6C665F",
    padding: "0.5rem 1rem",
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItems: {
    textTransform: "capitalize",
    fontFamily: "Prata",
    margin: "2.5rem",
  },
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
}));

export default Header;
