import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const HeroSlider: FC = () => {
  return (
    <Swiper
      loop={true}
      navigation
      modules={[Autoplay, A11y, Navigation]}
      autoplay={{ delay: 6000 }}
    >
      <SwiperSlide className="relative" style={{ height: "820px" }}>
        <div
          className="w-full relative top-0 left-0 -z-10"
          style={{ height: "820px" }}
        >
          <LazyLoadImage
            height="820px"
            width="100%"
            placeholderSrc="/slider/lazy-load/slide-1.jpg"
            src="/slider/slide-1.jpg"
            alt="slide-1"
            className="brightness-75 object-cover object-bottom h-[820px]"
          />
        </div>
        <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full">
          <div className="container flex justify-end px-28">
            <div className="flex gap-4 flex-col">
              <div className="bg-rs-primary px-3 py-2 text-base font-medium text-white w-fit mb-6">
                Mateo 22:37-38
              </div>
              <div className="text-white font-medium text-2xl">
                Amaras al señor tu Dios con todo
              </div>
              <div className="text-white font-extrabold text-6xl">
                tu corazón
              </div>
              <div className="text-white font-light text-base">
                con toda tu alma y con toda tu mente. Este es el primero y
                grande mandamiento
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative" style={{ height: "820px" }}>
        <div
          className="w-full relative top-0 left-0 -z-10"
          style={{ height: "820px" }}
        >
          <LazyLoadImage
            height={820}
            width="100%"
            placeholderSrc="/slider/lazy-load/slide-2.jpg"
            src="/slider/slide-2.jpg"
            alt="slide-1"
            className="brightness-75 object-cover object-center h-[820px]"
          />
        </div>
        <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full">
          <div className="container flex px-28 gap-4 flex-col">
            <div className="text-white font-medium text-2xl">
              Transmitiendo desde la puerta del
            </div>
            <div className="text-white font-extrabold text-6xl">
              mundo Maya,
            </div>
            <div className="text-white text-base font-light">
              para el mundo entero. Somos Radio Sulamita, 90.1 FM — La
              frecuencia del amor de Dios.
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className="relative" style={{ height: "820px" }}>
        <div
          className="w-full relative top-0 left-0 -z-10"
          style={{ height: "820px" }}
        >
          <LazyLoadImage
            height={820}
            width="100%"
            placeholderSrc="/slider/lazy-load/slide-1.jpg"
            src="/slider/slide-3.jpg"
            alt="slide-3"
            className="brightness-75 object-cover object-bottom h-[820px]"
          />
        </div>
        <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full">
          <div className="container flex justify-end px-28">
            <div className="flex gap-4 flex-col">
              <div className="bg-rs-primary px-3 py-2 text-base font-medium text-white w-fit mb-6">
                Juan 14:2
              </div>
              <div className="text-white font-medium text-2xl">
                En el hogar de mi Padre hay muchas
              </div>
              <div className="text-white font-extrabold text-6xl">
                viviendas;
              </div>
              <div className="text-white font-light text-base">
                si no fuera así, ya se lo habría dicho a ustedes. Voy a
                prepararles un lugar.
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
