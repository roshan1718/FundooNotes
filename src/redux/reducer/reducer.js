let defaultState = {
  Notes: [],
};

const reducer = (state = defaultState, action) => {
  console.log("action", action);
  switch (action.type) {
    case "CHANGE_NOTE":
      return {
        ...state,
        Notes: action.Notes,
      };
    case "CHANGE_DELETE_NOTE":
      return {
        ...state,
        Notes: action.DeleteNotes,
      };
    case "CHANGE_ARCHIVE_NOTE":
      return {
        ...state,
        Notes: action.Notes,
      };
    default:
      return {
        Notes: [],
      };
  }
};

export default reducer;
