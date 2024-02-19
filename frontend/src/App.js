import * as React from "react";
import Header from "./components/Header";
import Body from "./components/Body/Body";
import { ThemeProvider } from "@mui/material";
import Footer from "./components/Footer";
import { theme } from "./shared/styles";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

// Основной компонент приложения
function App(props) {
  function ScrollTop(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#header"
      );

      if (anchor) {
        anchor.scrollIntoView({
          block: "center",
        });
      }
    };

    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{
            position: "fixed",
            display: "flex",
            justifyContent: "flex-end",
            bottom: 32,
            right: 16,
            padding: '0 7% 0 7%',
            zIndex: 7,
          }}
        >
          {children}
        </Box>
      </Fade>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="outer-container">
        <div className="inner-container">
          <Header />
          <Body />
          <Footer />
          <ScrollTop {...props}>
            <Fab size="medium" aria-label="scroll back to top">
              <KeyboardArrowUpIcon
                sx={{
                  zIndex: 7,
                }}
              />
            </Fab>
          </ScrollTop>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
