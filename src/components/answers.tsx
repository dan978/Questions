import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const SAVE_ANSWER = gql`
  mutation CreateAnswer($text: String, $userID: ID!, $questionID: ID!) {
    CreateAnswer(
      input: { text: $text, userID: $userID, questionID: $questionID }
    ) {
      id
      userID
      questionID
    }
  }
`;

interface AnswersList {
  userID: string;
  text: string;
  questionID: string;
}

interface Answer {
  userID: string;
  text: string;
  questionID: string;
}

export function NewAnswerForm() {
  const [userID, setUserID] = useState("");
  const [text, setText] = useState("");
  const [questionID, setquestionID] = useState("");

  const [saveAnswer, { error, data }] = useMutation<
    { saveAnswer: AnswersList },
    { input: Answer }
  >(SAVE_ANSWER, {
    variables: { input: { userID, text, questionID } },
  });

  return (
    <div>
      <h3>Add an Answer</h3>
      {error ? <p>Oh no! {error.message}</p> : null}
      {data && data.saveAnswer ? <p>Saved!</p> : null}
      <form>
        <p>
          <label>Text</label>
          <input name="Question" onChange={(e) => setText(e.target.value)} />
        </p>
        <p>
          <label>UserID</label>
          <input
            type="text"
            name="UID"
            onChange={(e) => setUserID(e.target.value)}
          />
        </p>
        <p>
          <label>QuestionID</label>
          <input
            type="text"
            name="QID"
            onChange={(e) => setquestionID(e.target.value)}
          />
        </p>
        <button onClick={() => userID && text && questionID && saveAnswer()}>
          Add
        </button>
      </form>
    </div>
  );
}

export default NewAnswerForm;
