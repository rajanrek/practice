const initialState = {
  itemsDummy: [],
  textIndummy: '',
};

const dummyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {
        ...state,
        textIndummy: action.text,
      };
    case 'SET_ITEMS':
      return {
        ...state,
        itemsDummy: action.items,
      };
    default:
      return state;
  }
};

export default dummyReducer;
