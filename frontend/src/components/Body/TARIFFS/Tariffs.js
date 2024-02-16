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

const Container = styled(Box)`

  position: relative;
  padding: 0 7% 0 7%;

  @media(max-width: 800px){
    margin-top: 100px;
  }

  @media(max-width: 450px){
    margin-top: 50px;
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


function Tariffs() {
  return (
    <Container>
      <Typography
        fontFamily={"Unbounded, sans-serif"}
        fontWeight={"400"}
        fontSize={{ md: "60px", sm: '48px', xs: '36px'}}
        sx={{
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Тарифи
      </Typography>
		<Box
  sx={{
    position: "absolute",
    backgroundImage: `url(${FirstBB})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left 100%",
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
  }}
></Box>
<Box
  sx={{
    position: "absolute",
    backgroundImage: `url(${SecondBB})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 25%",
    right: 0,
    width: "100%",
    height: "100%",
    zIndex: 2,
  }}
></Box>
      <Grid 
        container
        spacing={3} 
        paddingTop={'50px'}
		  sx={{ 
              display: 'flex',
				  justifyContent: 'center',
            }}
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
                fontSize={{ md: "30px", sm: '25px', xs: '20px'}}
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
                    fontSize={{ md: "18px", sm: '16px', xs: '14px'}}
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
                    {line.split(' ').map((word, wordIndex) => (
      					word === 'безкоштовно' ? (
							<Typography
								key={wordIndex}
								variant="inherit"
								component="span"
								sx={{ 
									color: (theme) => theme.palette.primary.blue.light,
									fontFamily: "'Inter', sans-serif", 
									fontWeight: 700,
									fontSize: { md: "14px", sm: '12px', xs: '10px' }
									}}
							>
									{word}{' '}
								</Typography>
								) : (
								<span key={wordIndex}>{word} </span>
								)
							))}
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
                <Button
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
                    fontSize: "20px",
                    color: (theme) => theme.palette.primary.main,
                    marginTop: '30px',
                    alignSelf: 'center'
                  }}
                >
                  Придбати тариф
                </Button>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Tariffs;
