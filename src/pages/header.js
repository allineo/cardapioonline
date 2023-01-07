import '../css/home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(props) {
    return (
        <div className='home-header'  onClick={() => props.setCurrentMenu('mainmenu')}>
            <Row>
                <Col xs lg="2" className="align-center">
                    <img src='chefericardo.png' className="App-logo" alt="logo" />
                </Col>
                <Col xs lg="5">
                    <h1 className="home-title">
                        Chefe Ricardo<br/>
                        Congelados Delivery
                    </h1>
                </Col>
            </Row>
        </div>
    );
}

export default Header;