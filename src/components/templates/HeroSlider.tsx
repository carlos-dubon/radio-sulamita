import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { FC, useState } from "react";
import { SectionQuote } from "@lib/molecules";
import Image from "next/image";
import slide1 from "public/slider/slide-1.jpg";
import slide2 from "public/slider/slide-2.jpg";
import slide3 from "public/slider/slide-3.jpg";
import { Fade } from "react-awesome-reveal";
import { useBreakpoint } from "@app/hooks";
import useIsomorphicLayoutEffect from "use-isomorphic-layout-effect";

export const HeroSlider: FC = () => {
  const tailwind_sm: boolean = useBreakpoint("sm");

  const [sliderHeight, setSliderHeight] = useState<"620px" | "820px">("820px");

  useIsomorphicLayoutEffect(() => {
    tailwind_sm ? setSliderHeight("820px") : setSliderHeight("620px");

    // fix useBreakpoint not working on load see: https://github.com/kodingdotninja/use-tailwind-breakpoint/issues/2#issuecomment-1030703188
    window.dispatchEvent(new Event("resize"));
  }, [tailwind_sm]);

  return (
    <>
      <Swiper
        loop={true}
        navigation
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 6000 }}
      >
        <SwiperSlide className="relative" style={{ height: sliderHeight }}>
          <div
            className="w-full relative top-0 left-0 -z-10"
            style={{ height: sliderHeight }}
          >
            <Image
              src={slide1}
              alt="slide-1"
              layout="fill"
              placeholder="blur"
              className="brightness-75"
              objectFit="cover"
              objectPosition={`${tailwind_sm ? "bottom" : "left bottom"}`}
              priority
            />
          </div>
          <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full">
            <div className="container flex justify-end px-28">
              <div className="flex gap-4 flex-col">
                <Fade direction="right" cascade duration={400}>
                  <div className="bg-rs-primary px-3 py-2 text-base text-white w-fit mb-6">
                    Mateo 22:37-38
                  </div>
                  <div className="text-white text-2xl">
                    Amaras al señor tu Dios con todo
                  </div>

                  <div className="text-white text-5xl sm:text-6xl">
                    tu corazón
                  </div>
                  <div className="text-white text-sm sm:text-base">
                    con toda tu alma y con toda tu mente. Este es el primero y
                    grande mandamiento
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative" style={{ height: sliderHeight }}>
          <div
            className="w-full relative top-0 left-0 -z-10"
            style={{ height: sliderHeight }}
          >
            <Image
              src={slide2}
              alt="slide-2"
              layout="fill"
              placeholder="blur"
              className="brightness-75"
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
          <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full">
            <div className="container flex px-28 gap-4 flex-col">
              <Fade direction="right" cascade duration={400}>
                <div className="text-white text-2xl">
                  Transmitiendo desde la puerta del
                </div>
                <div className="text-white text-5xl sm:text-6xl">
                  mundo Maya,
                </div>
                <div className="text-white text-sm sm:text-base">
                  para el mundo entero. Somos Radio Sulamita, 90.1 FM — La
                  frecuencia del amor de Dios.
                </div>
              </Fade>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative" style={{ height: sliderHeight }}>
          <div
            className="w-full relative top-0 left-0 -z-10"
            style={{ height: sliderHeight }}
          >
            <Image
              src={slide3}
              alt="slide-3"
              layout="fill"
              placeholder="blur"
              className="brightness-75"
              objectFit="cover"
              objectPosition="top"
              priority
            />
          </div>
          <div className="flex justify-center items-center absolute top-0 left-0 h-full w-full">
            <div className="container flex justify-end px-28">
              <div className="flex gap-4 flex-col">
                <Fade direction="right" cascade duration={400}>
                  <div className="bg-rs-primary px-3 py-2 text-base text-white w-fit mb-6">
                    Juan 14:2
                  </div>
                  <div className="text-white text-2xl">
                    En el hogar de mi Padre hay muchas
                  </div>
                  <div className="text-white text-5xl sm:text-6xl">
                    viviendas;
                  </div>
                  <div className="text-white text-sm sm:text-base">
                    si no fuera así, ya se lo habría dicho a ustedes. Voy a
                    prepararles un lugar.
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <SectionQuote
        heading="El que es generoso prospera; el que reanima será reanimado."
        subHeading="Proverbios 11:25"
        buttonText="Donar"
        scrollTo="donar"
      />
    </>
  );
};
