import { useEffect, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import ResultCard from "./components/ResultCard";
import "./App.css";
import "./reset.css";


function App() {
  useEffect(() => {
    fetchData();
  }, []);

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://beers-list.p.rapidapi.com/beers";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_MY_API_KEY,
        "X-RapidAPI-Host": "beers-list.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return <div className="container">
  <QuestionCard />
  {/* <ResultCard /> */}
</div>;
}

export default App;



