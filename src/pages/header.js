import '../css/home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from "react-icons";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

function Header(props) {
    const urlzap = 'https://api.whatsapp.com/send?phone=5521981351099';
    const urlinsta = 'https://www.instagram.com/chefe.ricardo';
    const urlmaps = 'https://goo.gl/maps/ssGGhhTV5mrxTFAFA';
    
    return (
        <div className='home-header' onClick={() => props.setCurrentMenu('mainmenu')}>
            <Row>
                <Col xs lg="2" className="align-center menuleft">
                    <img src='chefericardo.png' className="App-logo" alt="Logo Petiscos do Chefe" />
                </Col>
                <Col xs lg="10">
                    <center>
                        <h1 className="home-title">
                            Petiscos do Chefe</h1>
                        <div className="home-subtitle">congelados delivery
                        </div>
                        <div className="home-icons">
                            <IconContext.Provider value={{ color: "orange" }} >
                                <a href={urlzap} target='_blank' rel="noreferrer"><FaWhatsapp /></a> &nbsp;
                                <a href={urlinsta} target='_blank' rel="noreferrer"><FaInstagram /></a> &nbsp;
                                <a href={urlmaps} target='_blank' rel="noreferrer"><FiMapPin /></a>
                            </IconContext.Provider>
                        </div>
                    </center>
                </Col>
            </Row>
        </div >
    );
}

export default Header;