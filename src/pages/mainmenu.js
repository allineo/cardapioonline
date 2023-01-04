import React, { useRef, useState } from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/swiper.css'

function MainMenu(props) {
  return (
    <div>
      <MenuCombos />
      <MenuPizzas />
      <MenuMarmitas />
      <MenuSucos />
      <MenuCafe />
      <MenuBebidas />
    </div>);
}

function MenuCombos(props) {
  SwiperCore.use([Virtual, Navigation, Pagination]);

  const [swiperRef, setSwiperRef] = useState(null);

  const slides = [
    <img src='photos/combos/marmitacombo.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />,
    <img src='photos/combos/sucoles2.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />,
    <img src='photos/combos/pizza.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />,
    <img src='photos/combos/cafe.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />,
  ];
  return (
    <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={4}
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

function MenuPizzas(props) {
  SwiperCore.use([Virtual, Navigation, Pagination]);
  const [swiperRef, setSwiperRef] = useState(null);

  const slides = [
    <img src='photos/pizzas/pizza.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />,
    <img src='photos/pizzas/pizza.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />,
    <img src='photos/pizzas/pizza.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />,
    <img src='photos/pizzas/pizza.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />,
    <img src='photos/pizzas/pizza.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />
  ]
  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={4}
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

function MenuMarmitas(props) {
  SwiperCore.use([Virtual, Navigation, Pagination]);
  const [swiperRef, setSwiperRef] = useState(null);
  
  const slides = [
    <img src='photos/marmitas/marmitafit.jpg' alt="marmitafit" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />,
      <img src='photos/marmitas/Feijoada.jpg' alt="Feijoada" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />,
      <img src='photos/marmitas/Lasanha.jpg' alt="Lasanha" width="100" onClick={() => props.setCurrentMenu('Sucos')} />,
      <img src='photos/marmitas/carneseca.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />,
      <img src='photos/marmitas/marmitafit.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />
  ]
  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={4}
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

function MenuSucos(props) {
  SwiperCore.use([Virtual, Navigation, Pagination]);
  const [swiperRef, setSwiperRef] = useState(null);
  
  const slides = [
    <img src='photos/sucos/sucoles.jpg' alt="Sucolé" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />,
    <img src='photos/sucos/Sucoles2.jpg' alt="Sucolé" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />,
    <img src='photos/sucos/sucoles.jpg' alt="Sucolé" width="100" onClick={() => props.setCurrentMenu('Sucos')} />,
    <img src='photos/sucos/Sucoles2.jpg' alt="Suco" width="100" onClick={() => props.setCurrentMenu('Café')} />,
    <img src='photos/sucos/sucoles.jpg' alt="Sucolé" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />
  ]
  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={4}
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

function MenuCafe(props) {
  SwiperCore.use([Virtual, Navigation, Pagination]);
  const [swiperRef, setSwiperRef] = useState(null);
  
  const slides = [
    <img src='photos/cafes/cafe.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />,
    <img src='photos/cafes/cafe.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />,
    <img src='photos/cafes/cafe.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />,
    <img src='photos/cafes/cafe.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />,
    <img src='photos/cafes/cafe.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />,
  ]
  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={4}
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

function MenuBebidas(props) {
  SwiperCore.use([Virtual, Navigation, Pagination]);
  const [swiperRef, setSwiperRef] = useState(null);
  
  const slides = [
    <img src='photos/bebidas/vinhos.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />,
    <img src='photos/bebidas/heineken.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />,
    <img src='photos/bebidas/brahma.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />,
    <img src='photos/bebidas/cocacola.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />,
    <img src='photos/bebidas/guarana.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />,
    <img src='photos/bebidas/agua.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />,
  ]
  return (
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={4}
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
