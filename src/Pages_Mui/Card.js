import { StyledCard } from "./StyledCard";

export default function Card({ item: { id, title, body, image,subBody,subTitle,subHeadTitle,subHeading } }) {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
        <h2>{subTitle}</h2>
        <p>{subBody}</p>
        <h2>{subHeadTitle}</h2>
        <p>{ subHeading}</p>
      </div>

      <div>
        <img src={`./images/${image}`} />
      </div>
    </StyledCard>
  );
}
