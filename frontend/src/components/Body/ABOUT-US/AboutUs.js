import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import { AboutUsData } from "./AboutUsData";
import MainImage from '../../../images/AboutUs/MainImage.png';
import Bubbles from "../../../images/AboutUs/Bubble.png";


const Container = styled(Box)`

  margin-top: 80px;
  padding: 0 7% 0 7%;

  @media(max-width: 800px){
    margin-top: 100px;
  }

  @media(max-width: 450px){
    margin-top: 50px;
  }
`;



function AboutUs() {
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
        Про нас
      </Typography>
		<Box
			sx={{
				position: "absolute",
				backgroundImage: `url(${Bubbles})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "left 300%",
				left: 0,
				width: "100%",
				height: "100%",
				zIndex: 1,
			}}
		></Box>
		<Grid 
		container
		paddingTop={'50px'}
		>
			{AboutUsData.map((item,index) => (
				<Grid 
				item
				key={item.id} 
            xs={12} 
            sm={6} 
            md={4}
				sx={{marginLeft: index !== 0 ? '0px' : '0px'}}
				>
					<Typography
					fontFamily={'Inter, sans-serif'}
					fontWeight={400}
					fontSize={{ md: "20px", sm: '18px', xs: '16px'}}
					lineHeight={'120%'}
					color={(theme) => theme.palette.primary.main}
					>
						{item.firstParagraph && item.firstParagraph.split('iSyb').map((part, index) => {
							return (
								<React.Fragment key={index}>
								{index > 0 && <span style={{ color: '#54afec' }}>iSyb</span>}
								{part}
							</React.Fragment>
							);
						})}
					</Typography>
					{index === 1 ? 
						<Grid item sx={{marginLeft: '20px'}}>
							<img alt="MainImage" loading="lazy" src={MainImage} />
							<Typography
							fontFamily={'Inter, sans-serif'}
							fontWeight={400}
							fontSize={{ md: "20px", sm: '18px', xs: '16px'}}
							lineHeight={'120%'}
							color={(theme) => theme.palette.primary.main}
							sx={{
								paddingTop: {md: '60px', sm: '40px', xs: '30px'}
							}}
							>
								{item.paragraph}
							</Typography>
						</Grid>
					: ''}
					<Typography
					fontFamily={'Inter, sans-serif'}
					fontWeight={400}
					fontSize={{ md: "20px", sm: '18px', xs: '16px'}}
					lineHeight={'120%'}
					color={(theme) => theme.palette.primary.main}
					sx={{
						paddingTop: {md: '60px', sm: '40px', xs: '30px'}
					}}
					>
						{item.secondParagraph}
					</Typography>
					<Typography
					fontFamily={'Inter, sans-serif'}
					fontWeight={400}
					fontSize={{ md: "20px", sm: '18px', xs: '16px'}}
					lineHeight={'120%'}
					color={(theme) => theme.palette.primary.main}
					sx={{
						paddingTop: {md: '60px', sm: '40px', xs: '30px'}
					}}
					>
						{item.thirdParagraph}
					</Typography>
				</Grid>
			))}
		</Grid>
    </Container>
  );
}

export default AboutUs;
