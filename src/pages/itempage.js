import '../css/item.css';
import { cardapio } from './cardapiojson';


function ItemPage(props) {
  let itemprops = props.currentMenu.split(' ');
  const itemList = cardapio[itemprops[1]];

  return (
    <div className="item" onClick={() => props.setCurrentMenu(itemprops[1])}>

      {itemList.map(item => {
        if (item.image === itemprops[2]) {
          const imgname = 'photos/' + itemprops[1] + '/' + item.image + '.jpg';
          const msgpedido = 'https://api.whatsapp.com/send?phone=5521981351099&text=' +
            'Gostaria de pedir:\n%0A   *' + item.nome + '*';
          return (<div>
            <center>
              <div className="item-item" height='200px'>
                <img src={imgname} alt={item.nome} //height='100px'
                  onClick={() => props.setCurrentMenu(props.currentMenu)} />
              </div>
              <br /><br />
              <div className="item-item">
                <b>{item.nome}</b>
              </div>
              <div className="item-description">
                {item.descricao}
              </div>
              <br />
              <div className="item-value"><b>R$ {item.valor}</b></div>
              <div className="item-description">({item.unidade})</div>
              <br /><br />
              <a href={msgpedido} target='_blank'><button className='btn btn-dark'>Pedir</button></a>
              <br /><br />
            </center>
          </div>)
        }
      })}
    </div>
  );
}

export default ItemPage;

