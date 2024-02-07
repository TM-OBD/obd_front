import { createTheme } from "@mui/material";

export const theme = createTheme({
  // Палитра цветов, пока использовать только primary, поскольку для secondary не определены нужные цвета
  palette: {
    primary: {
      main: "#F1F1F1",
      mainBg: "#111112",
      borderBlue: "#54AFEC",
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      contrastText: "#47008F",
    },
  },
});
