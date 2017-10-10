import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import UserUpdate from '../containers/user-update';
import {connect} from 'react-redux';
require('../scss/style.scss');

const App = (profile) =>{

  let postPreviews = false;
  console.log('update Profile', profile.profile);
  if(profile.profile){
    postPreviews =  profile.profile.editing;
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
        <UserUpdate profile={profile.profile}/>
      </div>
    }


  </div>);
}
function  mapStateToProps(state){
  return {
    profile: state.activeUser
  };
}

export default connect(mapStateToProps)(App);
