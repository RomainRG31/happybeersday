import { Link } from "react-router-dom";
import "./QuestionCard.css";
function QuestionCard1() {
  return (
    <>
      <div className="question">
        <h1>HappyBeersDay</h1>
        <div className="question-card">
          <h2>How do you feel today?</h2>
          <ul>
            <li>
              Happy like a beer
              <input type="radio" name="question" />
            </li>
            <li>
              Sad like a alcohol free beer
              <input type="radio" name="question" />
            </li>
            <li>
              I feel lost like a peanuts without beer
              <input type="radio" name="question" />
            </li>
          </ul>
          <Link to={"/question2"}>Next</Link>
        </div>
      </div>
    </>
  );
}

export default QuestionCard1;
