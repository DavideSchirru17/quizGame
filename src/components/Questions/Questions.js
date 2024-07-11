import { useEffect, useState } from "react";
import "./Questions.scss";

function Questions({
  data,
  setStop,
  questionNumber,
  setQuestionNumber,
  correctAnswer,
  wrongAnswer,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(5000, () =>
      setClassName(a.correct ? "answer correct" : "answer wrong")
    );
    delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        setQuestionNumber((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        wrongAnswer();
        setStop(true);
      }
    });
  };

  return (
    <>
      <div className="questions">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            key={a.text} // Ensure each element has a unique key
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleClick(a)}>
            {a.text}
          </div>
        ))}
      </div>
    </>
  );
}

export default Questions;
