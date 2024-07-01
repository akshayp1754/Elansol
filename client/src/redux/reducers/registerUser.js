const initialState = [];

const userReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case "User":
      return payload;
    default:
      return state;
  }
 
};

export default userReducer;
