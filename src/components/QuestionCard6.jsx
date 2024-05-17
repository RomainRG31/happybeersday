import { Link } from "react-router-dom";
import "./QuestionCard.css";

function QuestionCard6() {
  return (
    <>
      <div className="question">
        <h1>HappyBeersDay</h1>
        <div className="question-card">
          <h2>Will you drive today?</h2>
          <ul>
            <li>
              No
              <input type="radio" />
            </li>
            <li>
              I google drive
              <input type="radio" />
            </li>
            <li>
              Seriously don&apos;t drink and drive
              <input type="radio" />
            </li>
          </ul>
          <Link to={"/result"}>See the result!</Link>
        </div>
      </div>
    </>
  );
}

export default QuestionCard6;
