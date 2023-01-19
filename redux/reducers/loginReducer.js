const initialState = {
  items: [],
  text: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ITEMS_LOGIN':
      return {
        ...state,
        items: action.items,
      };
    case 'UPDATE_TEXT_LOGIN':
      return {
        ...state,
        text: action.items,
      };
    default:
      return state;
  }
};

export default loginReducer;
