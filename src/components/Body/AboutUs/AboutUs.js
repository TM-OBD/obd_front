import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { AboutUsData } from "./AboutUsData";
import MainImage from '../../../images/AboutUs/MainImage.png';
import Bubbles from "../../../images/AboutUs/Bubble.png";



function AboutUs() {
  return (
    <Box  //main container for about us block 
	 id="AboutUs"
	 sx={{
		position: "relative",
      width: "100%",
      padding: "0 7% 0 7%",
		marginTop: {
			lg: "80p",
         md: "80p",
         sm: "100px",
         xs: "50px",
		},
	 }}
	 >
      <Typography
		  variant="2"
		  component="h2"
        sx={{
          color: (theme) => theme.palette.primary.main,
			 width: '100%',
			 fontFamily: "Unbounded, sans-serif",
			 fontWeight: '400',
			 fontSize: { xl: '76px',lg: "60px", md: "60px", sm: '48px', xs: '36px'}
        }}
      >
        Про нас
      </Typography>
		<Box  //container for styled background image
        sx={{
          position: "absolute",
          width: {
            lg: "300px",
            md: "300px",
            sm: "300px",
            xs: "200px", 
          },
          height: {
            lg: "100%",
            md: "100%",
            sm: "100%",
            xs: "100%",
          },
			 top: {
            lg: "40%",
            md: "40%",
            sm: "40%",
            xs: "50%",
          },
          left: 0,
          backgroundImage: `url(${Bubbles})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></Box>
      <Grid  //container for all texts
        container
        sx={{
			paddingTop: {md: '50px', sm: '30px', xs: '30px'},
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {AboutUsData.map((item,index) => (
          <Grid  //container for paragraph
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
				  paddingLeft: {
					xl: '20px',
					lg: '20px',
					md: '20px',
					sm: '0px',
					xs: '0px'
				  }
            }}
          >
            <Typography
				  key={index}
				  sx={{
					color: (theme) => theme.palette.primary.main,
					fontFamily: "Inter, sans-serif",
					fontWeight: '400',
					lineHeight: '120%',
					fontSize: { xl: "34px", lg: "20px", md: "20px", sm: '18px', xs: '16px'}
				  }}
            >
              {item.firstParagraph &&
                item.firstParagraph.split('ми завжди ставимо').map((part, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index > 0 && <span style={{ color: '#54AFEC', fontFamily: "Inter, sans-serif" }}>ми завжди ставимо</span>}
                      {part.split('iSyb').map((subPart, subIndex) => {
                        return (
                          <React.Fragment key={subIndex}>
                            {subIndex > 0 && <span style={{ color: '#54AFEC', fontFamily: "Inter, sans-serif" }}>iSyb</span>}
                            {subPart}
                          </React.Fragment>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
            </Typography>
            {index === 1 ? 
              <Grid //container for image and text below img
                item
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2
                }}
              >
                <img alt="MainImage" loading="lazy" src={MainImage} style={{ maxWidth: '100%', height: 'auto' }}/>
                <Typography
						key={index}
						sx={{
							color: (theme) => theme.palette.primary.main,
							fontFamily: "Inter, sans-serif",
							fontWeight: '400',
							lineHeight: '120%',
							fontSize: { xl: "34px", lg: "20px", md: "20px", sm: '18px', xs: '16px'},
						}}
                >
                  {item.paragraph &&
                    item.paragraph.split('Наша місія').map((part, index) => {
                      return (
                        <React.Fragment key={index}>
                          {index > 0 && <span style={{ color: '#54AFEC', fontFamily: "Inter, sans-serif" }}>Наша місія</span>}
                          {part}
                        </React.Fragment>
                      );
                    })}
                </Typography>
              </Grid>
            : ''}
            <Typography
				  key={index}
				  sx={{
							color: (theme) => theme.palette.primary.main,
							fontFamily: "Inter, sans-serif",
							fontWeight: '400',
							lineHeight: '120%',
							fontSize: { xl: "34px", lg: "20px", md: "20px", sm: '18px', xs: '16px'}
						}}
            >
              {item.secondParagraph}
            </Typography>
            <Typography
				key={index}
				  sx={{
							color: (theme) => theme.palette.primary.main,
							fontFamily: "Inter, sans-serif",
							fontWeight: '400',
							lineHeight: '120%',
							fontSize: { xl: "34px", lg: "20px", md: "20px", sm: '18px', xs: '16px'},
							zIndex: 2
						}}
            >
              {item.thirdParagraph &&
                item.thirdParagraph.split('Ми прагнемо').map((part, index) => {
                  return (
                    <React.Fragment key={index}>
                      {index > 0 && <span style={{ color: '#54AFEC', fontFamily: "Inter, sans-serif" }}>Ми прагнемо</span>}
                      {part}
                    </React.Fragment>
                  );
                })}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default AboutUs;
