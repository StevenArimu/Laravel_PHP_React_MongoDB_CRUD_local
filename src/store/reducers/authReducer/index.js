const initialState = {
  authenticated: false,
  curUser: {},
  users: [
    // {
    //   firstName: "John",
    //   lastName: "Doe",
    //   eMail: "JohnDoe@outlook.com",
    //   password: "this is a test project",
    //   location: "NewYork",
    // },
    // {
    //   firstName: "Anelica",
    //   lastName: "Ruth",
    //   eMail: "AnjelicaRuth@outlook.com",
    //   password: "this is a test project",
    //   location: "Mexico",
    // },
    // {
    //   firstName: "Jenna",
    //   lastName: "Martin",
    //   eMail: "JennaMartin@outlook.com",
    //   password: "this is a test project",
    //   location: "Russia",
    // },
    // {
    //   firstName: "Hoffman",
    //   lastName: "Navin",
    //   eMail: "HoffmanNavin@outlook.com",
    //   password: "this is a test project",
    //   location: "Brazil",
    // },
  ],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "DEL_USER":
      return {
        ...state,
        users: state.users.filter(
          (user, index) => user.eMail !== action.payload
        ),
      };
    case "SAVE_USER":
      return {
        ...state,
        users: state.users.map((user, index) =>
          index === action.payload.isEditing ? action.payload.saveData : user
        ),
      };

    default:
      return state;
  }
};

export default authReducer;
