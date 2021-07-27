import { useState } from "react";
import * as PropTypes from "prop-types";
import {questions} from '../utils/questions';
import '../styles/QuestionStyle.css';


type QuestionProps = {
  question: string;
  answer: string;
};

const Question = ( {question, answer } : QuestionProps ) => {
  const [hidden, toggleHidden] = useState(true);

  return (
    <article className="question">
      <header>{question}</header>
      <p className="answer">
        <span className={`${hidden ? 'blurred' : 'visible'}`}>{answer}</span>
      </p>
      <footer>
        <button onClick={() => toggleHidden(!hidden)}>Toggle Answer</button>
      </footer>
    </article>
  );
};

const Application = () => {
  return(
    <main>
      {questions.map((q) => (
        <Question question={q.question} answer={q.answer} key={q.id}/>
      ))}
    </main>
  )
}
export default Application;