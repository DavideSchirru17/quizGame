import { useRef } from "react";
import "./StartUser.scss";

function StartUser({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    if (inputRef.current.value) {
      setUsername(inputRef.current.value);
    }
  };

  return (
    <div className="startUser">
      <div className="startUser__box">
        <input
          placeholder="Enter your name"
          className="startInput"
          ref={inputRef}
        />
        <button className="startButton" onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  );
}

export default StartUser;
