

function CafePage() {
  
  const imageList = [
    "marmitacombo", 
    "sucoles2", 
    "pizza",
    "cafe"
  ]
  return (
    <div className="list">
      {imageList.map(img => {
        img = 'photos/combos/' + img + '.jpg';
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