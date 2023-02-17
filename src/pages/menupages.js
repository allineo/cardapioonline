import '../css/list.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { cardapio } from './cardapiojson';
import MainMenu from './mainmenu';
import MenuLeftPage from './menuleft';
import ItemPage from './itempage';


function MenuPages(props) {

  if (props.currentMenu === 'mainmenu') {
    return (<MainMenu currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />);

  } else {
    return (<div>
      <Row>
        <Col xs lg="2" className="menuleft">
          <MenuLeftPage currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />
        </Col>
        <Col xs lg="10">
          <PageContent currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />
        </Col>
      </Row>
    </div>);
  }
}

function PageContent(props) {
  if (props.currentMenu.startsWith('item ')) {
    return (<ItemPage currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />);
  } else {
    return (<ListPage currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />);
  }
}

function ListPage(props) {
  const itemList = cardapio[props.currentMenu];
  return (
    <div className="list">
      {itemList.map(item => {
        const imgname = 'photos/' + props.currentMenu + '/' + item.image + '.jpg';
        const msgpedido = 'https://api.whatsapp.com/send?phone=5521981351099&text=' +
          'Gostaria de pedir:\n%0A   *' + item.nome + '*';
        return (<div onClick={() => props.setCurrentMenu('item ' + props.currentMenu + ' ' + item.image)}>
          <center>
            <div className="list-item" height='100px'>
              <img src={imgname} alt={item.nome} //height='100px'
                onClick={() => props.setCurrentMenu(props.currentMenu)} />
            </div>
            <div className="list-item">
              <b>{item.nome}</b>
            </div>
            <div className="list-description">
              {item.descricao}
            </div>
            <div className="list-value"><b>R$ {item.valor}</b></div>
            <div className="list-description">({item.unidade})</div>
          </center>
          <br />
          <center> <a href={msgpedido} target='_blank' rel="noreferrer"><button className='btn btn-dark'>Pedir</button></a></center>
          <br /><br />
        </div>)
      })}
    </div>
  );
}

export default MenuPages;

