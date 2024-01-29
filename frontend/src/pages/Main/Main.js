import { Box, CardMedia, Typography } from "@mui/material";
import { useEffect } from "react";
import { getChannels, getTempOfMotor } from "../../shared/utils";
import styled from "@emotion/styled";
import mainImage from "../../images/pages/main/main.jpg";

const Container = styled(Box)`
  width: 100%;
`;

const PreviewContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  // Пример использования разных размеров MUI через styled props
  // В данном примере .up("xs") обозначает что при размере экрана xs и больше будет высота 100vh
  // Чтобы задать условный размер xs и меньше нужно поменять на .down("xs")
  /* ${(props) => props.theme.breakpoints.up("xs")} {
    height: 100vh;
  } */
`;

const PreviewImage = styled(CardMedia)`
  filter: brightness(50%);
  width: 100%;
  height: 100%;
`;

const PreviewTextContainer = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PreviewTitle = styled(Typography)`
  color: white;
  padding: 16px;
`;

const PreviewDesc = styled(Typography)`
  color: white;
  padding: 16px;
`;

const MainTitle = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: black;
  padding: 16px;
`;

const Main = ({ theme }) => {
  useEffect(() => {
    getChannels().then((res) => {
      console.log(res)
    })
  }, []);
  return (
    <Container>
      <PreviewContainer theme={theme}>
        <PreviewImage image={mainImage}></PreviewImage>
        <PreviewTextContainer>
          <PreviewTitle variant="h2">Главная</PreviewTitle>
          <PreviewDesc>Это описание для главной страницы</PreviewDesc>
        </PreviewTextContainer>
      </PreviewContainer>
      <MainTitle variant="h4">iSyb Auto современный сервис для авто</MainTitle>
    </Container>
  );
};

export default Main;
