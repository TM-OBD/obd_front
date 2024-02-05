import * as React from "react";
import Header from "./components/Header";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import Footer from "./components/Footer";

const InnerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1600px;
  min-height: 100%;
`;

// Основной компонент приложения
function App() {
const sections = ["Як це працює", "Тарифи", "Про нас", "Відгуки", "Контакти", "FAQ"];
  return (
    <div className="outer-container">
      <InnerContainer>
        <Header sections={sections}></Header>
				<Footer sections={sections}></Footer>
      </InnerContainer>
    </div>
  );
}

export default App;