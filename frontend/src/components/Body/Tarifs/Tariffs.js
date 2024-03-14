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


const UlComponent = styled('ul')`
  padding-left: 20px;
`

const LiComponent = styled('li')`
`;

const StyledButton = styled(Button)`

  z-index: 3;
  cursor: pointer;

  &:hover {
    background-color: #0040FF !important;
  }
` 

const StyledButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: auto;
`;

const StyledBgImg = styled(Box)``;


function Tariffs() {
  return (
    <Box 
	  id="Tariffs"
	  sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "0 7% 0 7%",
		  overflow: "hidden",
		  minHeight: {
			xl: "50vh",
			lg: "80vh",
         md: "80vh",
         sm: "80vh",
         xs: "80vh",
		  },
        marginTop: {
            lg: "0px",
            md: "80px",
            sm: "80px",
            xs: "60px",
          }
      }}
	  >
		<Typography
		  variant="h2"
		  component='h2'
		  sx={{
          display: "flex",
          width: "100%",
          color: (theme) => theme.palette.primary.main,
          fontFamily: "'Unbounded', sans-serif",
          zIndex: 1,
          fontSize: {
				xl: "76px",
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
				xl: "200px",
            lg: "200px",
            md: "200px",
            sm: "200px",
            xs: "100px",
          },
          height: {
				xl: "100%",
            lg: "100%",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },
			 top: '30%',
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
				xl: "500px",
            lg: "500px",
            md: "400px",
            sm: "400px",
            xs: "300px",
          },
          height: {
				xl: "100%",
            lg: "100%",
            md: "100%",
            sm: "50%",
            xs: "50%",
          },
			 left: {
				xl: "80%",
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
		<Box
		sx={{
			padding: { lg: "50px", md: '50px', sm: '30px', xs: "30px"},
			display: 'flex',
			flexDirection: 'row',
			gap: { xl: '50px', lg: "24px", md: '24px', sm: '24px', xs: "24px"},
			flexWrap: 'wrap',
			justifyContent: 'center'
		}}
		>
			{TariffsData.map((item, index) => (
				<Card
				 sx={{
					display: 'flex',
					justifyContent: 'center',
					border: '1px solid',
					borderColor: (theme) => theme.palette.primary.borderBlue, 
               borderRadius: '15px', 
					maxWidth: {
						xl: '100%',
						lg: "376px",
						md: "376px",
						sm: "376px",
						xs: "376px",
					}, 
					minWidth: {
						lg: "376px",
						md: "376px",
						sm: "376px",
						xs: "300px",
					},
					background: 'transparent',
               padding: '30px',
               flexDirection: 'column',
					gap: '30px'
				 }}
				>
					<Typography
					key={index}
                variant="h1"
					 sx={{
						fontFamily: "'Unbounded', sans-serif",
						fontWeight: '400',
						fontSize: { xl: "38px", lg: "30px", md: "30px", sm: '26px', xs: '24px'},
						color: (theme) => theme.palette.primary.borderBlue,
						display: 'flex',
						justifyContent: 'center'
					 }}
              >
                {item.title}
              </Typography>
				  { (index === 1 || index === 2) && (
					<>
					<Typography
                    variant="h3"
						  key={index}
						  sx={{
							fontFamily: "Inter, sans-serif",
							fontWeight: '400',
							fontSize: { xl: "24px", lg: "18px", md: "18px", sm: '18px', xs: '18px'},
							color: (theme) => theme.palette.primary.main,
							display: 'flex',
							justifyContent: 'center'
						  }}
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
			 )}
			 <UlComponent>
                {item.text && item.text.map((line, index) => (
                  <LiComponent  
						 style={{
							paddingTop: '20px',
							fontFamily: 'Inter, sans-serif',
							fontSize: {xl: '28px', lg: '20px', md: '18px', sm: '16px', xs: '16px'},
							color:'#f1f1f1'
						 }}
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
                  fontSize={{ xl: "38px", lg: "30px", md: "30px", sm: '24px', xs: '20px'}}
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  {item.price}
                </Typography>
					 <StyledButtonContainer>
                <StyledButton
                  variant="contained"
                  sx={{
                    borderRadius: "15px",
                    padding: {xl: "24px 50px", lg: "24px 50px", md: "24px 50px", sm: "24px 50px", xs: "16px 30px"},
                    maxWidth: "xl: '400px', lg: '316px', md: '316px', sm: '316px', xs: '316px'",
						  width: '100%',
                    height: "63px",
                    background: (theme) => theme.palette.primary.blue.light,
                    fontFamily: "Inter, sans-serif",
                    fontWeight: "700",
                    fontSize: { xl: '24px', lg: '16px', md: '16px', sm: '14px', xs: '12px'},
                    color: (theme) => theme.palette.primary.main,
                    marginTop: '30px',
                    alignSelf: 'center',
                  }}
                >
                  Придбати тариф
                </StyledButton>
					 </StyledButtonContainer>
              </div>
			</Card>
			))}
		</Box>
    </Box>
  );
}

export default Tariffs;
