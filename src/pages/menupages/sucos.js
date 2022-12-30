function SucosPage() {
  const imagePizzaList = [
    "photos/sucos/suco-01.jpg", 
    "photos/sucos/suco-02.jpg", 
    "photos/sucos/suco-03.jpg",
    "photos/sucos/suco-04.jpg"
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

export default SucosPage;
