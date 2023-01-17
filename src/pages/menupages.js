import '../css/list.css';
import '../css/button.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { cardapio } from './cardapiojson';
import MainMenu from './mainmenu';
import MenuLeftPage from './menuleft';


function MenuPages(props) {

  if (props.currentMenu === 'mainmenu') {
    return (<MainMenu currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />);

  } else {
    return (
      <Row>
        <Col xs lg="2" className="menuleft">
          <MenuLeftPage currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />
        </Col>
        <Col xs lg="10">
          <PageContent currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />
        </Col>
      </Row>
    );
  }
}

function PageContent(props) {
  const itemList = cardapio[props.currentMenu];
  return (
    <div className="list">
      {itemList.map(item => {
        const imgname = 'photos/' + props.currentMenu + '/' + item.image + '.jpg';
        const msgpedido = 'https://api.whatsapp.com/send?phone=5521981351099&text=' +
          'Adicionar ao meu pedido:\n\n  *' + item.nome + '*';
        return (<div className='holder-section'>
          <div className="list-item">
            <img src={imgname} alt={item.nome}
            onClick={() => props.setCurrentMenu(props.currentMenu)}/>
            <div className='list-text'>
              {item.nome}
              <div className="list-description">{item.descricao}</div>
              <b>R$ {item.valor}</b>
              <div className="list-description">({item.unidade})</div>
            </div>

          </div>
          <center><a href={msgpedido} target='_blank'><button className='btn btn-dark'>Pedir</button></a></center>
        </div>)
      })}
    </div>
  );
}

export default MenuPages;

