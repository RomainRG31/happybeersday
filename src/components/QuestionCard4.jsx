import { Link } from "react-router-dom";
import "./QuestionCard.css";

function QuestionCard4() {
  return (
    <>
      <h1>HappyBeersDay</h1>
      <div className="question">
        <div className="question-card">
          <h2>Wich kind of food do you prefer?</h2>
          <ul>
            <li>
              Meat
              <input type="radio" name="question4" />
            </li>
            <li>
              Vegetables
              <input type="radio" name="question4" />
            </li>
            <li>
              Sugar snacks
              <input type="radio" name="question4" />
            </li>
          </ul>
          <Link to={"/question5"}>Valider</Link>
        </div>
      </div>
    </>
  );
}

export default QuestionCard4;
