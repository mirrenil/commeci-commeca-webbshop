import React, { CSSProperties } from "react";
import userIcon from "../assets/icons/icon-user.svg";
import cartIcon from "../assets/icons/icon-shopping-cart.svg";

function Header() {
  return (
    <header style={rootStyle}>
      <h1>comme ci comme ça</h1>
      <img style={iconStyle} src={userIcon} alt="user" />
      <img style={iconStyle} src={cartIcon} alt="cart" />
    </header>
  );
}

const rootStyle: CSSProperties = {
  background: "yellow",
  width: "100vw",
  display: "flex",
  justifyContent: "space-between",
  padding: "0.5rem 1rem",
};

const iconStyle: CSSProperties = {
  width: "30px",
  cursor: "pointer",
};

export default Header;
