
import '../css/list.css';

import { IconContext } from "react-icons";
import { TbDiscount2 } from 'react-icons/tb';
import { GiFullPizza } from 'react-icons/gi';
import { BsInboxes } from 'react-icons/bs';
import { FaWineGlassAlt, FaCoffee } from 'react-icons/fa';
import { TiBeer } from 'react-icons/ti';

function MenuLeftPage(props) {
  return (
    <div>
      <IconContext.Provider value={{ size: "50px" }}>
        <div className="list-icons" onClick={() => props.setCurrentMenu('combos')} >
          <TbDiscount2 />
          <div className='list-icons-title'>Combos</div>
        </div>
        
        <div className="list-icons" onClick={() => props.setCurrentMenu('pizzas')} >
          <GiFullPizza />
          <div className='list-icons-title'>Pizzas</div>
        </div>
        
        <div className="list-icons" onClick={() => props.setCurrentMenu('marmitas')} >
          <BsInboxes />
          <div className='list-icons-title'>Marmitas</div>
        </div>
        
        <div className="list-icons" onClick={() => props.setCurrentMenu('sucos')} >
          <FaWineGlassAlt />
          <div className='list-icons-title'>Sucos</div>
        </div>
        
        <div className="list-icons" onClick={() => props.setCurrentMenu('cafes')} >
          <FaCoffee />
          <div className='list-icons-title'>Cafés</div>
        </div>
        
        <div className="list-icons" onClick={() => props.setCurrentMenu('bebidas')} >
          <TiBeer />
          <div className='list-icons-title'>Bebidas</div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default MenuLeftPage;
