/* eslint-disable quotes */
import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

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

// Define a mapping between body part names and their corresponding image URLs
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

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  const handleClick = () => scrollPrev();

  return (
    <Box onClick={handleClick} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Box>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  const handleClick = () => scrollNext();

  return (
    <Box onClick={handleClick} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Box>
  );
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
      m="0 40px"
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
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data?.map(renderItem)}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
