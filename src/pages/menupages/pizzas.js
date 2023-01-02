import '../../css/list.css';
import { cardapio }  from './cardapiojson';

function PizzasPage() {
  const itemList = cardapio['pizzas'];
  return (
    <div className="list">
      {itemList.map(item => {
        const imgname = 'photos/pizzas/' + item.image + '.jpg';
        return (<div>
          <div className="list-item">
            <img src={imgname} />
          </div>
          <div className="list-item">
            <b>{item.nome}</b><br/>
            {item.descricao}<br/>
            <b>R$ {item.valor}</b> ({item.unidade})
          </div>
        </div>)
    	})}
    </div>
  );
}

export default PizzasPage;
