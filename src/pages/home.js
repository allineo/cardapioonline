import { useState } from 'react';
import MenuLeftPage from './menuleft';
import MenuPage from './menu';

function HomePage() {

  const [currentMenu, setCurrentMenu] = useState(null);

  return (
    <div >
      <table>
        <tr>
          <td>
            Chefe Ricardo  <br />
            Congelados Delivery <br /><br />
          </td>
          <td>
            <center>
              CARDÁPIO DO DIA <br />
              <img src='chefericardo.png' className="App-logo" alt="logo" />
            </center>
          </td>
        </tr>
        <tr>
          <td>
            <MenuLeftPage setCurrentMenu={setCurrentMenu} />
          </td>
          <td>
            <MenuPage currentMenu={currentMenu} />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default HomePage;
