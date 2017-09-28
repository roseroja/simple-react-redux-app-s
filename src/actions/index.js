export const selectUser = (user) => {
  console.log("You clicked on user:", user.first);
  return{
    type: "USER_SELECTED",
    payload: user
  }
};
export const editForm = (profile) => {
  console.log("You clicked on Edit Form:");
  console.log(profile);
  return{
    type: "EDIT_FORM",
    payload: profile
  }
};
