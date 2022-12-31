
function BebidasPage() {

  const imageList = [
    "vinhos", 
    "agua",
    "heineken",
    "brahma",
    "cocacola", 
    "guarana"
  ]
  
  return (
    <div className="list">
      {imageList.map(img => {
        img = 'photos/bebidas/' + img + '.jpg';
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