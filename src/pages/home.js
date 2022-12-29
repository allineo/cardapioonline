import MenuLeftPage from './menuleft';
import MenuPage from './menu';

function HomePage() {
  return (
    <div >
      <table>
        <tr>
          <td>
            Chefe Ricardo  <br />
            Congelados Delivery <br /><br />
          </td>
          <td>
          <img src='chefericardo.png' className="App-logo" alt="logo" />
            CARDÁPIO DO DIA
          </td>
        </tr>
        <tr>
          <td>
            <MenuLeftPage />
          </td>
          <td>
            <MenuPage />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default HomePage;
