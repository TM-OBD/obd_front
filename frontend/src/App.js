import * as React from "react";
import { createContext, useEffect } from "react";
import Header from "./components/Header/Header";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import { IsLoginedContext } from "./shared/Context";
import Main from "./pages/Main/Main";
import Tariffs from "./pages/Tariffs/Tariffs";
import Services from "./pages/Services/Services";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import styled from "@emotion/styled";

const InnerContainer = styled(Box)`
  width: 100%;
`;

const RoutesContainer = styled(Box)`
  width: 100%;
`;

// Основной компонент приложения
function App() {
  // Хук навигации, нужен для клиентского роутинга
  // При вызове navigate первым параметром нужно передать путь в строковом формате, пример navigate("/home")
  const navigate = useNavigate();

  // Создание самой палитры темы из MUI
  const theme = React.useMemo(() =>
    createTheme({
      palette: {
        // mode: "light",
      },
    })
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
      document.title = "Вход в систему";
    }
  }, []);

  return (
    <IsLoginedContext.Provider value={{ isLoginedUser, setIsLoginedUser }}>
      {/* <ColorModeContext.Provider> */}
        <ThemeProvider theme={theme}>
          <CssBaseline></CssBaseline>
          <div className="outer-container">
            <InnerContainer
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
              }}
            >
              {isLoginedUser && <Header></Header>}
              <RoutesContainer>
                <Routes>
                  <Route path="/" element={<Main theme={theme}></Main>}></Route>
                  <Route path="/auth" element={<Auth></Auth>}></Route>
                  <Route path="/tariffs" element={<Tariffs></Tariffs>}></Route>
                  <Route
                    path="/services"
                    element={<Services></Services>}
                  ></Route>
                  <Route path="/profile" element={<Profile></Profile>}></Route>
                  <Route
                    path="/settings"
                    element={<Settings></Settings>}
                  ></Route>
                </Routes>
              </RoutesContainer>
            </InnerContainer>
          </div>
        </ThemeProvider>
      {/* </ColorModeContext.Provider> */}
    </IsLoginedContext.Provider>
  );
}

export default App;
