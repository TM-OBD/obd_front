import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styled from "@emotion/styled";
import { Navigation } from "swiper/modules";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { ReviewsData } from "./ReviewsData";

import starFilled from "../../../images/icons/star-filled.jpg";
import starNotFilled from "../../../images/icons/star-notfilled.jpg";

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 30%;
  height: 240px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.palette.primary.blue.light};

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SwiperHeader = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30%;
`;

const UserInfo = styled(Box)`
  display: flex;
  align-items: center;
  width: 50%;
  gap: 8px;
`;

const UserAvatarContainer = styled(Box)`
  display: flex;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
`;

const UsernameAndDate = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

const UserRate = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 2px;
  width: 50%;
  height: 100%;
`;

const RateSVG = styled("svg")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
`;

const UserReviewContiner = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const UserReview = styled(Box)`
  display: -webkit-box;
  -webkit-line-clamp: 6; // количество строк
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
  color: ${({ theme }) => theme.palette.primary.white.light};
  font-family: Inter, sans-serif;
`;

const ReviewBlock = () => {
  return (
    <Container id="Reviews"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "64px",
        gap: "50px",
        width: "100%",
        padding: "0 10% 0 10%",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 400,
			 fontFamily: "Unbounded, sans-serif",
			 zIndex: 2,
          color: (theme) => theme.palette.primary.white.light,
        }}
      >
        Відгуки
      </Typography>
      <StyledSwiper
        slidesPerView={1}
        spaceBetween={3}
        navigation={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {ReviewsData.map((reviewData) => (
          <StyledSwiperSlide>
            <SwiperHeader>
              <UserInfo>
                <UserAvatarContainer>
                  <img src={reviewData.avatar} alt="avatar"></img>
                </UserAvatarContainer>
                <UsernameAndDate>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: (theme) => theme.palette.primary.white.light,
                      fontSize: "12px",
							 fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {reviewData.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                      color: (theme) => theme.palette.primary.blue.light,
                      fontSize: "12px",
							 fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {reviewData.date}
                  </Typography>
                </UsernameAndDate>
              </UserInfo>
              <UserRate>
                {reviewData.rate.map((rate) =>
                  rate ? (
                    <RateSVG
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.39791 12.8333L4.34582 8.73542L1.16666 5.97917L5.36666 5.61458L6.99999 1.75L8.63332 5.61458L12.8333 5.97917L9.65416 8.73542L10.6021 12.8333L6.99999 10.6604L3.39791 12.8333Z"
                        fill="#54AFEC"
                      />
                    </RateSVG>
                  ) : (
                    <RateSVG
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.15132 11.7949L4.83297 8.8481L4.90081 8.55482L4.67337 8.35763L2.38669 6.37514L5.40991 6.11271L5.70997 6.08666L5.82722 5.80923L7 3.03436L8.17278 5.80923L8.29003 6.08666L8.59009 6.11271L11.6133 6.37514L9.32664 8.35763L9.09919 8.55482L9.16703 8.8481L9.84868 11.7949L7.25827 10.2323L7 10.0765L6.74173 10.2323L4.15132 11.7949Z"
                        stroke="#54AFEC"
                      />
                    </RateSVG>
                  )
                )}
              </UserRate>
            </SwiperHeader>
            <UserReviewContiner>
              <UserReview>{reviewData.review}</UserReview>
            </UserReviewContiner>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

export default ReviewBlock;
