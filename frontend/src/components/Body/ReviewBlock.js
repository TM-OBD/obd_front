import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from '@emotion/styled';
import {Navigation} from 'swiper/modules'
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ReviewBlock = () => {
    return (
        <Container style={{marginTop: '25px'}}>
            <StyledSwiper
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Navigation]}
                className="mySwiper"
            >
                <StyledSwiperSlide>Slide 1</StyledSwiperSlide>
                <StyledSwiperSlide>Slide 2</StyledSwiperSlide>
                <StyledSwiperSlide>Slide 3</StyledSwiperSlide>
                <StyledSwiperSlide>Slide 4</StyledSwiperSlide>
                <StyledSwiperSlide>Slide 5</StyledSwiperSlide>
                <StyledSwiperSlide>Slide 6</StyledSwiperSlide>
                <StyledSwiperSlide>Slide 7</StyledSwiperSlide>
                <StyledSwiperSlide>Slide 8</StyledSwiperSlide>
                <StyledSwiperSlide>Slide 9</StyledSwiperSlide>
            </StyledSwiper>
        </Container>
    );
};

export default ReviewBlock;
