import { useState } from 'react';
//import { useHistory } from "react-router-dom";
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/swiper.css'
import '../css/list.css';
import { cardapio } from './cardapiojson';


function MainMenu(props) {
  return (
    <div>
      <MenuSlides title='Pizzas' currentMenu='pizzas' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Marmitas' currentMenu='marmitas' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='PROMOÇÕES' currentMenu='promos' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Caldos' currentMenu='caldos' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Petiscos' currentMenu='petiscos' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Gelados' currentMenu='gelados' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Bebidas' currentMenu='bebidas' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Vegetariano' currentMenu='vegetariano' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Cafés' currentMenu='cafes' setCurrentMenu={props.setCurrentMenu} />
      <MenuSlides title='Souvenirs' currentMenu='souvenirs' setCurrentMenu={props.setCurrentMenu} />
    </div>);
}


function MenuSlides(props) {
  //const history = useHistory();

  SwiperCore.use([Virtual, Navigation, Pagination]);
  const [setSwiperRef] = useState(null);

  const photos = cardapio[props.currentMenu];
  let slides = [];
  for (let item in photos) {
    const imgname = 'photos/' + props.currentMenu + '/' + photos[item].image + '.jpg';
    slides.push(<div>
      <img src={imgname} alt={photos[item].nome} onClick={() => props.setCurrentMenu('item ' + props.currentMenu + ' ' + photos[item].image)} />
      <div className="swiper-item"><center>{photos[item].nome}</center></div>
    </div>);
  }
  // onClick={() => history.push("/about", { from: "HomePage" })}

  return (<div>
    <div className="swiper-title" onClick={() => props.setCurrentMenu(props.currentMenu)}>
      {props.title}
    </div>

    <Swiper
      onSwiper={setSwiperRef}
      breakpoints={{
        240: {
          slidesPerView: 1,
        },
        360: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 3,
        },

      }}
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
    <br />
  </div>);
}

export default MainMenu;