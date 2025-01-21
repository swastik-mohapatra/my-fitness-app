/* eslint-disable quotes */
import React from "react";
import { Box } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";

// Import body part images directly using ES6 import syntax
import all from "../assets/icons/gym2.png";
import back from "../assets/icons/back2.png";
import cardio from "../assets/icons/cycling.png";
import chest from "../assets/icons/chest3.png";
import lowerArms from "../assets/icons/forearm.png";
import lowerLegs from "../assets/icons/calves.png";
import neck from "../assets/icons/neck2.png";
import shoulders from "../assets/icons/shoulder2.png";
import upperArms from "../assets/icons/arms.png";
import upperLegs from "../assets/icons/legs.png";
import waist from "../assets/icons/abs.png";

const bodyPartImages = {
  all,
  back,
  cardio,
  chest,
  "lower arms": lowerArms,
  "lower legs": lowerLegs,
  neck,
  shoulders,
  "upper arms": upperArms,
  "upper legs": upperLegs,
  waist,
};

const HorizontalScrollbar = ({
  data,
  bodyParts,
  setBodyPart,
  bodyPart,
  darkMode,
}) => {
  const renderItem = (item) => (
    <Box
      key={item.id || item}
      itemId={item.id || item}
      title={item.id || item}
      m="0 30px"
    >
      {bodyParts ? (
        <BodyPart
          item={item}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          imageUrl={bodyPartImages[item]}
          darkMode={darkMode}
        />
      ) : (
        <ExerciseCard exercise={item} darkMode={darkMode} />
      )}
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        overflowX: "auto",
        whiteSpace: "nowrap",
        gap: "20px",
        padding: "10px",
        scrollbarWidth: "thin",
        "&::-webkit-scrollbar": {
          height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: darkMode ? "#555" : "#ccc",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
      }}
    >
      {data?.map(renderItem)}
    </Box>
  );
};

export default HorizontalScrollbar;
