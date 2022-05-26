function MatchBox({ wine }) {

  return (
      <div className="wine-box">
     <div className="wine-box-image">
         <img className="wine-image" src={wine.imageUrl} alt="pacific wine bottle" />
    </div> 
    <div className="wine-box-text">
        <div className="wine-box-info">
        <h4>{wine.producer}</h4>
        <h4>{wine.name}</h4>
        </div>
        <div className="wine-box-desc">
        <p>{wine.description}</p>
        <p><strong>{wine.price}</strong></p>
        </div>
        <div className="wine-box-link">
            <a href={wine.url}>More Details</a>
        </div>
    </div>     
     </div>
  );
}

export default MatchBox;