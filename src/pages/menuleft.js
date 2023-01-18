
import '../css/list.css';

import { IconContext } from "react-icons";
import { GiFullPizza } from 'react-icons/gi';
import { BsInboxes } from 'react-icons/bs';
import { FaWineGlassAlt, FaCoffee } from 'react-icons/fa';
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
        <div className="list-icons" onClick={() => props.setCurrentMenu('sucos')} >
          <FaWineGlassAlt /><br />
          <b>Sucos</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('cafes')} >
          <FaCoffee /><br />
          <b>Cafés</b>
        </div>
        <br />
        <div className="list-icons" onClick={() => props.setCurrentMenu('bebidas')} >
          <TiBeer /><br />
          <b>Bebidas</b>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default MenuLeftPage;
