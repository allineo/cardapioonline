function SucosPage() {

  const imageList = [
    "sucoles", 
    "sucoles2", 
    "sucoles", 
    "sucoles2"
  ]
  return (
    <div className="list">
      {imageList.map(img => {
        img = 'photos/sucos/' + img + '.jpg';
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
