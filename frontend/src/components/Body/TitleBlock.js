import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Car from "../../images/Main/Car.png";
import Background from "../../images/Main/Background.png";
import BackgroundMob from "../../images/Main/Background-car-mobile.jpg";
import "../../index.css";
import styled from "@emotion/styled";

const Container = styled(Box)``;

const CarBackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  })}
  ${({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  })}
`;

const CarBackgroundImgMob = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  })}
  ${({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  })}
`;

const CarImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${({ theme }) => ({
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  })}
`;

const StyledButton = styled(Button)`
  &:hover {
    background-color: #0040ff !important;
  }
`;

function TitleBlock() {
  return (
    <Container
      sx={{
        position: "relative",
        width: "100%",
        padding: {
          lg: "105px 7% 0 7%",
          md: "105px 7% 0 7%",
          sm: "105px 10% 0 10%",
          xs: "105px 10% 0 10%",
        },
        // overflow: "hidden",
      }}
    >
      <CarBackgroundImg src={Background} alt="background"></CarBackgroundImg>
      <CarImage src={Car} alt="car"></CarImage>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: {
          //   lg: "flex-start",
          //   md: "flex-start",
          //   sm: "space-around",
          //   xs: "space-around",
          // },
          gap: { lg: "32px", md: "28px", sm: "0", xs: "0" },
          zIndex: 2,
          height: {
            lg: "100vh",
            md: "100vh",
            sm: "100vh",
            xs: "100vh",
          },
        }}
      >
        <Box
          sx={{
            zIndex: 2,
          }}
        >
          <Typography
            fontWeight={"400"}
            component="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              color: (theme) => theme.palette.primary.main,
              fontFamily: "'Unbounded', sans-serif",
              fontSize: {
                xl: "200px",
                lg: "172px",
                md: "112px",
                sm: "84px",
                xs: "40px",
              },
            }}
          >
            ISyb Auto
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            justifyContent: {
              lg: "flex-start",
              md: "flex-start",
              sm: "flex-end",
              xs: "flex-end",
            },
          }}
        >
          <Typography
            fontFamily={"Unbounded, sans-serif"}
            fontWeight={"400"}
            sx={{
              color: (theme) => theme.palette.primary.main,
              zIndex: 4,
              fontSize: {
                xl: "40px",
                lg: "30px",
                md: "30px",
                sm: "25px",
                xs: "16px",
              },
            }}
          >
            сучасний сервіс
          </Typography>
          <Typography
            fontFamily={"Unbounded, sans-serif"}
            fontWeight={"400"}
            sx={{
              color: "#54AFEC",
              zIndex: 4,
              fontSize: {
                xl: "40px",
                lg: "30px",
                md: "30px",
                sm: "25px",
                xs: "16px",
              },
            }}
          >
            для авто
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 4,
            height: "100%",
            justifyContent: {
              lg: "flex-start",
              md: "flex-start",
              sm: "center",
              xs: "center",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              // marginTop: { lg: "0", md: "0", sm: "40%", xs: "40%" },
              justifyContent: {
                lg: "flex-start",
                md: "flex-start",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Typography
              fontFamily={"Inter, sans-serif"}
              fontWeight={"400"}
              fontSize={{
                xl: "30px",
                lg: "20px",
                md: "18px",
                sm: "24px",
                xs: "14px",
              }}
              lineHeight={{ lg: "120%", sm: "110%" }}
              sx={{
                display: "flex",
                color: (theme) => theme.palette.primary.main,
                zIndex: 4,
                width: { lg: "30%", md: "35%", sm: "100%", xs: "100%" },
              }}
            >
              Встановивши спеціальне обладнання в OBD роз'єм, ви підключаєтеся
              до сервера, який починає моніторити ваш автомобіль у режимі 24/7
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: {
                lg: "flex-start",
                md: "flex-start",
                sm: "center",
                xs: "center",
              },
              marginTop: { lg: "0", md: "0", sm: "14px", xs: "14px" },
            }}
          >
            <StyledButton
              variant="contained"
              sx={{
                cursor: "pointer",
                borderRadius: { lg: "15px", md: "10px", sm: "10px", xs: "8px" },
                width: {
                  xl: "330px",
                  lg: "300px",
                  md: "250px",
                  sm: "60%",
                  xs: "80%",
                },
                marginTop: { lg: "12px", md: "12px", sm: "0", xs: "0" },
                height: {
                  xl: "72px",
                  lg: "64px",
                  md: "48px",
                  sm: "84px",
                  xs: "64px",
                },
                background: "#54AFEC",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                fontSize: {
                  xl: "24px",
                  lg: "16px",
                  md: "14px",
                  sm: "18px",
                  xs: "14px",
                },
                color: "#f1f1f1",
                zIndex: 4,
              }}
            >
              Придбати тариф
            </StyledButton>
          </Box>
        </Box>

        <CarBackgroundImgMob
          src={BackgroundMob}
          alt="bg-mob"
        ></CarBackgroundImgMob>
      </Box>
    </Container>
  );
}

export default TitleBlock;
