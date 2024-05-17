import { Link } from "react-router-dom";
import "./QuestionCard.css";

function QuestionCard2() {
  return (
    <>
      <div className="question">
        <h1>HappyBeersDay</h1>
        <div className="question-card">
          <h2>What is your profession?</h2>
          <ul>
            <li>
              Office job
              <input type="radio" name="question2" />
            </li>
            <li>
              Field job
              <input type="radio" name="question2" />
            </li>
            <li>
              AAUGH AAUGH AAUGH!
              <input type="radio" name="question2" />
            </li>
          </ul>
          <Link to={"/question3"}>Next</Link>
        </div>
      </div>
    </>
  );
}

export default QuestionCard2;
