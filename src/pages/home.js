import { useState } from 'react';
import '../css/home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './header';
import MenuPages from './menupages';


function HomePage() {
  const [currentMenu, setCurrentMenu] = useState('mainmenu');

  return (
    <div className="home-content">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <Header currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
            <MenuPages currentMenu={currentMenu} setCurrentMenu={setCurrentMenu} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
