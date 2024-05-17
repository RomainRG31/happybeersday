import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import QuestionCard from "./components/QuestionCard";
// import ResultCard from "./components/ResultCard";
import "./App.css";
import "./reset.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://api.sampleapis.com/beers/ale";
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <header>
        <h1>Welcome to Happy Beers Day!</h1>
      </header>
      <main>
        <div className="content-deco">
          <div className="content">
            <section className="intro">
              <h2>How to get a beer that suits your mood?</h2>
              <p>
                Our goal is to recommend a beer suited to your needs from all
                over the world and without any fuss, quickly to delight you.
              </p>
            </section>
            <section className="quiz-intro">
              <h3>
                The quiz below will help you determine the best beer for your
                mood:
              </h3>
              <Link to="/question1" className="start-button">
                Get started!
              </Link>
            </section>
          </div>
          <div className="decoration">
            <img
              id="logo"
              src="./src/assets/img/logo-happy.png"
              alt="Logo of Happy Beers Day"
            />
            <img
              id="beer"
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzY2eXFqOXlpcWk5YmhtaWExdHU2MHhlaTNrZmtqOHVoYTBibG81eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUA7bijsxNm6iMh39e/giphy.gif"
              alt="Animated beer illustration"
            />
          </div>
        </div>
      </main>
      {/* <ResultCard /> */}
    </div>
  );
}

export default App;
