import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const images = [
  {
    url: '/src/images/1.jpg',
    title: 'Elegant Wedding Setup'
  },
  {
    url: '/src/images/2.jpg',
    title: 'Corporate Event Venue'
  },
  {
    url: '/src/images/3.jpg',
    title: 'Birthday Celebration'
  },
  {
    url: '/src/images/4.jpg',
    title: 'Outdoor Garden Party'
  }
];

const ImageSlider = () => {
  return (
    <div className="relative h-[600px] mt-24">
      <div className="absolute inset-0 overflow-hidden" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
      }}>
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 flex items-center justify-center">
                  <div className="text-center max-w-4xl px-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                      {image.title}
                    </h2>
                    <p className="text-xl text-white drop-shadow-md">
                      Creating Unforgettable Moments
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;