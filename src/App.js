import { useState } from "react";
import "../src/index.css";

function App() {
  const [counter, setCounter] = useState(0);
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
  ];
  const music = new Audio("./assets/music.mp3");

  const handleNext = () => {
    if (counter < images.length - 1) {
      setCounter(counter + 1);
    }
  };

  const handleBack = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container">
      <img src={`./assets/${images[counter]}`} alt="RASM" className="image" />
      <div className="button-container">
        <button
          className={`button ${
            counter === images.length - 1 ? "highlight1" : ""
          }`}
          onClick={handleBack}
        >
          <i class="bi bi-arrow-bar-left"></i>
          BACK
        </button>
        <button
          className={`button ${
            counter === images.length - 1 ? "highlight" : ""
          }`}
          onClick={handleNext}
        >
          NEXT
          <i class="bi bi-arrow-bar-right"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
