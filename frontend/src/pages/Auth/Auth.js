import { Box } from "@mui/material";

// Компонент страницы авторизации, саму логику авторизации будем писать в другом компоненте
const Auth = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      minHeight: "100%",
      backgroundColor: "background.default",
    }}>
      <h1>This is Auth page!</h1>
    </Box>
  )
}

export default Auth;