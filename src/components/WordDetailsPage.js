import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchWordDetails } from "../redux/action";
import Loader from "./Loader";

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

    const { audio, phonetic, meanings } = wordDetails[0];

    return (
      <div>
        <h1>{word}</h1>
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
    <div>
      <div className="display">{renderWordDetails()}</div>
    </div>
  );
};

export default WordDetailsPage;

