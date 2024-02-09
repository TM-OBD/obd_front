import * as React from "react";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import {ThemeProvider} from "@mui/material";
import Footer from "./components/Footer";
import {theme} from "./shared/styles";

// Основной компонент приложения
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="outer-container">
                <div className="inner-container">
                    <Header/>
                    <Body/>
                    <Footer/>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;
