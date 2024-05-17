import { Link } from "react-router-dom";
import "./QuestionCard.css";

function QuestionCard3() {
  return (
    <>
      <h1>HappyBeersDay</h1>
      <div className="question">
        <div className="question-card">
          <h2>question</h2>
          <ul>
            <li>
              reponse 1
              <input type="checkbox" />
            </li>
            <li>
              reponse 2
              <input type="checkbox" />
            </li>
            <li>
              reponse 3
              <input type="checkbox" />
            </li>
          </ul>
          <Link to={"/result"}>Valider</Link>
        </div>
      </div>
    </>
  );
}

export default QuestionCard3;
