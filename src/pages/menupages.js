import '../css/list.css';
import { cardapio } from './cardapiojson';
import MainMenu from './mainmenu';


function MenuPages(props) {

  if (props.currentMenu === 'mainmenu') {
    return (<MainMenu />);

  } else {
    const itemList = cardapio[props.currentMenu];
    return (
      <div className="list">
        {itemList.map(item => {
          const imgname = 'photos/' + props.currentMenu + '/' + item.image + '.jpg';
          return (<div>
            <div className="list-item">
              <img src={imgname} alt={item.nome}/>
            </div>
            <div className="list-item">
              <b>{item.nome}</b><br />
              {item.descricao}<br />
              <b>R$ {item.valor}</b> ({item.unidade})
            </div>
          </div>)
        })}
      </div>
    );
  }
}

export default MenuPages;

