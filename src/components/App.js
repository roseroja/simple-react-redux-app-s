import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import UserUpdate from '../containers/user-update';
import {connect} from 'react-redux';
require('../scss/style.scss');

const App = (profile) =>{

  let postPreviews = false;
  let updateProfile;
  let user = profile.profile.filter((user, index) => {
    if (user.editing === true){
      return user;
    }
  });

  console.log('update Profile', user);
  if(user !=''){
    updateProfile = user[0];
    postPreviews =  updateProfile.editing;
  }

  return (<div>
    <h2>Username List:</h2>
    <UserList editing={false}/>
    <hr/>
    { !postPreviews &&
      <div>
      <h2>User Profile:</h2>
      <UserDetail />
      </div>
    }
    { postPreviews &&
      <div>
        <h2>Update Profile:</h2>
        <UserUpdate profile={updateProfile}/>
      </div>
    }


  </div>);
}
function  mapStateToProps(state){
  return {
    profile: state.users
  };
}

export default connect(mapStateToProps)(App);
