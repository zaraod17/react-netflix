import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./ShowCarousel.scss";

import { Pagination, Navigation } from "swiper";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ShowCaptions from "./ShowCaptions";

const ShowCarousel: React.FC = () => {
  return (
    <Grid item xs={12}>
      <h3
        style={{
          marginLeft: "1rem",
          marginBottom: "0.3rem",
          position: "relative",
        }}
      >
        Category
      </h3>
      <Swiper
        slidesPerView={6}
        slidesPerGroup={6}
        spaceBetween={10}
        navigation={true}
        loop={true}
        loopFillGroupWithBlank={true}
        style={{
          color: "white",
          paddingTop: "3vh",
          paddingBottom: "0.8rem",
          position: "relative",
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          400: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 5,
          },

          640: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 10,
          },
          786: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            slidesPerGroup: 6,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {[
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ].map((item) => (
          <SwiperSlide
            style={{
              borderRadius: "1rem",
              borderColor: "black",
              backgroundColor: "inherit",
            }}
          >
            <Link className="img-link" to="/movies">
              <img
                style={{
                  position: "relative",
                }}
                src="https://cdn.mos.cms.futurecdn.net/rwow8CCG3C3GrqHGiK8qcJ-1200-80.jpg"
                alt="movie"
              />
              <ShowCaptions />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Grid>
  );
};

export default ShowCarousel;
