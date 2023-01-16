import '../css/home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from "react-icons";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Header(props) {
    const urlzap = 'https://api.whatsapp.com/send?phone=5521981351099';
    const urlinsta = 'https://www.instagram.com/chefe.ricardo';
    return (
        <div className='home-header' onClick={() => props.setCurrentMenu('mainmenu')}>
            <Row>
                <Col xs lg="2" className="align-center menuleft">
                    <img src='chefericardo.png' className="App-logo" alt="Logo Chefe Ricardo" />
                </Col>
                <Col xs lg="7">
                    <h1 className="home-title">
                        Chefe Ricardo<br />
                        Congelados Delivery &nbsp; &nbsp; &nbsp; &nbsp;
                        <IconContext.Provider value={{ color: "orange" }}>
                            <a href={urlzap} target='_blank'><FaWhatsapp /></a> &nbsp; &nbsp;
                            <a href={urlinsta} target='_blank'><FaInstagram /></a>
                        </IconContext.Provider>

                    </h1>
                </Col>
            </Row>
        </div>
    );
}

export default Header;