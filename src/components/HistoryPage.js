import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { addToSearchHistory } from '../redux/action';

const HistoryPage = () => {
  const searchHistory = useSelector((state) => state.dictionary.history.searchHistory || []);

  
    const dispatch = useDispatch(); 

    const handleSearch = (searchWord) => {
            dispatch(addToSearchHistory(searchWord)); 
           
    }
    console.log(handleSearch);
    
  return (
    <div className='history'>  
      <h1>Search History</h1>
      <ul>
        {searchHistory.map((word, index) => (
          <li key={index}>
            <Link to={`/word/${word}`}>{word}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;




