import { Box, Button, CardMedia, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { getChannels, getTempOfMotor } from "../../shared/utils";
import styled from "@emotion/styled";
import mainImage from "../../images/pages/main/main.jpg";
import autoTrackingImg from "../../images/pages/main/autotracking.png";

const Container = styled(Box)`
  width: 100%;
`;

const PreviewContainer = styled(Paper)`
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
  color: ${({ theme }) => theme.palette.blue.contrastText};
  padding: 16px;
  font-weight: 500;
`;

const PreviewDesc = styled(Typography)`
  color: ${({ theme }) => theme.palette.blue.contrastText};
  padding: 16px;
`;

const MainTitle = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${({ theme }) => theme.palette.blue.darkText};
  padding: 16px;
`;

const AutoTrackingContainer = styled(Box)`
  position: relative;
  width: 100%;
  padding: 16px;
`;

const ATTitleContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.blue.dark};
  color: ${({ theme }) => theme.palette.lightText};
  border-radius: 16px;
  padding: 16px;
  ${(props) => props.theme.breakpoints.between("xs","md")} {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 300px;
    transform: "";
    z-index: 1;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    position: relative;
    top: 0;
    margin-left: 40%;
    width: 60%;
    height: 80vh;
    transform: "";
    padding-left: 15%;
    z-index: 0;
  }
`;

const ATTitle = styled(Typography)`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 30%;
`;

const ATDesc = styled(Typography)`
display: flex;
justify-content: center;
width: 100%;
height: 50%;
`;

const ATImageContainer = styled(Box)`
  overflow: hidden;
  border-radius: 16px;
  ${(props) => props.theme.breakpoints.between("xs","md")} {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    z-index: 0;
  }
  ${(props) => props.theme.breakpoints.up("md")} {
    position: absolute;
    width: 50%;
    height: 50vh;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const ATImage = styled(CardMedia)`
  ${(props) => props.theme.breakpoints.up("md")} {
    height: 100%;
  }
`;

const ATBtnContainer = styled(Box)`
display: flex;
justify-content: flex-end;
width: 100%;
height: 20%;
`

const Main = () => {
  useEffect(() => {
    getChannels().then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <Container>
      <PreviewContainer elevation={3}>
        <PreviewImage image={mainImage}></PreviewImage>
        <PreviewTextContainer>
          <PreviewTitle variant="h2" sx={{ color: "inherit" }}>
            iSyb Auto
          </PreviewTitle>
          <PreviewDesc>Современный сервис для авто</PreviewDesc>
        </PreviewTextContainer>
      </PreviewContainer>
      <MainTitle component="h4" variant="h4">
        Наши сервисы
      </MainTitle>
      <AutoTrackingContainer>
        <ATImageContainer>
          <ATImage
            component="img"
            alt="autotracking"
            image={autoTrackingImg}
          ></ATImage>
        </ATImageContainer>
        <ATTitleContainer>
          <ATTitle component="h3" variant="h3">
            Автотрекинг
          </ATTitle>
          <ATDesc>
            Установив специальное оборудование в OBD разъем, вы подключаетесь к
            серверу, который начинает мониторить ваш автомобиль в режиме 24/7.
          </ATDesc>
          <ATBtnContainer>
          <Button size='small' variant="contained" sx={{height:"48px"}}>Подробнее</Button>
          </ATBtnContainer>
        </ATTitleContainer>
      </AutoTrackingContainer>
    </Container>
  );
};

export default Main;
