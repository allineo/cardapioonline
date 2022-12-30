function CafePage() {
  const imageCafeList = [
    "photos/cafes/cafe-01.jpg", 
    "photos/cafes/cafe-02.jpg", 
    "photos/cafes/cafe-03.jpg",
    "photos/cafes/cafe-04.jpg"
  ]
  return (
    <div className="list">
      {imageCafeList.map(img => {
        return( 
					<div className="list-item">
						<img src={img} />
					</div>
				)
    	})}
    </div>
  );
}

export default CafePage;
