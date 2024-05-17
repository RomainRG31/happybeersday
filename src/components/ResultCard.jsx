import { useEffect, useState } from "react";
import "./ResultCard.css";
import { Link } from "react-router-dom";

function ResultCard() {
  const [beer, setBeer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    const fetchBeer = async () => {
      try {
        const response = await fetch("https://api.sampleapis.com/beers/ale");
        const beers = await response.json();
        console.log(beers);
        if (beers.length > 0) {
          const randomBeer = beers[Math.floor(Math.random() * beers.length)];
          setBeer(randomBeer);
        }
        setLoading(false);
      } catch (e) {
        setError("Failed to fetch beer");
        setLoading(false);
      }
    };

    fetchBeer();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!beer) {
    return <p>No beer found</p>;
  }

  return (
    <div className="result">
      <Link to={"/"}>
        <h1>HappyBeersDay</h1>
      </Link>
      <div className="result-card">
        {beer.image && (
          <img
            src={beer.image}
            alt={beer.name}
            onLoad={() => setImageLoading(false)}
            style={{ display: imageLoading ? "none" : "block" }}
          />
        )}
        {imageLoading && <p>Loading image...</p>}
        <div className="description">
          <h1>Your beer</h1>
          <p>{beer.name}</p>
          <p>{beer.price}</p>
          <p>Reviews :</p>
          <p>{beer.rating.reviews}</p>
          <p>Average :</p>
          <p>{Math.round(beer.rating.average)} / 5</p>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
