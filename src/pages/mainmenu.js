import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/swiper.css'
import { cardapio } from './cardapiojson';


function MainMenu(props) {
  return (
    <div>
      <MenuSlides title='Combos e Promoções' currentMenu='combos' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Pizzas' currentMenu='pizzas' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Marmitas e Quentinhas' currentMenu='marmitas' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Sucos e Sucolés' currentMenu='sucos' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Café da Manhã e da Tarde' currentMenu='cafes' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Bebidas' currentMenu='bebidas' setCurrentMenu={props.setCurrentMenu} />
    </div>);
}


function MenuSlides(props) {
  const iconTitle = 'icons/' + props.currentMenu + 'icon.jpg';

  SwiperCore.use([Virtual, Navigation, Pagination]);
  const [swiperRef, setSwiperRef] = useState(null);

  const photos = cardapio[props.currentMenu];
  let slides = [];
  for (let item in photos) {
    const imgname = 'photos/' + props.currentMenu + '/' + photos[item].image + '.jpg';
    slides.push(<img src={imgname} alt={photos[item].nome} />);
  }

  return (<div>
    <div className="swiper-title" onClick={() => props.setCurrentMenu(props.currentMenu)}>
      <img src={iconTitle} alt={props.title} width="40" /> &nbsp;
      {props.title}
    </div>

    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={3}
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
    <br/>
  </div>);
}

export default MainMenu;