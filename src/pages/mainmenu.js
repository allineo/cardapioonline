import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/swiper.css'
import { cardapio } from './cardapiojson';


function MainMenu() {
  return (
    <div>
      <MenuSlides currentMenu='combos' />
      <MenuSlides currentMenu='pizzas' />
      <MenuSlides currentMenu='marmitas' />
      <MenuSlides currentMenu='sucos' />
      <MenuSlides currentMenu='cafes' />
      <MenuSlides currentMenu='bebidas' />
    </div>);
}


function MenuSlides(props) {
  SwiperCore.use([Virtual, Navigation, Pagination]);

  const [swiperRef, setSwiperRef] = useState(null);

  const photos = cardapio[props.currentMenu];
  let slides = [];
  for (let item in photos) {
    const imgname = 'photos/' + props.currentMenu + '/' + photos[item].image + '.jpg';
    slides.push(<img src={imgname} alt={photos[item].nome} />);
  }

  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={2}
      centeredSlides={false}
      spaceBetween={10}
      navigation={true}
      virtual
    >
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {slideContent}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MainMenu;