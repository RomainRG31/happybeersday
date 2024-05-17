import { Link } from "react-router-dom";
import "./QuestionCard.css";

function QuestionCard5() {
  return (
    <>
      <div className="question">
        <h1>HappyBeersDay</h1>
        <div className="question-card">
          <h2>Wich pill would you chose ?</h2>
          <ul>
            <li>
              Red pill
              <input type="radio" name="question5" />
            </li>
            <li>
              Blue pill
              <input type="radio" name="question5" />
            </li>
            <li>
              Gambas pil pil
              <input type="radio" name="question5" />
            </li>
          </ul>
          <Link to={"/question6"}>Next</Link>
        </div>
      </div>
    </>
  );
}

export default QuestionCard5;
