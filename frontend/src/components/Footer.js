import * as React from "react";
import styled from "@emotion/styled";
import { Box, CardMedia, Link, Typography } from "@mui/material";
import Logo from "../images/Logo.svg";
import instIcon from "../images/icons/instagram.jpg";
import tgIcon from "../images/icons/telegram.jpg";
import fbIcon from "../images/icons/facebook.jpg";

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 320px;
  background-color: #262629;
  padding: 50px 100px 50px 100px;
`;

const NavContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 20%;
  height: 100%;
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
  })}
`;

const NavLink = styled(Link)`
  // Задаём размер текста 14px между размерами экранов "sm" и "md"
  ${({ theme }) => ({
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "14px",
    },
    // Задаём размер текста 12px при размере экрана ниже md
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },
    // Задаём размер текста 8px при размере экрана ниже md
    [theme.breakpoints.down("sm")]: {
      fontSize: "10px",
    },
  })}
`;

const LogoContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`;

const ContactsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 20%;
  height: 100%;
  ${({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      width: "30%",
    },
  })}
`;

const SNList = styled(Box)`
  display: flex;
  gap: 12px;
  width: 100%;
`;

const SNContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  gap: 8px;
`;

const SNTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main};

  // Задаём размер текста 12px между размерами экранов "sm" и "md"
  ${({ theme }) => ({
    [theme.breakpoints.between("md", "lg")]: {
      fontSize: "12px",
    },
    // Убирем с дисплея текст если экран меньше md
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  })}
`;

// Компонент футера приложения
function Footer({ sections }) {
  // SN - Social Network
  const SNArr = [
    {
      title: "Instagram",
      icon: instIcon,
    },
    {
      title: "Telegram",
      icon: tgIcon,
    },
    {
      title: "Facebook",
      icon: fbIcon,
    },
  ];
  return (
    <Container>
      <NavContainer>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontWeight: "700",
            fontSize: "22px",
          }}
        >
          Меню
        </Typography>
        {sections.map((section) => (
          <NavLink
            href="#"
            underline="hover"
            sx={{
              color: (theme) => theme.palette.primary.main, // установка цвета из палитры цветов
            }}
          >
            {section}
          </NavLink>
        ))}
      </NavContainer>
      <LogoContainer>
        <img alt="iSyb" src={Logo} width={"100%"} />
      </LogoContainer>
      <ContactsContainer>
        <Typography
          variant="h5"
          component="h5"
          sx={{
            color: (theme) => theme.palette.primary.main,
            fontWeight: "700",
            fontSize: "22px",
            textAlign: "end",
          }}
        >
          Контакти
        </Typography>
        <SNList>
          {SNArr.map((SN) => (
            <SNContainer key={SN.title}>
              <img // разобраться с тем как через MUI сделать адаптив для картинки
                src={SN.icon}
                style={{
                  borderRadius: "50%",
                  width: "50%",
                }}
              ></img>
              <SNTitle variant="body1">{SN.title}</SNTitle>
            </SNContainer>
          ))}
        </SNList>
      </ContactsContainer>
    </Container>
  );
}
export default Footer;
