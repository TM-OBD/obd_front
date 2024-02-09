import * as React from "react";
import styled from "@emotion/styled";
import {Box, Link, ListItem, Typography} from "@mui/material";
import Logo from "../images/Logo.svg";
import instIcon from "../images/icons/instagram.jpg";
import tgIcon from "../images/icons/telegram.jpg";
import fbIcon from "../images/icons/facebook.jpg";
import {sectionsData} from "../shared/Sections";

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
    width: 25%;
    height: 100%;
    ${({theme}) => ({
        [theme.breakpoints.down("md")]: {
            width: "30%",
        },
    })}
`;

const NavLink = styled(Link)`
    // Задаём размер текста 14px между размерами экранов "sm" и "md"
    ${({theme}) => ({
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
    width: 25%;
    height: 100%;
    ${({theme}) => ({
        [theme.breakpoints.down("md")]: {
            width: "35%",
        },
    })}
`;

const SNList = styled(Box)`
    display: flex;
    gap: 12px;
    width: 100%;
`;

const ContactA = styled.a`
    color: ${({theme}) => theme.palette.primary.main};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const SNTitle = styled(Typography)`
    color: ${({theme}) => theme.palette.primary.main};

    // Задаём размер текста 12px между размерами экранов "sm" и "md"
    ${({theme}) => ({
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
function Footer() {
    // SN - Social Network
    const SNArr = [
        {
            id: 0,
            title: "Instagram",
            icon: instIcon,
        },
        {
            id: 1,
            title: "Telegram",
            icon: tgIcon,
        },
        {
            id: 2,
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
                {sectionsData.map(section => (
                    <NavLink
                        key={section.id}
                        href="#"
                        underline="hover"
                        sx={{
                            color: (theme) => theme.palette.primary.main, // установка цвета из палитры цветов
                        }}
                    >
                        {section.title}
                    </NavLink>
                ))}
            </NavContainer>
            <LogoContainer>
                <img alt="iSyb" src={Logo} width={"100%"}/>
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
                    {SNArr.map(SN => (
                        <ListItem
                            key={SN.id}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "8px",
                                padding: 0,
                            }}
                        >
                            <img // разобраться с тем как через MUI сделать адаптив для картинки
                                src={SN.icon}
                                alt={SN.title}
                                style={{
                                    borderRadius: "50%",
                                    width: "50%",
                                }}
                            ></img>
                            <SNTitle variant="body1">{SN.title}</SNTitle>
                        </ListItem>
                    ))}
                </SNList>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <svg
                        width="24"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.71201 3.96981C10.2303 3.65524 13.7697 3.65524 17.288 3.96981L18.806 4.10581C19.5409 4.17143 20.2322 4.48289 20.7682 4.98987C21.3042 5.49685 21.6536 6.16973 21.76 6.89981C22.2544 10.2818 22.2544 13.7178 21.76 17.0998C21.6534 17.8297 21.3039 18.5024 20.7679 19.0091C20.2319 19.5159 19.5407 19.8272 18.806 19.8928L17.288 20.0288C13.7697 20.3434 10.2303 20.3434 6.71201 20.0288L5.19401 19.8928C4.45929 19.8272 3.76812 19.5159 3.23213 19.0091C2.69614 18.5024 2.34662 17.8297 2.24001 17.0998C1.7456 13.7178 1.7456 10.2818 2.24001 6.89981C2.34641 6.16973 2.69584 5.49685 3.23185 4.98987C3.76786 4.48289 4.45915 4.17143 5.19401 4.10581L6.71201 3.96981ZM5.85601 6.83981C5.74177 6.7782 5.61349 6.7473 5.48373 6.75011C5.35396 6.75293 5.22715 6.78938 5.11569 6.85589C5.00423 6.92241 4.91193 7.01671 4.84784 7.12958C4.78374 7.24244 4.75004 7.37002 4.75001 7.49981V16.9998C4.75001 17.1987 4.82903 17.3895 4.96968 17.5301C5.11034 17.6708 5.3011 17.7498 5.50001 17.7498C5.69893 17.7498 5.88969 17.6708 6.03034 17.5301C6.171 17.3895 6.25001 17.1987 6.25001 16.9998V8.75581L11.644 11.6598C11.866 11.7798 12.134 11.7798 12.356 11.6598L17.75 8.75581V16.9998C17.75 17.1987 17.829 17.3895 17.9697 17.5301C18.1103 17.6708 18.3011 17.7498 18.5 17.7498C18.6989 17.7498 18.8897 17.6708 19.0303 17.5301C19.171 17.3895 19.25 17.1987 19.25 16.9998V7.49981C19.25 7.37002 19.2163 7.24244 19.1522 7.12958C19.0881 7.01671 18.9958 6.92241 18.8843 6.85589C18.7729 6.78938 18.6461 6.75293 18.5163 6.75011C18.3865 6.7473 18.2583 6.7782 18.144 6.83981L12 10.1478L5.85601 6.83981Z"
                            fill="#F1F1F1"
                        />
                    </svg>
                    <ListItem
                        sx={{
                            padding: "4px",
                            width: "150px",
                            justifyContent: "flex-end",
                        }}
                    >
                        <ContactA href="mailto:info@isyb.com.ua" target="_top">
                            info@isyb.com.ua
                        </ContactA>
                    </ListItem>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}
                >
                    <svg
                        width="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19.47 4.03008C19.61 4.17108 19.69 4.36208 19.69 4.56008V8.39008C19.69 8.58899 19.611 8.77976 19.4703 8.92041C19.3297 9.06106 19.1389 9.14008 18.94 9.14008C18.7411 9.14008 18.5503 9.06106 18.4097 8.92041C18.269 8.77976 18.19 8.58899 18.19 8.39008V6.37008L15.03 9.53008C14.9608 9.60168 14.878 9.65878 14.7865 9.69804C14.695 9.7373 14.5965 9.75795 14.4969 9.75877C14.3974 9.75958 14.2986 9.74056 14.2065 9.70281C14.1143 9.66505 14.0306 9.60932 13.9602 9.53887C13.8898 9.46842 13.8342 9.38465 13.7965 9.29246C13.7588 9.20027 13.7399 9.10151 13.7408 9.00192C13.7417 8.90234 13.7625 8.80393 13.8018 8.71245C13.8412 8.62097 13.8983 8.53823 13.97 8.46908L17.129 5.30908H15.11C14.9111 5.30908 14.7203 5.23006 14.5797 5.08941C14.439 4.94876 14.36 4.75799 14.36 4.55908C14.36 4.36017 14.439 4.1694 14.5797 4.02875C14.7203 3.8881 14.9111 3.80908 15.11 3.80908H18.938C19.1368 3.80926 19.3275 3.88839 19.468 4.02908L19.47 4.03008Z"
                            fill="#F1F1F1"
                        />
                        <path
                            d="M4.99999 9.86001C6.91984 14.0408 10.3312 17.3544 14.566 19.152L15.246 19.455C15.999 19.7903 16.8462 19.8491 17.6384 19.621C18.4305 19.3929 19.1167 18.8925 19.576 18.208L20.465 16.884C20.6041 16.6764 20.6604 16.4242 20.6229 16.1771C20.5853 15.93 20.4565 15.7059 20.262 15.549L17.25 13.119C17.1451 13.0344 17.0242 12.9719 16.8945 12.9353C16.7649 12.8986 16.6292 12.8885 16.4955 12.9056C16.3618 12.9227 16.233 12.9666 16.1168 13.0347C16.0005 13.1028 15.8992 13.1938 15.819 13.302L14.887 14.559C12.4946 13.3774 10.5581 11.4406 9.37699 9.04801L10.633 8.11601C10.7412 8.03577 10.8322 7.93448 10.9003 7.81823C10.9684 7.70198 11.0123 7.57316 11.0294 7.4395C11.0465 7.30585 11.0364 7.17012 10.9997 7.04046C10.9631 6.91081 10.9006 6.7899 10.816 6.68501L8.38599 3.67301C8.22909 3.47846 8.00502 3.34972 7.75793 3.31215C7.51084 3.27458 7.25863 3.33089 7.05099 3.47001L5.71799 4.36401C5.02939 4.82579 4.52708 5.51702 4.30054 6.31457C4.07401 7.11213 4.13795 7.9642 4.48099 8.71901L4.99999 9.86001Z"
                            fill="#F1F1F1"
                        />
                    </svg>

                    <ListItem
                        sx={{
                            padding: "4px",
                            width: "150px",
                            justifyContent: "flex-end",
                        }}
                    >
                        <ContactA href="tel:+38 067 220 30 40" target="_top">
                            +38 067 220 30 40
                        </ContactA>
                    </ListItem>
                </Box>
            </ContactsContainer>
        </Container>
    );
}

export default Footer;
