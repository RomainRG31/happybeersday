import { Link } from "react-router-dom";
import "./QuestionCard.css";
function QuestionCard1() {
  return (
    <>
      <h1>HappyBeersDay</h1>
      <div className="question">
        <div className="question-card">
          <h2>Question</h2>
          <ul>
            <li>
              rep1
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
          <Link to={"/question2"}>Valider</Link>
        </div>
      </div>
    </>
  );
}

export default QuestionCard1;
