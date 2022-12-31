
function MarmitasPage() {

  const imageList = [
    "lasanha", 
    "feijoada", 
    "marmitafit",
    "escondecarneseca"
  ]
  return (
    <div className="list">
      {imageList.map(img => {
        img = 'photos/marmitas/' + img + '.jpg';
        return( 
					<div className="list-item">
						<img src={img} />
					</div>
				)
    	})}
    </div>
  );
}

export default MarmitasPage;
