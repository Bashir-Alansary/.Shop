'use client';
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectCards, Navigation, Pagination } from 'swiper/modules';
import "./hero.scss"
import { heroSlides } from '@/constants';
import slides from './data';

const Hero = () => {
  return (
    <div>
        <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        spaceBetween={50}
        slidesPerView={1}
        parallax= {true}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Navigation, EffectCards, Pagination]}
        effect="cards"
        >
          {
            slides.map(slide => {
              const {id, bg, title} = slide;
              return (
                <SwiperSlide key={id}>
                  <section className={`${bg} bg-cover`}>
                    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[660px] lg:items-center">
                      <div className="mx-auto max-w-xl text-center">
                        <h1 className="text-3xl font-bold mt-20 sm:text-5xl text-gray-50">
                          {title}
                        </h1>

                        <p className="mt-1 text-gray-200 sm:text-sm/relaxed">
                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">
                          <a
                            className="block w-full rounded border-2 border-gray-50 px-12 py-3 text-base font-semibold text-white shadow hover:bg-white hover:text-primary focus:outline-none focus:ring active:bg-white sm:w-auto"
                            href="#"
                          >
                            Shop Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                </SwiperSlide>
              )
            })
          }
        </Swiper>

    </div>
  )
}

export default Hero