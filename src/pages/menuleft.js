
import '../css/list.css';

import { IconContext } from "react-icons";
import { GiFullPizza, GiTreeBranch, GiTomato } from 'react-icons/gi';
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
      </IconContext.Provider>
    </div>
  );
}

export default MenuLeftPage;
