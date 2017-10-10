export const selectUser = (user) => {
  console.log("You clicked on user:", user.first);
  return{
    type: "USER_SELECTED",
    payload: user
  }
};
export const editForm = (user) => {
  console.log("You clicked on Edit Form:", user);
  return{
    type: "EDIT_FORM",
    payload: user
  }
};

export const clearForm = (profile) => {
  console.log("You clicked on Clear Form:");
  return{
    type: "CLEAR_FORM",
    payload: profile
  }
};

export const updateData = (users) => {
  console.log("You clicked on Clear Form:");
  return{
    type: "UPDATE_DATA",
    payload: users
  }
};
