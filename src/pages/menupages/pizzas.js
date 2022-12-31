import '../../css/list.css';

function PizzasPage() {
  const imagePizzaList = [
    "pizza", 
    "pizza", 
    "pizza",
    "pizza"
  ]
  return (
    <div className="list">
      {imagePizzaList.map(img => {
        img = 'photos/pizzas/' + img + '.jpg';
        return( 
					<div className="list-item">
						<img src={img} />
					</div>
				)
    	})}
    </div>
  );
}

export default PizzasPage;
