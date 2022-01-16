import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { FC } from "react";
import Image from "next/image";

export const HeroSlider: FC = () => {
  return (
    <Swiper spaceBetween={50}>
      {/* <Swiper modules={[Autoplay]} spaceBetween={50} autoplay={{ delay: 6000 }}> */}
      <SwiperSlide>
        <div style={{ width: "100%", height: "820px", position: "relative" }}>
          {" "}
          <Image
            className="brightness-75"
            src="/slider/slide-1.jpg"
            alt="slide-1"
            layout="fill"
            objectFit="cover"
            priority={true}
          ></Image>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
