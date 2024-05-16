import { useEffect, useState } from "react";

function useBeer() {
  const [beer, setBeer] = useState(0);

  const beers = [
    {
      id: "https://api.sampleapis.com/beers/ale",
      name: "Ale",
    },
    {
      id: "https://api.sampleapis.com/beers/stouts",
      name: "stouts",
    },
    {
      id: "https://api.sampleapis.com/beers/red-ale",
      name: "red-ale",
    },
  ];

  async function getBeer() {
    const beerType = fetch(`https://api.sampleapis.com/beers/ale`)
      .then((response) => response.json())
      .then((data) => {
        setBeer(data);
      });
  }

  useEffect(() => {
    getBeer();
  }, []);

  return beer;
}

export default useBeer;
