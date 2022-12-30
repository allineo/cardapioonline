import CombosPage from './menupages/combos';
import PizzasPage from './menupages/pizzas';
import MarmitasPage from './menupages/marmitas';
import SucosPage from './menupages/sucos';
import CafePage from './menupages/cafe';
import BebidasPage from './menupages/bebidas';


function MenuPage(props) {

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

function MainMenu() {
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
  return (
    <div>
      <img src='photos/bebidas/cocacola.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/vinhos.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />&nbsp;&nbsp;
    </div>);
}

function MenuPizzas(props) {
  return (
    <div>
      <img src='photos/bebidas/cocacola.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/vinhos.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />&nbsp;&nbsp;
    </div>);
}

function MenuMarmitas(props) {
  return (
    <div>
      <img src='photos/marmitas/marmitafit.jpg' alt="marmitafit" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/marmitas/Feijoada.jpg' alt="Feijoada" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/marmitas/Lasanha.jpg' alt="Lasanha" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/marmitas/Feijoada.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
      <img src='photos/marmitas/marmitafit.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />&nbsp;&nbsp;
    </div>);
}

function MenuSucos(props) {
  return (
    <div>
      <img src='photos/sucos/sucoles.jpg' alt="Sucolé" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/sucos/sucoles2.jpg' alt="Sucolé" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/sucos/sucoles.jpg' alt="Sucolé" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/sucos/sucoles2.jpg' alt="Suco" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
      <img src='photos/sucos/sucoles.jpg' alt="Sucolé" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />&nbsp;&nbsp;
    </div>);
}

function MenuCafe(props) {
  return (
    <div>
      <img src='photos/bebidas/cocacola.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/vinhos.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />&nbsp;&nbsp;
    </div>);
}

function MenuBebidas(props) {
  return (
    <div>
      <img src='photos/bebidas/cocacola.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/vinhos.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/bebidas/vinhos.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
      <img src='photos/bebidas/vinhos.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />&nbsp;&nbsp;
    </div>);
}

export default MenuPage;
