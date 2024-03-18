import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { blocksData } from "./HIW Data";
import Button from "@mui/material/Button";
import FirstBG from "../../../images/HowItWorks/FirstBG.png";
import SecondBG from "../../../images/HowItWorks/SecondBG.png";
import styled from "@emotion/styled";
import ModalFeedBack from "../../../shared/ModalFeedBack";

const StyledBgImg = styled(Box)``;

const CircleForNum = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  min-width: 64px;
  height: 64px;
  border: 1px solid ${({ theme }) => theme.palette.primary.blue.light};
  border-radius: 50%;
  font-family: "Unbounded", sans-serif;
  color: ${({ theme }) => theme.palette.primary.blue.light};
`;

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.primary.blue.light};
  color: ${({ theme }) => theme.palette.primary.white.light};
  padding: 16px 32px 16px 32px;
  border-radius: 8px;
  text-transform: none;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.blue.medium};
  }
`;

function HowItWorks({ open, handleOpen, handleClose }) {
  return (
    <Box // Контейнер
      id="HIW"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "0 7% 0 7%",
        overflow: "hidden",
        marginTop: "64px",
      }}
    >
      <ModalFeedBack
        open={open}
        handleClose={handleClose}
      ></ModalFeedBack>
      <StyledBgImg // Пузыри слева
        sx={{
          position: "absolute",
          width: {
            lg: "500px",
            md: "300px",
            sm: "200px",
            xs: "100px",
          },
          height: {
            lg: "500px",
            md: "300px",
            sm: "200px",
            xs: "100px",
          },
          bottom: 0,
          left: 0,
          backgroundImage: `url(${FirstBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      ></StyledBgImg>
      <StyledBgImg // Пузыри справа
        sx={{
          position: "absolute",
          width: {
            lg: "500px",
            md: "300px",
            sm: "200px",
            xs: "100px",
          },
          height: {
            lg: "500px",
            md: "300px",
            sm: "200px",
            xs: "100px",
          },
          top: 0,
          right: 0,
          backgroundImage: `url(${SecondBG})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          zIndex: 0,
        }}
      ></StyledBgImg>

      <Typography // Заголовок
        variant="h2"
        component="h2"
        sx={{
          display: "flex",
          justifyContent: {
            lg: "flex-start",
            md: "flex-start",
            sm: "flex-start",
            xs: "center",
          },
          width: "100%",
          color: (theme) => theme.palette.primary.main,
          fontFamily: "'Unbounded', sans-serif",
          zIndex: 1,
          fontSize: {
            xl: "64px",
            lg: "48px",
            md: "48px",
            sm: "48px",
            xs: "32px",
          },
        }}
      >
        Як це працює
      </Typography>

      <Box //Контейнер для блоков "как это работает"
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          height: "100%",
          marginTop: "48px",
          zIndex: 1,
          gap: {
            xl: "24px",
            lg: "12px",
            md: "48px",
            sm: "48px",
            xs: "18px",
          },
        }}
      >
        {blocksData.map((block, idx) => (
          <Box // Контейнер для ряда блока
            key={block.id + "boxContainerRow"}
            sx={{
              display: "flex",
              width: "100%",
              flexGrow: 1,
              justifyContent: {
                lg:
                  idx === 0 ? "flex-start" : idx === 1 ? "center" : "flex-end",
                md: "center",
                sm: "center",
                xs: "center",
              },
            }}
          >
            <Box // контейнер для самого блока (картинка и остальное отдельно)
              sx={{
                display: "flex",
                width: {
                  lg: "33%",
                  md: "100%",
                  sm: "100%",
                  xs: "100%",
                },
                gap: "12px",
              }}
            >
              <CircleForNum key={block.id + "circleForNum"}>{block.id}</CircleForNum>
              <Box // Контейнер для текста
                key={block.id + "boxContainerText"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: {
                    xl: "24px",
                    lg: "12px",
                    md: "8px",
                    sm: "8px",
                    xs: "8px",
                  },
                }}
              >
                <Typography
                  key={block.id + "TypographyBlockTitle"}
                  variant="h6"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    color: (theme) => theme.palette.primary.main,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    minHeight: {
                      lg: "64px",
                      md: "64px",
                      sm: "64px",
                      xs: "48px",
                    },
                    fontSize: {
                      xl: "28px",
                      lg: "20px",
                      md: "32px",
                      sm: "32px",
                      xs: "16px",
                    },
                  }}
                >
                  {block.title}
                </Typography>
                <Typography
                  key={block.id + "TypographyBlockText"}
                  variant="body1"
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    fontFamily: "Inter, sans-serif",
                    fontSize: {
                      xl: "24px",
                      lg: "16px",
                      md: "20px",
                      sm: "20px",
                      xs: "14px",
                    },
                  }}
                >
                  {block.text}
                </Typography>
                {idx === 0 && (
                  <StyledButton
                    key={block.id + "Button"}
                    onClick={handleOpen}
                    sx={{
                      fontSize: {
                        xl: "24px",
                        lg: "16px",
                        md: "20px",
                        sm: "20px",
                        xs: "14px",
                      },
                    }}
                  >
                    Придбати автоінформер
                  </StyledButton>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default HowItWorks;
