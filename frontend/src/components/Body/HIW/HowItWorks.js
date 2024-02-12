import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { blockData } from "./HIW Data";
import Button from "@mui/material/Button";
import FirstBG from "../../../images/HowItWorks/FirstBG.png";
import SecondBG from "../../../images/HowItWorks/SecondBG.png";
import styled from "@emotion/styled";

const Container = styled(Box)`
  margin-top: 185px;
  padding: 0 7% 0 7%;

  @media(max-width: 800px){
	margin-top: 100px;
  }

  @media(max-width: 450px){
	margin-top: 50px;
  }
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
            backgroundImage: `url(${FirstBG})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0px 75%",
				marginLeft: '-15%',
            width: "100%",
            height: "100%",
				zIndex: 3,
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            backgroundImage: `url(${SecondBG})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "100% 10%",
            width: "100%",
            height: "100%",
          }}
        ></Box>
        <Typography
          fontFamily={"Unbounded, sans-serif"}
          fontWeight={"400"}
			 fontSize={{ md: "60px", sm: '48px', xs: '36px'}}
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
          paddingTop={{sm: "50px", xs: "30px"}}
        >
          {blockData.map((item, index) => (
				<>
            <Grid
              item
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "start",
					 justifyContent: index === 0 ? 'start' : index === 1 ? 'center' : 'end',
					 marginTop: index === 1 ? '24px' : '0px'
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
                  fontSize={{sm: "36px", xs: '30'}}
                  sx={{
                    color: (theme) => theme.palette.primary.borderBlue,
                  }}
                >
                  {item.id}
                </Typography>
              </Box>
              <Box paddingLeft={{sm: "20px", xs: '10px'}}>
                <Typography
                  variant="h6"
                  fontFamily={"Inter, sans-serif"}
                  fontWeight={"700"}
                  fontSize={{sm: "24px", xs: '20px'}}
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
                  fontSize={{sm: "18px", xs: '16'}}
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  {item.text}
                </Typography>
              </Box>
				  </Grid>
				  {index === 0 ? (
					<Button
        				variant="contained"
						sx={{
							marginLeft: {sm: '110px', xs: '80px'}
						}}
						style={{
							borderRadius: "15px",
							padding: {sm: '24px 50px', xs: '16px 40px'},
							width: "350px",
							height: "63px",
							background: "#54AFEC",
							fontFamily: "Inter, sans-serif",
							fontWeight: "700",
							fontSize: "20px",
							color: "#f1f1f1",
						}}
      			>
        				Придбати автоінформер
      			</Button>
				  ) : ''}
            </>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default HowItWorks;
