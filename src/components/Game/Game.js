import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState, useMemo } from "react";
import Questions from "../Questions/Questions";
import Timer from "../Timer/Timer";
import useSound from "use-sound";
import correct from "../../assets/sound/correct.mp3";
import wrong from "../../assets/sound/wrong.mp3";
import play from "../../assets/sound/play.mp3";
import StartUser from "../StartUser/StartUser";

import "./Game.scss";

function Game() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("£0");
  const [username, setUsername] = useState(null);

  const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  const data = useMemo(
    () => [
      {
        id: 1,
        question: "What is the capital of Italy?",
        answers: [
          { text: "Rome", correct: true },
          { text: "Milan", correct: false },
          { text: "Venice", correct: false },
        ],
      },
      {
        id: 2,
        question: "What is the capital of France?",
        answers: [
          { text: "Paris", correct: true },
          { text: "Marseille", correct: false },
          { text: "Lyon", correct: false },
        ],
      },
      {
        id: 3,
        question: "What is the capital of Germany?",
        answers: [
          { text: "Berlin", correct: true },
          { text: "Munich", correct: false },
          { text: "Frankfurt", correct: false },
        ],
      },
      {
        id: 4,
        question: "What is the capital of Spain?",
        answers: [
          { text: "Madrid", correct: true },
          { text: "Barcelona", correct: false },
          { text: "Valencia", correct: false },
        ],
      },
      {
        id: 5,
        question: "What is the capital of Japan?",
        answers: [
          { text: "Tokyo", correct: true },
          { text: "Osaka", correct: false },
          { text: "Kyoto", correct: false },
        ],
      },
    ],
    []
  );

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "£1000" },
        { id: 2, amount: "£20000" },
        { id: 3, amount: "£300000" },
        { id: 4, amount: "£4000000" },
        { id: 5, amount: "£50000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    if (questionNumber > 1) {
      const earnedAmount = moneyPyramid.find(
        (m) => m.id === questionNumber - 1
      ).amount;
      setEarned(earnedAmount);
    }
  }, [moneyPyramid, questionNumber]);

  return (
    <section className="game">
      <div className="game__header">
        <nav className="game__nav-bar">
          <Link to="/">
            <div className="game__arrow-exit">
              <IoMdArrowRoundBack
                className="game__exit"
                color="white"
                size="2rem"
              />
            </div>
          </Link>
          <h1 className="game__title">EXIT FROM THE GAME</h1>
        </nav>
      </div>
      <div className="wrapper-game">
        {username ? (
          <>
            <section className="playTheGame">
              {stop ? (
                <h1 className="endText">You earned: {earned}</h1>
              ) : (
                <>
                  <div className="playTheGame__top">
                    <div className="playTheGame__timer">
                      <Timer
                        setStop={setStop}
                        questionNumber={questionNumber}
                      />
                    </div>
                  </div>
                  <div className="playTheGame__bottom">
                    <Questions
                      data={data}
                      setStop={setStop}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      correctAnswer={correctAnswer}
                      wrongAnswer={wrongAnswer}
                    />
                  </div>
                </>
              )}
            </section>
            <section className="pyramids">
              <h1 className="pyramids__title">Money</h1>
              <ul className="pyramids__money-list">
                {moneyPyramid.map((m) => (
                  <li
                    key={m.id}
                    className={`pyramids__moneyListItem ${
                      questionNumber === m.id ? "active" : ""
                    }`}>
                    <span className="pyramids__moneyListItemNumber">
                      {m.id}
                    </span>
                    <span className="pyramids__moneyListItemAmount">
                      {m.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </>
        ) : (
          <StartUser setUsername={setUsername} />
        )}
      </div>
    </section>
  );
}

export default Game;
