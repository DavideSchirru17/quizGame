import "./Quiz.scss";
import { Link } from "react-router-dom";

function Quiz() {
  return (
    <>
      <div id="quiz" className="container-earth">
        <div className="container-earth__box">
          <h1 className="container-earth__title">Earth Capitals Quiz</h1>
          <p className="container-earth__text">
            Test your knowledge of world capitals with our interactive Earth
            Capitals Quiz!
          </p>
          <Link to="/quiz">
            <button className="container-earth__play">PLAY</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Quiz;
