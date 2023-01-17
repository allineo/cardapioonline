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
                <Col xs lg="10">
                    <center>
                        <h1 className="home-title">
                            Chefe Ricardo</h1>
                        <div className="home-subtitle">congelados delivery
                        </div>
                        <div className="home-title">
                            <IconContext.Provider value={{ color: "orange" }} >
                                <a href={urlzap} target='_blank'><FaWhatsapp /></a> &nbsp;
                                <a href={urlinsta} target='_blank'><FaInstagram /></a>
                            </IconContext.Provider>
                        </div>
                    </center>
                </Col>
            </Row>
        </div >
    );
}

export default Header;