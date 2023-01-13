import '../css/home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(props) {
    const urlzap = 'https://api.whatsapp.com/send?phone=5521981351099';
    const urlinsta = 'https://www.instagram.com/chefe.ricardo';
    return (
        <div className='home-header'  onClick={() => props.setCurrentMenu('mainmenu')}>
            <Row>
                <Col xs lg="2" className="align-center">
                    <img src='chefericardo.png' className="App-logo" alt="Logo Chefe Ricardo" />
                </Col>
                <Col xs lg="7">
                    <h1 className="home-title">
                        Chefe Ricardo<br/>
                        Congelados Delivery &nbsp; &nbsp; &nbsp; &nbsp;
                        <a href={urlzap} target='_blank'><img src='whatsapp.png' alt="Whatsapp" height='20px'/></a> &nbsp; &nbsp;
                        <a href={urlinsta} target='_blank'><img src='instagram.png' alt="Instagram" height='20px'/></a>
                    </h1>
                </Col>
            </Row>
        </div>
    );
}

export default Header;