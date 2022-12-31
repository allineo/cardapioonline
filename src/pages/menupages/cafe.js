

function CafePage() {
  
  const imageCafeList = [
    "cafe", 
    "cafe", 
    "cafe", 
    "cafe"
  ]
  return (
    <div className="list">
      {imageCafeList.map(img => {
        img = 'photos/cafes/' + img + '.jpg';
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
