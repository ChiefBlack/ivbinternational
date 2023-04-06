import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 20px;
  flex-direction: ${({ layout }) => layout || "row"};

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }
  h2 {
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
