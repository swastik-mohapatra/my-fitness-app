import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import Chest from "../assets/icons/chest2.png";
import Cardio from "../assets/icons/cardio.png";
import LowerArms from "../assets/icons/lowerarms.png";
import LowerLegs from "../assets/icons/lowerlegs.png";
import UpperArms from "../assets/icons/upperarms.png";
import UpperLegs from "../assets/icons/upperlegs.png";
import Neck from "../assets/icons/neck.png";
import Waist from "../assets/icons/waist.png";
import Shoulder from "../assets/icons/shoulder.png";
import Back from "../assets/icons/back.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const dailyExercises = [
    { id: 1, part: Icon },
    { id: 2, part: Back },
    { id: 3, part: Cardio },
    { id: 4, part: Chest },
    { id: 5, part: LowerArms },
    { id: 6, part: LowerLegs },
    { id: 7, part: Neck },
    { id: 8, part: Shoulder },
    { id: 9, part: UpperArms },
    { id: 10, part: UpperLegs },
    { id: 11, part: Waist },
  ];

  return (
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
        {/* {dailyExercises.map(({id, part}) => ( */}
          
            <img src={Icon} alt="" style={{ width: "40px", height: "40px" }} />
          
        {/* ))} */}

        <Typography
          fontSize="24px"
          fontWeight="bold"
          fontFamily="Alegreya"
          color="#3A1212"
          textTransform="capitalize"
        >
          {" "}
          {item}
        </Typography>
      </Stack>
    </div>
  );
};

export default BodyPart;
