import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import FAQ from "./FAQ";
import styled from "@emotion/styled";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 95px;
`;

// Компонент боди приложения
function Body() {
  return (
    <Container>
      <Box>
        <Grid container flexDirection={"column"}>
          <Grid item>
            <Typography
              fontFamily={"Inter, sans-serif"}
              fontWeight={"400"}
              fontSize={"220px"}
				  sx={{
					color: (theme) => theme.palette.primary.main,
				  }}
            >
              iSyb Auto
            </Typography>
          </Grid>
			 <Grid item>
            <img alt="Car" src="../../images/Main/Car.png" loading="lazy" />
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
              <span style={{ color: "#54AFEC", marginLeft: "5px" }}>
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
				  }}
              display={"inline"}
            >
              Встановивши спеціальне обладнання в <br />
              OBD роз'єм, ви підключаєтеся до <br />
              сервера, який починає моніторити ваш <br />
              автомобіль у режимі
              <span style={{ color: "#54AFEC", marginLeft: "5px" }}>24/7.</span>
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
      <FAQ></FAQ>
    </Container>
  );
}
export default Body;
