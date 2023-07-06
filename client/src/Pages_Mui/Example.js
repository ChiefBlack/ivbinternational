import React from 'react';
import { Card, Typography, styled } from '@mui/material';

const MyContainer = styled(Card)({
  maxWidth: 'md',
  padding: '2rem',
  backgroundColor: '#f7f7f7',
  boxShadow: "0 2.8px 2.2px rgba(0, 0, 0, 0.34)",
});

const Header = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '2rem',
  color:"#69D2E7"
});

const Content = styled(Typography)({
  fontSize: '1rem',
});

const Example = ({
    item: { id, title, body },
  }) => {
  return (
    <MyContainer key={id}>
      <Header variant="h1" component="h2">
        {title}
      </Header>
      <Content>
        {body}
      </Content>
    </MyContainer>
  );
};

export default Example;
