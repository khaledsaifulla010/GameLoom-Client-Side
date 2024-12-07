import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const DarkWhiteMode = () => {
  const [toggleButton, setToggleButton] = useState(false);

  const toggleMode = () => {
    if (toggleButton) {
      // Light mode
      document.body.style.background = "#ffffff";
      document.body.style.color = "#000000";
    } else {
      // Dark mode
      document.body.style.background = "#000000";
      document.body.style.color = "#ffffff";
    }
    setToggleButton(!toggleButton);
  };

  const buttonStyles = {
    color: "black",
    fontSize: "30px",
    fontWeight: "bolder",
  };

  return (
    <div>
      <button style={buttonStyles} onClick={toggleMode}>
        {toggleButton ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default DarkWhiteMode;
