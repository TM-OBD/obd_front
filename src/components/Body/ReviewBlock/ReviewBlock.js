import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styled from "@emotion/styled";
<<<<<<< Updated upstream
import { A11y, Navigation, Pagination } from "swiper/modules";
=======
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
>>>>>>> Stashed changes
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { ReviewsData } from "./ReviewsData";
<<<<<<< Updated upstream
import { Avatar } from "@mui/material";
=======
>>>>>>> Stashed changes

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  /* & .swiper-button-prev, .swiper-button-next {
    top: auto;
    bottom: 0;
  } */
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

const UserReviewContainer = styled(Box)`
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
  const swiperRef = useRef(null);
  return (
    <Container
      id="Reviews"
      sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "64px",
        gap: "50px",
        width: "100%",
        padding: "0 10% 0 10%",
        // height: '70vh',
      }}
    >
      <Box // Container for Title and buttons
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
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
        <Box // Container for arrow buttons (for PC)
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Avatar
            onClick={() => swiperRef.current.slidePrev()}
            sx={{
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.29166 24.9999C7.29166 24.4246 7.75803 23.9583 8.33332 23.9583H41.6667C42.242 23.9583 42.7083 24.4246 42.7083 24.9999C42.7083 25.5752 42.242 26.0416 41.6667 26.0416H8.33332C7.75803 26.0416 7.29166 25.5752 7.29166 24.9999Z"
                fill="#54AFEC"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.5699 11.7633C21.9767 12.1701 21.9767 12.8297 21.5699 13.2365L9.80646 24.9999L21.5699 36.7633C21.9767 37.1701 21.9767 37.8297 21.5699 38.2365C21.1631 38.6433 20.5036 38.6433 20.0968 38.2365L7.59675 25.7365C7.18996 25.3297 7.18996 24.6701 7.59675 24.2634L20.0968 11.7633C20.5036 11.3566 21.1631 11.3566 21.5699 11.7633Z"
                fill="#54AFEC"
              />
            </svg>
          </Avatar>
          <Avatar
            onClick={() => swiperRef.current.slideNext()}
            sx={{
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M42.7083 24.9999C42.7083 24.4246 42.242 23.9583 41.6667 23.9583H8.33334C7.75805 23.9583 7.29168 24.4246 7.29168 24.9999C7.29168 25.5752 7.75805 26.0416 8.33334 26.0416H41.6667C42.242 26.0416 42.7083 25.5752 42.7083 24.9999Z"
                fill="#54AFEC"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.4301 11.7633C28.0233 12.1701 28.0233 12.8297 28.4301 13.2365L40.1935 24.9999L28.4301 36.7633C28.0233 37.1701 28.0233 37.8297 28.4301 38.2365C28.8369 38.6433 29.4964 38.6433 29.9032 38.2365L42.4032 25.7365C42.81 25.3297 42.81 24.6701 42.4032 24.2634L29.9032 11.7633C29.4964 11.3566 28.8369 11.3566 28.4301 11.7633Z"
                fill="#54AFEC"
              />
            </svg>
          </Avatar>
        </Box>
      </Box>
      <StyledSwiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        spaceBetween={3}
<<<<<<< Updated upstream
        navigation={false}
=======
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        // scrollbar={{ draggable: true }}
>>>>>>> Stashed changes
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
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
            <UserReviewContainer>
              <UserReview>{reviewData.review}</UserReview>
            </UserReviewContainer>
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};

export default ReviewBlock;
