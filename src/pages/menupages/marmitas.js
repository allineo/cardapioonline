function MarmitasPage() {
  const imageMarmitaList = [
    "photos/marmitas/marmita-01.jpg", 
    "photos/marmitas/marmita-02.jpg", 
    "photos/marmitas/marmita-03.jpg",
    "photos/marmitas/marmita-04.jpg"
  ]
  return (
    <div className="list">
      {imageMarmitaList.map(img => {
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
