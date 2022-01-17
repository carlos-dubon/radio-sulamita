import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { FC } from "react";
import Image from "next/image";

export const HeroSlider: FC = () => {
  return (
    <Swiper spaceBetween={50}>
      {/* <Swiper modules={[Autoplay]} spaceBetween={50} autoplay={{ delay: 6000 }}> */}
      <SwiperSlide className="relative" style={{ height: "820px" }}>
        <div
          className="w-full absolute top-0 left-0 -z-10"
          style={{ height: "820px" }}
        >
          <Image
            className="brightness-75"
            src="/slider/slide-1.jpg"
            alt="slide-1"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
        <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full">
          <div className="container flex justify-end px-28">
            <div className="flex gap-3 flex-col">
              <div className="bg-rs-primary px-3 py-2 text-base font-medium text-white w-fit mb-6">
                Mateo 22:37-38
              </div>
              <div className="text-white font-medium text-2xl">
                Amaras al señor tu Dios con todo
              </div>
              <div className="text-white font-extrabold text-6xl">
                tu corazón
              </div>
              <div className="text-white font-medium text-base">
                con toda tu alma y con toda tu mente. Este es el primero y
                grande mandamiento
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};
