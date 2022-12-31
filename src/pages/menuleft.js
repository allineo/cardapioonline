
function MenuLeftPage(props) {
  return (
    <div>
      <img src='icons/pizzaicon.jpg' alt="Pizzas" width="100" onClick={() => props.setCurrentMenu('Pizzas')} /><br />
      <img src='icons/marmitasicon.jpg' alt="Marmitas" width="100" onClick={() => props.setCurrentMenu('Marmitas')} /><br />
      <img src='icons/sucosicon.jpg' alt="Sucos" width="100" onClick={() => props.setCurrentMenu('Sucos')} /><br />
      <img src='icons/cafeicon.jpg' alt="Café da Manhã" width="100" onClick={() => props.setCurrentMenu('Café')} /><br />
      <img src='icons/bebidasicon.jpg' alt="Bebidas" width="100" onClick={() => props.setCurrentMenu('Bebidas')} /><br />
    </div>
  );
}

export default MenuLeftPage;
