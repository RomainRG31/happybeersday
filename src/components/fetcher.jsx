const beers = [
  {
    id: "https://api.sampleapis.com/beers/ale",
    name: "ale",
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

export async function fetcher() {
  let beerType = fetch(`https://api.sampleapis.com/beers/${beers.name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  return beerType;
}
