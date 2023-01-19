export const UPDATE_TEXT = 'UPDATE_TEXT';
export const SET_ITEMS = 'SET_ITEMS';

export const updateText = text => {
  return {
    type: UPDATE_TEXT,
    text,
  };
};

export const setItems = items => {
  return {
    type: SET_ITEMS,
    items,
  };
};
