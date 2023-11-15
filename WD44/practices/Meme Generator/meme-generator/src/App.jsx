import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [meme, setMeme] = useState([]);
  const [index, setIndex] = useState(0);
  const [above, setAbove] = useState("");
  const [below, setBelow] = useState("");

  useEffect(() => {
    fetchMeme();
  }, []);

  const fetchMeme = async () => {
    try {
      const response = await axios.get("https://api.imgflip.com/get_memes");
      /* console.log(response.data.data.memes); */
      setMeme(response.data.data.memes);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePrev = () => {
    setIndex((handler) => handler - 1);
  };
  const handleNext = () => {
    setIndex((handler) => handler + 1);
  };

  return (
    <div className="container">
      <div className="input-area">
        <button disabled={index < 0} onClick={handlePrev}>
          Prev
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
      <form className="forms">
        <input
          type="text"
          placeholder="above"
          onChange={(e) => {
            setAbove(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="below "
          onChange={(e) => {
            setBelow(e.target.value);
          }}
        />
      </form>
      {meme.length > 0 && (
        <div className="App">
          <h3>{meme[index]?.name}</h3>
          <h2>{above}</h2>
          <img
            src={meme[index]?.url}
            height={meme[index]?.height}
            width={meme[index]?.width}
          />
          <h2>{below}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
