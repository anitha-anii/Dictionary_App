import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchWordDetails } from "../redux/action";
import Loader from "./Loader";
import './App.css';

const WordDetailsPage = () => {
  const { word } = useParams();
  const dispatch = useDispatch();
  const wordDetails = useSelector((state) => state.dictionary.wordDetails);
  const isLoading = useSelector((state) => state.dictionary.loading);

  useEffect(() => {
    dispatch(fetchWordDetails(word));
  }, [dispatch, word]); 

  const renderWordDetails = () => {
    if (isLoading) {
      return <Loader />;
    }

    if (!wordDetails || wordDetails.length === 0) {
      return <p>No details available for {word}</p>;
    }

    return (
      <div>
        <h1>{word}</h1>
        {wordDetails[0].phonetic && <p>{wordDetails[0].phonetic}</p>}
       
        {wordDetails[0].phonetics.map((phonetic, idx) => ( 
          <React.Fragment key={idx}>
           
            {phonetic.audio && (
              <audio controls>
               <source src={phonetic.audio} type="audio/mp3" />
              </audio>
            )}
          </React.Fragment>
        ))}
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
  }    

  return (
    <div>
      <div className="display">{renderWordDetails()}</div>
    </div>
  );
};

export default WordDetailsPage;
