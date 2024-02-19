import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Car from "../../images/Main/Car.png";
import Background from "../../images/Main/Background.png";
import "../../index.css";
import styled from "@emotion/styled";

const Container = styled(Box)`
  position: relative;
  width: 100%;
  padding: 105px 7% 0 7%;
`;

const CarBackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
`;

const CarImage = styled.img`
  position: absolute;
  /* bottom: 0;
  right: 0; */
  top: 0;
  right: 0; 
  z-index: 3;
  width: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const StyledButton = styled(Button)`
  &:hover {
    background-color: #0040ff !important;
  }
`;

function TitleBlock() {
  return (
    <Container>
      <CarBackgroundImg src={Background} alt="background"></CarBackgroundImg>
      <CarImage src={Car} alt="car"></CarImage>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { lg: "32px", md: "28px", sm: "20px", xs: "14px" },
        }}
      >
        <Typography
          fontWeight={"400"}
          component="h1"
          fontSize={{ lg: "180px", md: "120px", sm: "90px", xs: "60px" }}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            color: (theme) => theme.palette.primary.main,
            fontFamily: "'Unbounded', sans-serif",
            zIndex: 2,
          }}
        >
          ISyb Auto
        </Typography>
        <Typography
          fontFamily={"Unbounded, sans-serif"}
          fontWeight={"400"}
          fontSize={{ lg: "30px", md: "30px", sm: "25px", xs: "20px" }}
          sx={{
            color: (theme) => theme.palette.primary.main,
            zIndex: 4,
          }}
        >
          сучасний сервіс
          <span style={{ color: "#54AFEC" }}> для авто</span>
        </Typography>
        <Typography
          fontFamily={"Inter, sans-serif"}
          fontWeight={"400"}
          fontSize={{ lg: "20px", md: "18px", sm: "16px", xs: "14px" }}
          lineHeight={{ lg: "120%", sm: "110%" }}
          sx={{
            color: (theme) => theme.palette.primary.main,
            zIndex: 4,
          }}
        >
          Встановивши спеціальне обладнання в <br />
          OBD роз'єм, ви підключаєтеся до <br />
          сервера, який починає моніторити ваш <br />
          автомобіль у режимі
          <span style={{ color: "#54AFEC" }}> 24/7.</span>
        </Typography>
        <StyledButton
          variant="contained"
          sx={{
            cursor: "pointer",
            borderRadius: { lg: "15px", md: "14px", sm: "10px", xs: "8px" },
            width: { lg: "300px", md: "250px", sm: "150px", xs: "100px" },
            height: { lg: "64px", md: "48px", sm: "32px", xs: "28px" },
            background: "#54AFEC",
            fontFamily: "Inter, sans-serif",
            fontWeight: "700",
            fontSize: { lg: "16px", md: "14px", sm: "10px", xs: "10px"},
            color: "#f1f1f1",
            zIndex: 4,
          }}
        >
          Придбати тариф
        </StyledButton>
      </Box>
    </Container>
  );
}

export default TitleBlock;
