import MainMenu from './mainmenu';
import CombosPage from './menupages/combos';
import PizzasPage from './menupages/pizzas';
import MarmitasPage from './menupages/marmitas';
import SucosPage from './menupages/sucos';
import CafePage from './menupages/cafe';
import BebidasPage from './menupages/bebidas';


function ListMenu(props) {
    if (props.currentMenu === 'Combos') {
      return (<CombosPage />);
    } else if (props.currentMenu === 'Pizzas') {
      return (<PizzasPage />);
    } else if (props.currentMenu === 'Marmitas') {
      return (<MarmitasPage />);
    } else if (props.currentMenu === 'Sucos') {
      return (<SucosPage />);
    } else if (props.currentMenu === 'Café') {
      return (<CafePage />);
    } else if (props.currentMenu === 'Bebidas') {
      return (<BebidasPage />);
    } else {
      return (<MainMenu />);
    }
}

export default ListMenu;