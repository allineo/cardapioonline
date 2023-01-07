import '../css/list.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { cardapio } from './cardapiojson';
import MainMenu from './mainmenu';
import MenuLeftPage from './menuleft';


function MenuPages(props) {

  if (props.currentMenu === 'mainmenu') {
    return (<MainMenu currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />);

  } else {
    const iconTitle = 'icons/' + props.currentMenu + 'icon.jpg';
    return (<div>
      <Row>
        <Col xs lg="2">
          <MenuLeftPage currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />
        </Col>
        <Col xs lg="10">
          <div className="swiper-title" >
            <img src={iconTitle} alt={props.title} width="40" /> &nbsp;
            {props.title} {props.currentMenu}
          </div>
          <br />
          <PageContent currentMenu={props.currentMenu} setCurrentMenu={props.setCurrentMenu} />
        </Col>
      </Row>
    </div>);
  }
}

function PageContent(props) {
  const itemList = cardapio[props.currentMenu];
  return (
    <div className="list">
      {itemList.map(item => {
        const imgname = 'photos/' + props.currentMenu + '/' + item.image + '.jpg';
        return (<div>
          <div className="list-item">
            <img src={imgname} alt={item.nome} onClick={() => props.setCurrentMenu(props.currentMenu)} />
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

export default MenuPages;

