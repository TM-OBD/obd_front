import { useEffect } from "react";
import Header from "./pages/Header/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {


  return (
    <ThemeProvider theme={darkTheme}>
      <div className="outer-container">
        <div className="inner-container">
          <Header></Header>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
