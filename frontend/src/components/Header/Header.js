import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import avatar from "../../images/some_avatar.jpg";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const MUIBarContainer = styled(AppBar)`
  position: sticky;
  display: flex;
  top: 0;
  left: 0;
  z-index: 4;
`;

const pages = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Тарифы",
    href: "/tariffs",
  },
  {
    title: "Сервисы", // у сервисов нет поля href, это кнопка с навигационным меню
  },
];
const services = [
  "Хранение и замена резины",
  "Замена масла",
  "Ремонт авто",
  "Закупка запчастей",
];
const ProfileMenu = [
  {
    title: "Профиль",
    href: "/profile",
  },
  {
    title: "Информация о машине",
    href: "/car_info",
  },
  ,
  {
    title: "Настройки",
    href: "/settings",
  },
  {
    title: "Выход",
    href: "/logout",
  },
];

// Компонент хедера приложения
function Header() {
  // Эти два состояния нужны для работы темы, не совсем понимаю за что отвечают
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNavBtn, setAnchorElNavBtn] = React.useState(null);

  const navigate = useNavigate();

  const handleCloseUserMenu = () => {
    // Закрываем меню юзера
    setAnchorElUser(null);
  };

  const handleClickNavBtn = (event, page) => {
    if (page.title === "Сервисы") {
      setAnchorElNavBtn(event.currentTarget);
      return;
    }
    document.title = page.title;
    setAnchorElNav(null);
    navigate(page.href);
  };

  const handleClickUserMenuBtn = (setting) => {
    handleCloseUserMenu();
    navigate(setting.href);
  };
  // Функция срабатывает при нажатии "открыть" навигационное меню(работает при xs размере экрана)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // Функция срабатывает при нажатии "открыть" меню юзера(работает при всех размерах)
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavBtn = () => {
    setAnchorElNavBtn(null);
  };
  // Функция срабатывает при нажатии "закрыть" навигационное меню(работает при xs размере экрана)
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <MUIBarContainer>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            OBD
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={(e) => handleClickNavBtn(e, page)}
                >
                  <Typography key={page.title} textAlign="center">
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            OBD
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
              gap: "12px",
            }}
          >
            {pages.map((page) => (
              <Tooltip title={`Открыть "${page.title}"`} key={page.title}>
                <Typography
                  key={page.title}
                  sx={{ color: "inherit" }}
                  onClick={(e) => handleClickNavBtn(e, page)}
                >
                  {page.title}
                </Typography>
              </Tooltip>
            ))}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElNavBtn}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNavBtn)}
              onClose={() => {
                handleCloseNavBtn();
                handleCloseNavMenu();
              }}
            >
              {services.map((service) => (
                <MenuItem
                  key={service}
                  onClick={() => {
                    handleCloseNavBtn();
                    handleCloseNavMenu();
                  }}
                  sx={{ color: "inherit", display: "block" }}
                >
                  <Typography key={service} textAlign="center">
                    {service}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {ProfileMenu.map((profileMenuBtn) => (
                <MenuItem
                  key={profileMenuBtn.title}
                  onClick={() => handleClickUserMenuBtn(profileMenuBtn)}
                >
                  <Typography key={profileMenuBtn.title} textAlign="center">
                    {profileMenuBtn.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </MUIBarContainer>
  );
}
export default Header;
