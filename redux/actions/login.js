export const UPDATE_TEXT_LOGIN = 'UPDATE_TEXT_LOGIN';
export const SET_ITEMS_LOGIN = 'SET_ITEMS_LOGIN';

export const updateTextLogin = items => {
  return {
    type: UPDATE_TEXT_LOGIN,
    items,
  };
};

export const setItemsLogin = items => {
  return {
    type: SET_ITEMS_LOGIN,
    items,
  };
};
