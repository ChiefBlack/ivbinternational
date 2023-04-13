import styled from "styled-components";

import backgroundImage from "./images/conversation.svg";


export const StyledCard = styled.div`
  display: flex;
  background: url(${backgroundImage}) no-repeat center center fixed;
  height: 400px;
  align-items:center;
  justify-content:center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin-top: 40px;
  
  flex-direction: ${({ layout }) => layout || "row"};

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }
  h1 {
    color:#69D2E7;
    font-size: 30px;
  }
p{
font-size:20px;
font-family: Arial, Helvetica, sans-serif;

}
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
  
`;
