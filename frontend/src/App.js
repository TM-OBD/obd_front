import * as React from "react";
import { createContext, useEffect } from "react";
import Header from "./components/Header/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import { IsLoginedContext } from "./shared/Context";

// Создание контекста для ColorMode
const ColorModeContext = createContext({ toggleColorMode: () => {} });

// Основной компонент приложения
function App() {
  // Хук навигации, нужен для клиентского роутинга
  // При вызове navigate первым параметром нужно передать путь в строковом формате, пример navigate("/home")
  const navigate = useNavigate();
  // Тут все отвечает за создание состояния и функция смены темы
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        console.log(mode);
      },
    }),
    []
  );

  // Создание самой палитры темы из MUI, реагирует на смену стейта mode
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  // Стейт хранит boolean - вошёл юзер или нет
  const [isLoginedUser, setIsLoginedUser] = React.useState(true);

  // Хук эффекта, реагирует на перерендер компонента App
  useEffect(() => {
    if (!isLoginedUser) {
      // На данный момент его логика в том, чтобы при перезагрузке страницы пользователь оказывался на странице входа
      // В дальнейшем нужно будет сделать фичу с сессией, и по ее истечению юзер попадает сюда
      navigate("/auth");

      // Меняем название в title браузера на указанную строку
      document.title = "Obd - вход в систему";
    }
  }, []);

  return (
    <IsLoginedContext.Provider value={{ isLoginedUser, setIsLoginedUser }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline></CssBaseline>
          <div className="outer-container">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                maxWidth: "1600px",
                // bgcolor: "background.default",
                color: "text.primary",
                borderRadius: 1,
                minHeight: "100%",
              }}
            >
              {isLoginedUser && (
                <Header colorMode={colorMode} theme={theme}></Header>
              )}
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <Routes>
                  <Route path="/auth" element={<Auth></Auth>}></Route>
                </Routes>
              </Box>
            </Box>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </IsLoginedContext.Provider>
  );
}

export default App;
