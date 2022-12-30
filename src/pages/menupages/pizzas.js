import '../../assets/css/list.css';

function PizzasPage() {
  const imagePizzaList = [
    "photos/pizzas/pizza-01.jpg", 
    "photos/pizzas/pizza-02.jpg", 
    "photos/pizzas/pizza-03.jpg",
    "photos/pizzas/pizza-04.jpg"
  ]
  return (
    <div className="list">
      {imagePizzaList.map(img => {
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
