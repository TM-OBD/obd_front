import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";

const TitleContainer = styled(Container)``;

const PrimaryTitle = styled(Typography)``;

const CardContainer = styled(Card)``;

const UL = styled.ul`
  padding: 16px;
`;

const tiers = [
  {
    title: "Light",
    price: "599",
    description: [
      "Онлайн сервисная книга",
      "Техподдержка ошибок в CRM",
      "Запись авто на СТО",
      "Подбор запчастей к ТО",
      "Запис на шиномонтаж",
      "Хранение шин  БЕСПЛАТНО",
      "Шиномонтаж  БЕСПЛАТНО (2 раза в год )",
      "Предоставление геолокации",
      "Мгновенное расшифрование ошибки – приходит на телефон",
      "Треккинг авто (контроль перемещения)",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Middle",
    subheader: "Most popular",
    price: "899",
    description: [
      "Онлайн сервисная книга",
      "Техподдержка ошибок в CRM",
      "Запись авто на СТО",
      "Подбор запчастей к ТО",
      "Запис на шиномонтаж",
      "Хранение шин БЕСПЛАТНО",
      "Шиномонтаж БЕСПЛАТНО (2 раза в год )",
      "Предоставление геолокации",
      "Мгновенное расшифрование ошибки – приходит на телефон",
      "Треккинг авто (контроль перемещения)",
      "Замена масла и фильтра БЕСПЛАТНО",
      "Масло и фильтр БЕСПЛАТНО",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "VIP",
    price: "1499",
    description: [
      "Онлайн сервисная книга",
      "Техподдержка ошибок в CRM",
      "Запись авто на СТО",
      "Подбор запчастей к ТО",
      "Запис на шиномонтаж",
      "Хранение шин БЕСПЛАТНО",
      "Шиномонтаж БЕСПЛАТНО (2 раза в год )",
      "Предоставление геолокации",
      "Мгновенное расшифрование ошибки – приходит на телефон",
      "Треккинг авто (контроль перемещения)",
      "Замена масла и фильтра БЕСПЛАТНО",
      "Масло и фильтр БЕСПЛАТНО",
      "1 мойка в месяц БЕСПЛАТНО",
      "Выезд водителя для доставки авто автосервис",
      "2 раза в месяц водитель увозит авто на мойку",
      "Переобуй авто, не приезжая на шиномонтаж",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const Tariffs = () => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  
  return (
    <div>
      {/* Hero unit */}
      <TitleContainer
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 4, pb: 2 }}
      >
        <PrimaryTitle
          component="h1"
          variant="h2"
          align="center"
          color="inherit"
          gutterBottom
        >
          Тарифы
        </PrimaryTitle>
      </TitleContainer>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={2} alignItems="flex-start">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "VIP" ? 12 : 6}
              md={4}
            >
              <CardContainer>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Middle" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                    theme.palette.blue.light,
                    height: "100px",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      {tier.price}грн
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /мес.
                    </Typography>
                  </Box>
                  <UL>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        display={"flex"}
                        justifyContent={"flex-start"}
                        width={"100%"}
                        key={line}
                      >
                        - {line}
                      </Typography>
                    ))}
                  </UL>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Tariffs;
