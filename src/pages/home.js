import { useState } from 'react';
import '../css/home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './header';
import NavbarLeft from './navbarleft';


function HomePage() {

  const [currentMenu, setCurrentMenu] = useState(null);

  return (
    <div className="home-content">
      <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="8">
              <Header></Header>
              <NavbarLeft />
            </Col>

          </Row>
      </Container>
    </div>
  );
}

export default HomePage;
