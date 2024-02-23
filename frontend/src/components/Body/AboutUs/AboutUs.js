import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { AboutUsData } from "./AboutUsData";
import MainImage from '../../../images/AboutUs/MainImage.png';
import Bubbles from "../../../images/AboutUs/Bubble.png";

const Container = styled(Box)`
  position: relative;
  margin-top: 80px;
  padding: 0 7% 0 7%;

  @media(max-width: 800px){
    margin-top: 100px;
    padding: 0 5% 0 5%;
  }

  @media(max-width: 450px){
    margin-top: 50px;
    padding: 0 3% 0 3%;
  }
`;

const StyledGrid = styled(Grid)`
  @media(max-width: 900px){
    padding-left: 0px;
  }
`;

function AboutUs() {
  return (
    <Container id="AboutUs">
      <Typography
        fontFamily={"Unbounded, sans-serif"}
        fontWeight={"400"}
        fontSize={{ md: "60px", sm: '48px', xs: '36px'}}
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Про нас
      </Typography>
      <Box
        sx={{
          position: "absolute",
          backgroundImage: `url(${Bubbles})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left 100%",
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      ></Box>
      <Grid 
        container
        paddingTop={'50px'}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {AboutUsData.map((item,index) => (
          <StyledGrid 
            item
            key={item.id} 
            xs={12} 
            sm={6} 
            md={4}
            sx={{
              display: 'grid',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
              gridTemplateColumns: '1fr',
              paddingLeft: index !== 0 ? '20px' : '0px'
            }}
          >
            <Typography
              fontFamily={'Inter, sans-serif'}
              fontWeight={400}
              fontSize={{ md: "20px", sm: '18px', xs: '16px'}}
              lineHeight={'120%'}
              color={(theme) => theme.palette.primary.main}
            >
              {item.firstParagraph &&
                item.firstParagraph.split('ми завжди ставимо').map((part, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index > 0 && <span style={{ color: '#54AFEC' }}>ми завжди ставимо</span>}
                      {part.split('iSyb').map((subPart, subIndex) => {
                        return (
                          <React.Fragment key={subIndex}>
                            {subIndex > 0 && <span style={{ color: '#54AFEC' }}>iSyb</span>}
                            {subPart}
                          </React.Fragment>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
            </Typography>
            {index === 1 ? 
              <Grid 
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}
              >
                <img alt="MainImage" loading="lazy" src={MainImage} style={{ maxWidth: '100%', height: 'auto' }}/>
                <Typography
                  fontFamily={'Inter, sans-serif'}
                  fontWeight={400}
                  fontSize={{ md: "20px", sm: '18px', xs: '16px'}}
                  lineHeight={'120%'}
                  color={(theme) => theme.palette.primary.main}
                >
                  {item.paragraph &&
                    item.paragraph.split('Наша місія').map((part, index) => {
                      return (
                        <React.Fragment key={index}>
                          {index > 0 && <span style={{ color: '#54AFEC' }}>Наша місія</span>}
                          {part}
                        </React.Fragment>
                      );
                    })}
                </Typography>
              </Grid>
            : ''}
            <Typography
              fontFamily={'Inter, sans-serif'}
              fontWeight={400}
              fontSize={{ md: "20px", sm: '18px', xs: '16px'}}
              lineHeight={'120%'}
              color={(theme) => theme.palette.primary.main}
            >
              {item.secondParagraph}
            </Typography>
            <Typography
              fontFamily={'Inter, sans-serif'}
              fontWeight={400}
              fontSize={{ md: "20px", sm: '18px', xs: '16px'}}
              lineHeight={'120%'}
              color={(theme) => theme.palette.primary.main}
            >
              {item.thirdParagraph &&
                item.thirdParagraph.split('Ми прагнемо').map((part, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index > 0 && <span style={{ color: '#54AFEC' }}>Ми прагнемо</span>}
                      {part}
                    </React.Fragment>
                  );
                })}
            </Typography>
          </StyledGrid>
        ))}
      </Grid>
    </Container>
  );
}

export default AboutUs;
