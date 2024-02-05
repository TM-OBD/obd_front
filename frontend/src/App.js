import * as React from "react";
import Header from "./components/Header";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const InnerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  min-height: 100%;
`;

// Основной компонент приложения
function App() {
  return (
    <div className="outer-container">
      <InnerContainer>
        <Header></Header>
      </InnerContainer>
    </div>
  );
}

export default App;