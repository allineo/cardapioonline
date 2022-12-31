
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
  return (
    <div>
      <img src='photos/combos/marmitacombo.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/combos/sucoles2.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/combos/pizza.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/combos/cafe.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
    </div>);
}

function MenuPizzas(props) {
  return (
    <div>
      <img src='photos/pizzas/pizza.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/pizzas/pizza.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/pizzas/pizza.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/pizzas/pizza.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
      <img src='photos/pizzas/pizza.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />&nbsp;&nbsp;
    </div>);
}

function MenuMarmitas(props) {
  return (
    <div>
      <img src='photos/marmitas/marmitafit.jpg' alt="marmitafit" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/marmitas/feijoada.jpg' alt="Feijoada" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/marmitas/lasanha.jpg' alt="Lasanha" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/marmitas/escondecarneseca.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
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
      <img src='photos/cafes/cafe.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/cafes/cafe.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/cafes/cafe.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/cafes/cafe.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
      <img src='photos/cafes/cafe.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />&nbsp;&nbsp;
    </div>);
}

function MenuBebidas(props) {
  return (
    <div>
      <img src='photos/bebidas/vinhos.jpg' alt="Coca-Cola" width="100" onClick={() => props.setCurrentMenu('Pizzas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/heineken.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/brahma.jpg' alt="Vinhos" width="100" onClick={() => props.setCurrentMenu('Marmitas')} />&nbsp;&nbsp;
      <img src='photos/bebidas/cocacola.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} />&nbsp;&nbsp;
      <img src='photos/bebidas/guarana.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} />&nbsp;&nbsp;
      <img src='photos/bebidas/agua.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} />&nbsp;&nbsp;
    </div>);
}

export default MainMenu;
