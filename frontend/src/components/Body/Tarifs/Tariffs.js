import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import styled from "@emotion/styled";
import Plus from "../../../images/Tariffs/plus.png";
import { TariffsData } from "./TariffsData";
import FirstBB from "../../../images/Tariffs/FirstBB.png";
import SecondBB from "../../../images/Tariffs/SecondBB.png";
import ModalFeedBack from "../../../shared/ModalFeedBack";

const UlComponent = styled("ul")`
  padding-left: 20px;
`;

const LiComponent = styled("li")`
  padding-top: 20px;
  font-family: "Inter, sans-serif";
  font-weight: 400;
  font-size: ${(props) =>
    props.theme.breakpoints.down("sm") ? "16px" : "14px"};
  color: #f1f1f1;
`;

const StyledButton = styled(Button)`
  z-index: 3;
  cursor: pointer;

  &:hover {
    background-color: #0040ff !important;
  }
`;

const StyledBgImg = styled(Box)``;

function Tariffs({ open, handleOpen, handleClose }) {
  return (
    <Box
      id="Tariffs"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        padding: "0 7% 0 7%",
        overflow: "hidden",
        marginTop: {
          lg: "0px",
          md: "80px",
          sm: "80px",
          xs: "60px",
        },
      }}
    >
      <ModalFeedBack open={open} handleClose={handleClose}></ModalFeedBack>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          display: "flex",
          width: "100%",
          color: (theme) => theme.palette.primary.main,
          fontFamily: "'Unbounded', sans-serif",
          zIndex: 1,
          fontSize: {
            lg: "60px",
            md: "48px",
            sm: "48px",
            xs: "40px",
          },
        }}
      >
        Тарифи
      </Typography>
      <StyledBgImg
        sx={{
          position: "absolute",
          width: {
            lg: "200px",
            md: "200px",
            sm: "200px",
            xs: "100px",
          },
          height: {
            lg: "100%",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },
          top: "30%",
          left: 0,
          backgroundImage: `url(${FirstBB})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      ></StyledBgImg>
      <StyledBgImg
        sx={{
          position: "absolute",
          width: {
            lg: "500px",
            md: "400px",
            sm: "400px",
            xs: "300px",
          },
          height: {
            lg: "100%",
            md: "100%",
            sm: "50%",
            xs: "50%",
          },
          left: {
            lg: "70%",
            md: "70%",
            sm: "60%",
            xs: "50%",
          },
          top: 0,
          backgroundImage: `url(${SecondBB})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      ></StyledBgImg>
      <Grid
        container
        spacing={3}
        paddingTop={{ md: "50px", sx: "30px" }}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
        marginTop={0}
      >
        {TariffsData.map((item, index) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid",
                borderColor: (theme) => theme.palette.primary.borderBlue,
                borderRadius: "15px",
                maxWidth: "376px",
                minWidth: "30%",
                minHeight: "566px",
                background: "transparent",
                padding: "30px",
                flexDirection: "column",
                gap: 4,
                width: "100%",
              }}
            >
              <Typography
                fontFamily={"'Unbounded', sans-serif"}
                fontWeight={"400"}
                fontSize={{ md: "30px", sm: "26px", xs: "24px" }}
                color={(theme) => theme.palette.primary.borderBlue}
                variant="h1"
                display={"center"}
                justifyContent={"center"}
              >
                {item.title}
              </Typography>
              {index === 1 || index === 2 ? (
                <>
                  <Typography
                    variant="h3"
                    fontFamily={"Inter, sans-serif"}
                    fontWeight={"400"}
                    fontSize={"18px"}
                    color={(theme) => theme.palette.primary.main}
                    display={"center"}
                    justifyContent={"center"}
                  >
                    {item.subtitle}
                  </Typography>
                  <img
                    style={{
                      display: "block",
                      margin: "auto",
                    }}
                    alt="Plus"
                    loading="lazy"
                    src={Plus}
                  />
                </>
              ) : (
                ""
              )}
              <UlComponent>
                {item.text &&
                  item.text.map((line, index) => (
                    <LiComponent key={index}>
                      {line.includes("безкоштовно")
                        ? line.split(" ").map((word, wordIndex) =>
                            word === "безкоштовно" ? (
                              <span
                                key={wordIndex}
                                style={{ color: "#54AFEC" }}
                              >
                                {word}{" "}
                              </span>
                            ) : (
                              <span key={wordIndex}>{word} </span>
                            )
                          )
                        : line}
                    </LiComponent>
                  ))}
              </UlComponent>
              <div style={{ marginTop: "auto" }}>
                <Typography
                  variant="h6"
                  fontFamily={"Unbounded, sans-serif"}
                  fontWeight={"400"}
                  fontSize={{ md: "30px", sm: "24px", xs: "20px" }}
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {item.price}
                </Typography>
                <StyledButton
                  variant="contained"
                  onClick={handleOpen}
                  sx={{
                    borderRadius: "15px",
                    padding: {
                      lg: "24px 50px",
                      md: "24px 50px",
                      sm: "24px 50px",
                      xs: "16px 30px",
                    },
                    maxWidth: "316px",
                    width: "100%",
                    height: "63px",
                    background: (theme) => theme.palette.primary.blue.light,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "700",
                    fontSize: {
                      lg: "16px",
                      md: "16px",
                      sm: "14px",
                      xs: "12px",
                    },
                    color: (theme) => theme.palette.primary.main,
                    marginTop: "30px",
                    alignSelf: "center",
                  }}
                >
                  Придбати тариф
                </StyledButton>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Tariffs;
