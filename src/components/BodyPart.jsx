/* eslint-disable quotes */
import React from "react";
// eslint-disable-next-line quotes
import { Stack, Typography } from "@mui/material";

const BodyPart = ({ item, setBodyPart, bodyPart, imageUrl }) => (
  <div>
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={
          bodyPart === item
            ? {
              borderTop: "4px solid #FF2625",
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
            : {
              background: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "282px",
              cursor: "pointer",
              gap: "47px",
            }
        }
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >

      <img src={imageUrl} alt="" style={{ width: "60px", height: "60px" }} />

      <Typography
        fontSize="21px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  </div>
);

export default BodyPart;
