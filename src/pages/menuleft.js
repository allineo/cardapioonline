// https://react-icons.github.io/react-icons/


import '../css/list.css';

import { IconContext } from "react-icons";
import { GiFullPizza, GiBarbecue, GiSausage, GiTomato, GiBowlOfRice, GiHeartEarrings  } from 'react-icons/gi';
import { BsInboxes } from 'react-icons/bs';
import { FaIceCream, FaCoffee } from 'react-icons/fa';
import { CiBadgeDollar } from 'react-icons/ci';
import { TiBeer } from 'react-icons/ti';

function MenuLeftPage(props) {
  return (
    <div>
      <br />
      <IconContext.Provider value={{ size: "50px" }}>
        <div className="list-icons" onClick={() => props.setCurrentMenu('pizzas')} >
          <GiFullPizza /><br />
          <b>Pizzas</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('marmitas')} >
          <BsInboxes /><br />
          <b>Marmitas</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('promos')} >
          <CiBadgeDollar /><br />
          <b>PROMOS</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('caldos')} >
          <GiBowlOfRice /><br />
          <b>Caldos</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('espetos')} >
          <GiBarbecue /><br />
          <b>Espetos</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('petiscos')} >
          <GiSausage /><br />
          <b>Petiscos</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('gelados')} >
          <FaIceCream /><br />
          <b>Gelados</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('bebidas')} >
          <TiBeer /><br />
          <b>Bebidas</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('vegetariano')} >
          <GiTomato /><br />
          <b>Vegan</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('cafes')} >
          <FaCoffee /><br />
          <b>Cafés</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('souvenirs')} >
          <GiHeartEarrings /><br />
          <b>Souvenir</b>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default MenuLeftPage;
