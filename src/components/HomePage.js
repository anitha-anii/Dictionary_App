import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordDetails, addToSearchHistory } from "../redux/action";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [word, setWord] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.dictionary.loading);
  const wordDetails = useSelector((state) => state.dictionary.wordDetails);

  const handleSearch = () => {
    dispatch({ type: "SET_LOADING" });
    dispatch(fetchWordDetails(word));
    dispatch(addToSearchHistory(word));
  };

  const renderWordDetails = () => {
    if (!wordDetails) {
      return null;
    }

    return (
      <div className="displing">
        <h1>{word}</h1>
        <p>{wordDetails[0].phonetic}</p>
        <audio controls>
          {wordDetails.map((details, index) => (
            <source key={index} src={details.audio} type="audio/mpeg" />
          ))}
          Your browser does not support the audio element.
        </audio>

        <p>{wordDetails[0].phonetic}</p>
        <audio controls>
          {wordDetails.map((details, index) => (
            <source key={index} src={details.audio} type="audio/mpeg" />
          ))}
          Your browser does not support the audio element.
        </audio>

        <p>{wordDetails[0].phonetic}</p>
        <ul>
          {wordDetails[0].meanings.map((meaning, index) => (
            <li key={index}>
              <h2>{meaning.partOfSpeech}</h2>
              <p>{meaning.definitions[0]?.definition || "N/A"}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="homepage">
      <input
        type="text"
        placeholder="Enter a word"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {isLoading ? <Loader /> : null}

      {renderWordDetails()}

      {wordDetails && <Link to={`/word/${word}`}></Link>}
    </div>
  );
};

export default HomePage;
