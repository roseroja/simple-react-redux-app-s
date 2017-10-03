import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import UserUpdate from '../containers/user-update';
import {connect} from 'react-redux';
require('../scss/style.scss');

const App = (profile) =>{

  let postPreviews = false;

  if(profile.profile){
    postPreviews =  profile.profile.editing;
  }

  return (<div>
    <h2>Username List:</h2>
    <UserList editing={false}/>
    <hr/>
    { postPreviews &&
      <div>
        <h2>Username Details:</h2>
        <UserUpdate profile={profile.profile}/>
      </div>
    }
    { !postPreviews &&
      <div>
      <h2>Username Details:</h2>
      <UserDetail />
      </div>
    }

  </div>);
}
function  mapStateToProps(state){
  return {
    profile: state.allForm
  };
}

export default connect(mapStateToProps)(App);
