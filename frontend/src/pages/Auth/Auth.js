import { Box } from "@mui/material";
import Test from "../Test";
// Компонент страницы авторизации, саму логику авторизации будем писать в другом компоненте
const Auth = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "background.default",
    }}>
		<Test></Test>
    </Box>
  )
}

export default Auth;