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
  min-height: 100vh;

  @media (max-width: 1000px) {
    background-image: url(${Background});
    background-size: cover;
    background-position: center;
  }
`;

const CarImage = styled.img`
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

  cursor: pointer;

  &:hover {
    background-color: #0040FF !important;
  }
` 

function TitleBlock() {
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          zIndex: 3,
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
				  fontSize={{ lg: "180px", md: "120px", sm: "90px", xs: "60px"}}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                color: (theme) => theme.palette.primary.main,
                fontFamily: "'Unbounded', sans-serif",
              }}
            >
              ISyb Auto
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              fontFamily={"Unbounded, sans-serif"}
              fontWeight={"400"}
				  fontSize={{ lg: "30px", md: "30px", sm: "25px", xs: "20px"}}
              sx={{
                color: (theme) => theme.palette.primary.main,
              }}
              display={"inline"}
            >
              сучасний сервіс
              <span style={{ color: "#54AFEC" }}>	для авто</span>
            </Typography>
          </Grid>
          <Grid item marginTop={{ lg: "70px", md: "50px", sm: "40px", xs: "30px"}}>
            <Typography
              fontFamily={"Inter, sans-serif"}
              fontWeight={"400"}
              fontSize={{ lg: "20px", md: "18px", sm: "16px", xs: "14px"}}
              lineHeight={{ lg: "120%", sm: "110%",}}
              sx={{
                color: (theme) => theme.palette.primary.main,
              }}
              display={"inline"}
            >
              Встановивши спеціальне обладнання в <br />
              OBD роз'єм, ви підключаєтеся до <br />
              сервера, який починає моніторити ваш <br />
              автомобіль у режимі
              <span style={{ color: "#54AFEC", }}>	24/7.</span>
            </Typography>
          </Grid>
          <Grid
            item
            style={{
				  marginTop: "30px",
				  "@media (minWidth:600px)": {
				  marginTop: "40px",
				  },
				  "@media (minWidth:900px)": {
				  marginTop: "50px",
				  },
				  "@media (minWidth:1200px)": {
				  marginTop: "70px",
				  },
            }}
          >
            <StyledButton
              variant="contained"
              sx={{
                borderRadius: "15px",
					 padding: { lg: "24px 50px", sm: "18px 30px", xs: "14px 20px"},
                width: "335px",
                height: "63px",
                background: "#54AFEC",
                fontFamily: "Inter, sans-serif",
                fontWeight: "700",
                fontSize: "18px",
                color: "#f1f1f1",
              }}
            >
              Придбати тариф
            </StyledButton>
          </Grid>
        </Grid>
      </Box>
      <Grid container className="main-block__image _ibg">
        <BackgroundImage
          className="background-all"
          src={Background}
          alt="Background"
          width={"100%"}
          loading="lazy"
        />
			<CarImage
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
