const initialState = {
  wordDetails: null,
  loading: false,
  history: {
    searchHistory: [],
  },
};

const dictionaryReducer = (state = initialState, action) => {


  switch (action.type) {
    case 'FETCH_WORD_DETAILS':
      return {
        ...state,
        wordDetails: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
      case 'ADD_TO_SEARCH_HISTORY':
         return {
          ...state,
          history: {
            ...state.history,
            searchHistory: [...state.history.searchHistory, action.payload],
          },
        };

    default:
      return state;
  }
};

export default dictionaryReducer;
