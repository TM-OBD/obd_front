import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import styled from "@emotion/styled";
import Plus from '../../../images/Tariffs/plus.png';
import { TariffsData } from "./TariffsData";
import FirstBB from "../../../images/Tariffs/FirstBB.png";
import SecondBB from "../../../images/Tariffs/SecondBB.png";
import SecondBubbleAdaptive from "../../../images/Tariffs/SecondBubbleAdaptive.png";
import FirstBubbleAdaptive from "../../../images/Tariffs/FirstBubbleAdaptive.png";




const Container = styled(Box)`

  position: relative;
  padding: 0 7% 0 7%;

  @media(max-width: 800px){
    margin-top: 100px;
  }

  @media(max-width: 450px){
    margin-top: 60px;
  }

  @media(max-width: 375px){
	padding: 0 5.5% 0 5.5%;
  }
`;

const UlComponent = styled('ul')`
  padding-left: 20px;
`

const LiComponent = styled('li')`
  padding-top: 20px;
  font-family: "Inter, sans-serif";
  font-weight: 400;
  font-size: ${props => props.theme.breakpoints.down('sm') ? "16px" : "14px"};
  color: #f1f1f1;
`

const StyledButton = styled(Button)`

  z-index: 100;
  cursor: pointer;

  &:hover {
    background-color: #0040FF !important;
  }
` 

const StyledBackgroundImage = styled(Box)`

position: absolute;
background-repeat: no-repeat;
width: 100%;
height: 100%;

  @media(max-width: 600px){
	display: none;
  }
`
const StyledBackgroundImageAdaptive = styled(Box)`

position: absolute;
background-repeat: no-repeat;
width: 100%;
height: 100%;

  @media(max-width: 400px){
	display: flex;
  }
`


function Tariffs() {
  return (
    <Container id="Tariffs">
      <Typography
        fontFamily={"Unbounded, sans-serif"}
        fontWeight={"400"}
        fontSize={{ md: "60px", sm: '48px', xs: '40px'}}
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Тарифи
      </Typography>
		<StyledBackgroundImageAdaptive
  sx={{
	 display: 'none',
    backgroundImage: `url(${SecondBubbleAdaptive})`,
    backgroundPosition: "left 37%",
    left: 0,
    zIndex: 1,
  }}
></StyledBackgroundImageAdaptive>
		<StyledBackgroundImage
  sx={{
    backgroundImage: `url(${FirstBB})`,
    backgroundPosition: "left 100%",
    left: 0,
    zIndex: 1,
  }}
></StyledBackgroundImage>
<StyledBackgroundImage
  sx={{
    backgroundImage: `url(${SecondBB})`,
    backgroundPosition: "right 25%",
    right: 0,
    zIndex: 2,
  }}
></StyledBackgroundImage>
      <Grid 
        container
        spacing={3} 
        paddingTop={{md: '50px', sx: '30px'}}
		  sx={{ 
              display: 'flex',
				  justifyContent: 'center',
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
              display: 'flex',
				  justifyContent: 'center'
            }}
          >
            <Card 
              sx={{ 
                border: '1px solid', 
                borderColor: (theme) => theme.palette.primary.borderBlue, 
                borderRadius: '15px', 
                maxWidth: '376px', 
                minHeight: '606px',
                background: 'transparent',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
					 gap: 4,
				    width: '100%'
              }}
            >
              <Typography
                fontFamily={"'Unbounded', sans-serif"}
                fontWeight={'400'}
                fontSize={{ md: "30px", sm: '26px', xs: '24px'}}
                color={(theme) => theme.palette.primary.borderBlue}
                variant="h1"
                display={'center'}
                justifyContent={'center'}
              >
                {item.title}
              </Typography>
              {index === 1 || index === 2 ? (
                <>
                  <Typography
                    variant="h3"
                    fontFamily={"Inter, sans-serif"}
                    fontWeight={'400'}
                    fontSize={"18px"}
                    color={(theme) => theme.palette.primary.main}
                    display={'center'}
                    justifyContent={'center'}
                  >
                    {item.subtitle}
                  </Typography>
                  <img
                    style={{
                      display: 'block',
                      margin: 'auto'
                    }}
                    alt="Plus"
                    loading="lazy"
                    src={Plus}
                  />
                </>
              ) : ''}
              <UlComponent>
                {item.text && item.text.map((line, index) => (
                  <LiComponent  
                    key={index}
                  >
                    {line.includes('безкоштовно') ? (
                      line.split(' ').map((word, wordIndex) => (
                        word === 'безкоштовно' ? (
                          <span key={wordIndex} style={{ color: '#54AFEC' }}>{word} </span>
                        ) : (
                          <span key={wordIndex}>{word} </span>
                        )
                      ))
                    ) : (
                      line
                    )}
                  </LiComponent>
                ))}
              </UlComponent>
              <div style={{ marginTop: 'auto' }}>
                <Typography
                  variant="h6"
                  fontFamily={"Unbounded, sans-serif"}
                  fontWeight={"400"}
                  fontSize={{ md: "30px", sm: '24px', xs: '20px'}}
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  {item.price}
                </Typography>
                <StyledButton
                  variant="contained"
                  sx={{
                    borderRadius: "15px",
                    padding: { sm: "24px 50px", xs: "16px 30px"},
                    maxWidth: "316px",
						  width: "100%",
                    height: "63px",
                    background: (theme) => theme.palette.primary.blue.light,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "700",
                    fontSize: "16px",
                    color: (theme) => theme.palette.primary.main,
                    marginTop: '30px',
                    alignSelf: 'center'
                  }}
                >
                  Придбати тариф
                </StyledButton>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
		<StyledBackgroundImageAdaptive
  sx={{
	 display: 'none',
    backgroundImage: `url(${FirstBubbleAdaptive})`,
    backgroundPosition: "right 0%",
    left: 0,
    zIndex: 1,
  }}
></StyledBackgroundImageAdaptive>
    </Container>
  );
}

export default Tariffs;
