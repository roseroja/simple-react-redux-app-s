export const selectUser = (user) => {
  console.log("You clicked on user:", user.first);
  return{
    type: "USER_SELECTED",
    payload: user
  }
};
export const editForm = (profile) => {
  console.log("You clicked on Edit Form:");
  return{
    type: "EDIT_FORM",
    payload: profile
  }
};

export const clearForm = (profile) => {
  console.log("You clicked on Clear Form:");
  return{
    type: "CLEAR_FORM",
    payload: profile
  }
};
