import Col from 'react-bootstrap/Col';
import ListMenu from './listMenu';
import MenuLeftPage from './menuLeft'; 
import { useState } from 'react';
import Row from 'react-bootstrap/Row';


function NavbarLeft() {
  const [currentMenu, setCurrentMenu] = useState(null);

  return(
    <div>
      <Row>
        <Col xs lg="2">
          <MenuLeftPage setCurrentMenu={setCurrentMenu} />
        </Col>
        <Col xs lg="10">
          <ListMenu currentMenu={currentMenu} />
        </Col>
      </Row>
    </div>
  );

}

export default NavbarLeft;
