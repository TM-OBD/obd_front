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
  padding: 60px 10% 0 10%;
  min-height: 100vh;
`;

function TitleBlock() {
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
          paddingBottom: "95px",
        }}
      >
        <Grid
          container
          flexDirection={"column"}
          sx={{
            position: "relative",
          }}
        >
          <Grid item>
            <Typography
              fontWeight={"400"}
              component="h1"
              fontSize={"180px"}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                color: (theme) => theme.palette.primary.main,
                fontFamily: "'Unbounded', sans-serif",
              }}
            >
              iSyb Auto
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              fontFamily={"Unbounded, sans-serif"}
              fontWeight={"400"}
              fontSize={"30px"}
              sx={{
                color: (theme) => theme.palette.primary.main,
              }}
              display={"inline"}
            >
              сучасний сервіс
              <span
                style={{ color: "#54AFEC", marginLeft: "5px", zIndex: "5" }}
              >
                для авто
              </span>
            </Typography>
          </Grid>
          <Grid item marginTop={"70px"}>
            <Typography
              fontFamily={"Inter, sans-serif"}
              fontWeight={"400"}
              fontSize={"20px"}
              lineHeight={"120%"}
              sx={{
                color: (theme) => theme.palette.primary.main,
                zIndex: "7",
              }}
              display={"inline"}
            >
              Встановивши спеціальне обладнання в <br />
              OBD роз'єм, ви підключаєтеся до <br />
              сервера, який починає моніторити ваш <br />
              автомобіль у режимі
              <span style={{ color: "#54AFEC" }}>24/7.</span>
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              marginTop: "70px",
            }}
          >
            <Button
              variant="contained"
              style={{
                borderRadius: "15px",
                padding: "24px 50px",
                width: "335px",
                height: "63px",
                background: "#54AFEC",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                fontSize: "20px",
                color: "#f1f1f1",
              }}
            >
              Придбати тариф
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Grid container className="main-block__image _ibg">
        <img
          className="background-all"
          src={Background}
          alt="Background"
          width={"100%"}
          loading="lazy"
        />
        <img
          className="background-car"
          src={Car}
          alt="Background"
          width={"100%"}
          loading="lazy"
        />
      </Grid>
    </Container>
  );
}

export default TitleBlock;
