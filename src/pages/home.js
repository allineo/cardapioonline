import { useState } from 'react';
import '../css/home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './header';
import MenuPages from './menupages';
import MenuLeftPage from './menuleft';


function HomePage() {

  const [currentMenu, setCurrentMenu] = useState('mainmenu');

  return (
    <div className="home-content">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="8">

            <Header></Header>

            <div>
              <Row>
                <Col xs lg="2">
                  <MenuLeftPage setCurrentMenu={setCurrentMenu} />
                </Col>
                <Col xs lg="10">
                    <MenuPages currentMenu={currentMenu} />
                </Col>
              </Row>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
