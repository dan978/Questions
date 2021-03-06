import React from "react";
import Question from "../components/question";
import { ChangeEvent, useState } from "react";
import Score from "../components/score";
import { useMutation, gql } from "@apollo/client";
import "../Index.css";
import NewAnswerForm from "../components/answers";

function HomePage() {
  type HandleInputChange = ChangeEvent<HTMLSelectElement>;
  const [opt, setOpt] = useState<string>("");
  const handleInputChange = ({ target: { value } }: HandleInputChange) =>
    setOpt(value);
  const [opt1, setOpt1] = useState<string>("");
  const handleInputChange1 = ({ target: { value } }: HandleInputChange) =>
    setOpt1(value);
  const [opt2, setOpt2] = useState<string>("");
  const handleInputChange2 = ({ target: { value } }: HandleInputChange) =>
    setOpt2(value);
  const questionValue = questions.map((question) => {
    return question.weight;
  });
  let counter: number =
    +opt +
    +opt1 +
    +opt2 +
    questionValue[0] +
    questionValue[1] +
    questionValue[2];

  const SAVE_ROCKET = gql`
    mutation saveRocket($rocket: RocketInput!) {
      saveRocket(rocket: $rocket) {
        model
      }
    }
  `;

  return (
    <div id="root" className="card text-white bg-secondary mb-3">
      <p>
        {questions.map((question) => (
          <Question
            key={question.id}
            text={question.text}
            weight={question.weight}
          />
        ))}
      </p>
      <span>
        <select
          className="form-select"
          id="exampleSelect1"
          value={opt}
          onChange={handleInputChange}
        >
          {questions[0].options.map((option) => (
            <>
              <option value={option.weight} title={option.text}>
                {option.text}
              </option>
            </>
          ))}
        </select>
      </span>
      <span>
        <select
          className="form-select"
          id="exampleSelect1"
          value={opt1}
          onChange={handleInputChange1}
        >
          {questions[1].options.map((option) => (
            <>
              <option value={option.weight} title={option.text}>
                {option.text}
              </option>
            </>
          ))}
        </select>
      </span>
      <span>
        <select
          className="form-select"
          id="exampleSelect1"
          value={opt2}
          onChange={handleInputChange2}
        >
          {questions[2].options.map((option) => (
            <>
              <option value={option.weight} title={option.text}>
                {option.text}
              </option>
            </>
          ))}
        </select>
      </span>
      {(opt.length && opt1.length && opt2.length && (
        <p>
          Puntuaci??n:<Score counters={counter}>{counter}</Score>
        </p>
      )) ||
        counter === 0}
      <NewAnswerForm></NewAnswerForm>
    </div>
  );
}
export default HomePage;

const questions = [
  {
    id: 100,
    text: "??Como va?",
    options: [
      {
        id: 200,
        text: "Bien",
        weight: 1,
      },
      {
        id: 201,
        text: "Mal",
        weight: 0.5,
      },
    ],
    weight: 5,
  },
  {
    id: 101,
    text: "??Valora la experiencia?",
    options: [
      {
        id: 200,
        text: "Mala",
        weight: 0.5,
      },
      {
        id: 201,
        text: "Buena",
        weight: 1,
      },
    ],
    weight: 5,
  },
  {
    id: 102,
    text: "??Repetirias?",
    options: [
      {
        id: 202,
        text: "S??",
        weight: 1,
      },
      {
        id: 203,
        text: "No",
        weight: 0,
      },
    ],
    weight: 10,
  },
];
