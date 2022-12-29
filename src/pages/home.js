import MenuPage from './menu';

function HomePage() {
  return (
    <div >
      <table>
        <tr>
          <td>
            <img src='chefericardo.png' className="App-logo" alt="logo" /><br />
            Chefe Ricardo  <br />
            Congelados Delivery <br /><br />
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
