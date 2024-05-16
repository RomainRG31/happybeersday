import "./App.css";
import "./reset.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Happy Beers Day!</h1>
      </header>
      <main>
        <div className="decoration">
          <img src="./src/assets/img/logo_hbd.png" alt="" />
        </div>
        <section className="intro">
          <h2>How to get a beer that suit your mood?</h2>

          <p>
            Our goal is to recommend a beer suited to your needs from all over
            the world and without any fuss, quickly to delight you.
          </p>
        </section>
        <section className="quiz-intro">
          <h3>
            The quiz below will help you determine the best beer for your mood:{" "}
          </h3>
          <button className="start-button">Get started !</button>
        </section>
      </main>
    </div>
  );
}

export default App;
