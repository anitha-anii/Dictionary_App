import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWordDetails, addToSearchHistory } from "../redux/action";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import './App.css'; 
import Textcolor from "./Textcolor";

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
    if (!word) {
      return (
        <div>
         <Textcolor/>
           </div>
      );
    }
  
     
    if (!wordDetails || !wordDetails[0]) {
      return <div className="displing"><h1>No details found for the word {word}</h1></div>;
    }
    return (
      <div className="displing">
        
       <h1>{word.toUpperCase()}</h1>
       
        <ul>
          {wordDetails[0].meanings.map((meaning, index) => (
            <li key={index}>
              <h2>{meaning.partOfSpeech}</h2>
              <p>{meaning.definitions[0]?.definition || "N/A"}</p>
            </li>
          ))}
        </ul>
        {wordDetails[0].phonetics.map((phonetic, idx) => (
          <React.Fragment key={idx}>
            {phonetic.audio && (
              <audio controls>
               <source src={phonetic.audio} type="audio/mp3" />
              </audio>
            )}
          </React.Fragment>
        ))}
           
      </div>
    );
  };

  return (
     <>
      <div className="homepage">
        <input
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
            {isLoading && <Loader />}
      {renderWordDetails()}
      {wordDetails && <Link to={`/word/${word}`}></Link>}
      </>
  );
};

export default HomePage;
