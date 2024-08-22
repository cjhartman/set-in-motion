const sideDrawerReducer = (state = false, action: { type: string }) => {
  switch (action.type) {
    case "OPEN_SIDE_DRAWER":
      return true;
    case "CLOSE_SIDE_DRAWER":
      return false;
    default:
      return state;
  }
};

export default sideDrawerReducer;
