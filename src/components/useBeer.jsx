import { useEffect, useState } from "react";

function useBeer() {
  const [beer, setBeer] = useState(0);

  const beers = [
    {
      url: "https://api.sampleapis.com/beers/ale",
      name: "ale",
    },
    {
      url: "https://api.sampleapis.com/beers/stouts",
      name: "stouts",
    },
    {
      url: "https://api.sampleapis.com/beers/red-ale",
      name: "red-ale",
    },
  ];

  const getBeer = async function fetcher() {
    let beerType = fetch(`https://api.sampleapis.com/beers/ale`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    setBeer(beerType);
    return beerType;
  };

  useEffect(() => {
    getBeer();
  }, []);

  return beer;
}

export default useBeer;
