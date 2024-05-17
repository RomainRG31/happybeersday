import { Link } from "react-router-dom";
import "./QuestionCard.css";

function QuestionCard3() {
  return (
    <>
      <div className="question">
        <h1>HappyBeersDay</h1>
        <div className="question-card">
          <h2>How is the weather today?</h2>
          <ul>
            <li>
              Shinny
              <input type="radio" name="question3" />
            </li>
            <li>
              Cloudy
              <input type="radio" name="question3" />
            </li>
            <li>
              I will not open my windows today
              <input type="radio" name="question3" />
            </li>
          </ul>
          <Link to={"/question4"}>Next</Link>
        </div>
      </div>
    </>
  );
}

export default QuestionCard3;
