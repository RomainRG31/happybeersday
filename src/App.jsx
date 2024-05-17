import { Link } from "react-router-dom";
// import QuestionCard from "./components/QuestionCard";
// import ResultCard from "./components/ResultCard";
import "./App.css";
import "./reset.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Happy Beers Day!</h1>
      </header>
      <main>
        <div className="content-deco">
          <div className="content">
            <h2 className="h2">Get the beer that suits you!</h2>
            <p>
              Our goal is to recommend a beer suited to your needs from all over
              the world and without any fuss, quickly to delight you.
            </p>
            <h3>
              The quiz below will help you determine the best beer for your
              mood:
            </h3>
            <Link to="/question1" className="start-button">
              Get started!
            </Link>
          </div>
          <div className="decoration">
            <img
              id="logo"
              src="/logo-happy.png"
              alt="Logo of Happy Beers Day"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
