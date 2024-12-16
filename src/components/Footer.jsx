/* eslint-disable quotes */
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
// import Logo from "../assets/images/Logo-1.png";

const Footer = ({ darkMode }) => (
  <Box mt="80px" bgcolor={darkMode ? "#3d4045" : "#FFF3F4"}>
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      {/* <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} /> */}
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "24px", xs: "18px" } }}
      mt="30px"
      textAlign="center"
      pb="40px"
    >
      Made with ❤️ by Swastik Mohapatra
    </Typography>
  </Box>
);

export default Footer;
