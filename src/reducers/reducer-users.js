import initialState from './initial-state';
export default function(state: users=initialState.users, action){
  switch(action.type){
    case "UPDATE_DATA":
      console.log('Called UPDATE_DATA form ', action.payload);
      return action.payload;
      break;
    case "SAVE_DATA":
      console.log('Called SAVE_DATA form ', action.payload);
      return [...state, action.payload];
      //return action.payload;
      break;
    case "EDIT_FORM":
      console.log('Called Edit form ', action.payload);
      return action.payload;
      break;
    case "CLEAR_FORM":
      console.log('Called clear form ', action.payload);
      return action.payload;
      break;
    case "REMOVE_DATA":
      console.log('Called UPDATE_DATA form ', action.payload);
      return action.payload;
      break;
      default:
      return state
  }
}
