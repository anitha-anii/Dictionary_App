export const fetchWordDetails = (word) => {
    
    return async (dispatch) => {
      try {
      
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
  
     
        dispatch({ type: 'FETCH_WORD_DETAILS', payload: data });
      } catch (error) {
        
        console.error(error);
      }
    };
  };

  
  export const addToSearchHistory = (word) => ({
    type: 'ADD_TO_SEARCH_HISTORY',
    payload: word,
  });