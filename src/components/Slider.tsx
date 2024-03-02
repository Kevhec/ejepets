'use client';

import React, { memo, useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperOptions } from 'swiper/types';
import useSliderElements from '@/hooks/useSliderElements';

type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void };

export interface SliderElement {
  item: React.ReactNode
  id: string | number
}

interface Props {
  elements: React.ReactNode[]
  sliderIdentifier: string
}

const Slider = memo(({
  elements, sliderIdentifier,
}: Props) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [sliderElements] = useSliderElements({ elements });

  useEffect(() => {
    register();

    const params: SwiperOptions = {
      slidesPerView: 'auto',
      spaceBetween: '16',
      centeredSlides: true,
      centeredSlidesBounds: true,
      pagination: true,
      navigation: {
        enabled: true,
        /* prevEl: `.slider-${sliderIdentifier}-prevControl`,
        nextEl: `.slider-${sliderIdentifier}-nextControl`, */
      },
      injectStyles: [
        `
          .swiper-wrapper {
            padding: 0 1rem;
            @media screen and (min-width: 768px) {
              padding: 0;
            }
          }

          .swiper-button-prev, .swiper-button-next {
            width: 1rem;
            height: 1rem;
            color: white;
            filter:
              drop-shadow(1px 0px 0 #724923)
              drop-shadow(-1px 0px 0 #724923)
              drop-shadow(0px 1px 0 #724923)
              drop-shadow(0px -1px 0 #724923)
            ;
            top: 50%;
            transform: translateY(50%);
          }

          .swiper-button-prev {
            left: 2px;
          }

          .swiper-button-next {
            right: 2px;
          }

          .swiper-pagination-bullet {
            background-color: white;
            outline: 1px solid #724923;
          }
        `,
      ],
    };

    if (swiperRef.current) {
      Object.assign(swiperRef?.current, params);
      swiperRef?.current?.initialize();
    }
  }, [sliderIdentifier]);

  return (
    <div className="mySwiper">
      <swiper-container init={'false' as unknown as boolean} ref={swiperRef}>
        {
          sliderElements?.map((element) => (
            <swiper-slide key={element.id}>
              {element.item}
            </swiper-slide>
          ))
        }
      </swiper-container>
    </div>
  );
});

export default Slider;
