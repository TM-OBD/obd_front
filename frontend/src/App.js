import * as React from "react";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import { Box, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";
import Footer from "./components/Footer";
import { theme } from "./shared/styles";

// Основной компонент приложения
function App() {
  const sections = [
    "Як це працює",
    "Тарифи",
    "Про нас",
    "Відгуки",
    "Контакти",
    "FAQ",
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className="outer-container">
        <div className="inner-container">
          <Header sections={sections}></Header>
          <Body />
          <Footer sections={sections}></Footer>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
