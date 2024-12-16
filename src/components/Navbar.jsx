/* eslint-disable quotes */
import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Stack } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import Logo from "../assets/images/Logo2.png";

const Navbar = ({ toggleDarkMode, darkMode }) => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{ gap: { sm: "123px", xs: "40px" }, justifyContent: "none" }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px", margin: "20px 20px 0px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: darkMode ? "#ffffff" : "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      <a
        href="#exercises"
        style={{
          textDecoration: "none",
          color: darkMode ? "#ffffff" : "#3A1212",
        }}
      >
        Exercise
      </a>
      <IconButton onClick={toggleDarkMode} sx={{ ml: "auto" }}>
        {darkMode ? (
          <Brightness7Icon sx={{ color: "whitesmoke" }} />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Stack>
  </Stack>
);

export default Navbar;
