export default function(state=null, action){
  switch(action.type){
    case "EDIT_FORM":
      console.log('Called Edit form ', action.payload);
      return action.payload;
      break;
    case "CLEAR_FORM":
      console.log('Called clear form ', action.payload);
      return action.payload;
      break;
  }
  return state;
}
