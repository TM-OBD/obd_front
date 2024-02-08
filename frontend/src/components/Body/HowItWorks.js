import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { blockData } from "../../shared/HIW Data";
import FirstBG from "../../images/HowItWorks/FirstBG.png";
import SecondBG from "../../images/HowItWorks/SecondBG.png";
import styled from "@emotion/styled";

const Container = styled(Box)`
  margin-top: 64px;
  padding: 0 10% 0 10%;
`;

function HowItWorks() {
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            marginLeft: "-100px",
            backgroundImage: `url(${FirstBG})`,
            backgroundSize: "706px 506px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0px 311px",
            width: "100%",
            height: "100%",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            backgroundImage: `url(${SecondBG})`,
            backgroundSize: "423px 597px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "805px 175px",
            width: "100%",
            height: "100%",
          }}
        ></Box>
        <Typography
          fontFamily={"Unbounded, sans-serif"}
          fontWeight={"400"}
          fontSize={"60px"}
          sx={{
            color: (theme) => theme.palette.primary.main,
          }}
        >
          Як це працює
        </Typography>
        <Grid
          container
          spacing={2}
          flexDirection={"column"}
          paddingTop={"50px"}
        >
          {blockData.map((item, index) => (
            <Grid
              item
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "start",
                marginLeft: index >= 1 ? `${368 * index}px` : "0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "84px",
                  height: "84px",
                  borderRadius: "100%",
                  border: "1px solid",
                  strokeWidth: "1px",
                  borderColor: (theme) => theme.palette.primary.borderBlue,
                }}
              >
                <Typography
                  variant="h6"
                  fontFamily={"Unbounded, sans-serif"}
                  fontWeight={"400"}
                  fontSize={"36px"}
                  sx={{
                    color: (theme) => theme.palette.primary.borderBlue,
                  }}
                >
                  {item.id}
                </Typography>
              </Box>
              <Box paddingLeft={"20px"}>
                <Typography
                  variant="h6"
                  fontFamily={"Inter, sans-serif"}
                  fontWeight={"700"}
                  fontSize={"24px"}
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily={"Inter, sans-serif"}
                  fontWeight={"400"}
                  fontSize={"18px"}
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default HowItWorks;
