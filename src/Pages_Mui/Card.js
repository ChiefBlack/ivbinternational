import { StyledCard } from "./StyledCard";
import backgroundImage from "./images/conversation.svg";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import ImgMediaCard from "./ImgCardMedia";
import { Typography } from "@mui/material";

export default function Card({
  item: { id, title, body, image, subBody, subTitle, subHeadTitle, subHeading },
}) {
  return (
    <div>
      <StyledCard layout={id % 2 === 0 && "row-reverse"}>
        <Typography
          h1
          sx={{ fontSize: "30px", color: "green", fontWeight: "900", }}
        >
          About us
        </Typography>

        <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <h2>{subTitle}</h2>
        <p>{subBody}</p>
        <h2>{subHeadTitle}</h2>
        <p>{subHeading}</p>
      </div>
      </StyledCard>
      <Typography h1 sx={{ fontSize: "30px", color: "lightblue" }}>
        {" "}
        The founders of the Company
      </Typography>
      <ImgMediaCard />
    </div>
  );
}
