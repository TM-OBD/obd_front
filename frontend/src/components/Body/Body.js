import * as React from "react";
import Box from "@mui/material/Box";
import FAQ from "./FAQ";
import styled from "@emotion/styled";
import TitleBlock from "./TitleBlock"

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

// Компонент боди приложения
function Body() {
  return (
    <Container>
		<TitleBlock></TitleBlock>
      <FAQ></FAQ>
    </Container>
  );
}
export default Body;