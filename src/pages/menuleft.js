
function MenuLeftPage(props) {
  return (
    <div>
      <img src='icons/combosicon.jpg' alt="Combos" width="100" onClick={() => props.setCurrentMenu('combos')} /><br />
      <img src='icons/pizzaicon.jpg' alt="Pizzas" width="100" onClick={() => props.setCurrentMenu('pizzas')} /><br />
      <img src='icons/marmitasicon.jpg' alt="Marmitas" width="100" onClick={() => props.setCurrentMenu('marmitas')} /><br />
      <img src='icons/sucosicon.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('sucos')} /><br />
      <img src='icons/cafeicon.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('cafes')} /><br />
      <img src='icons/bebidasicon.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('bebidas')} /><br />
    </div>
  );
}

export default MenuLeftPage;
