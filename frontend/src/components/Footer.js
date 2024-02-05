import * as React from "react";
import styled from "@emotion/styled";
import { Box, Menu, MenuItem, Typography } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  width: 100%;
  height: 293px;
  background-color: #262629;
`;

const NavContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 20%;
  height: 100%;
`;

// Компонент футера приложения
function Footer({ sections }) {
  return (
    <Container>
      <NavContainer>
        {sections.map((section) => (
          <Typography textAlign="center">{section}</Typography>
        ))}
      </NavContainer>
    </Container>
  );
}
export default Footer;
