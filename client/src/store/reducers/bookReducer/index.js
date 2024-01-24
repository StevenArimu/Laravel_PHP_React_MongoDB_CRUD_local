const initialState = {
  lists: [],
  editingBook: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case "SET_BOOKS":
      return {
        ...state,
        lists: action.payload,
      };
    case "EDIT_BOOK":
      return {
        ...state,
        editingBook: action.payload,
      };
    case "UPDATE_BOOK":
      return {
        ...state,
        lists: state.lists.map((list, index) =>
          list._id === action.payload._id ? action.payload : list
        ),
        editingBook: null,
      };
    case "DELETE_BOOK":
      return {
        ...state,
        lists: state.lists.filter((list) => list._id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookReducer;
