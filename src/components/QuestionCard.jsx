import React from "react";
import { Link } from "react-router-dom";
import "./QuestionCard.css";
import { fetcher } from "./fetcher.jsx";
import { useState, useEffect } from "react";

function QuestionCard1() {
  const { beer } = fetcher();
  console.log(beer);

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
          <Link to={"/question2"}>Valider</Link>
        </div>
      </div>
    </>
  );
}

export default QuestionCard1;
