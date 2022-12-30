function BebidasPage() {
  const imagePizzaList = [
    "photos/bebidas/bebida-01.jpg", 
    "photos/bebidas/bebida-02.jpg", 
    "photos/bebidas/bebida-03.jpg",
    "photos/bebidas/bebida-04.jpg"
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

export default BebidasPage;
