import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import UserUpdate from '../containers/user-update';
import {connect} from 'react-redux';
require('../scss/style.scss');

const App = (profile) =>{

  console.log('APP', profile.profile);
  let postPreviews = false;
  let user = profile.profile.find((user, index) => {
    if (user.editing === true){
      postPreviews = true;
      return user.editing;
    }

  });

  if(user !== undefined && user){
    postPreviews =  user.editing;
  }

  return (<div>
    <div className="fLeft">

      { !postPreviews &&
        <div>
          <h2>New Profile:</h2>
          <UserUpdate profile={"New"}/>
        </div>
      }
      { postPreviews &&
        <div>
          <h2>Update Profile:</h2>
          <UserUpdate profile={user}/>
        </div>
      }
    </div>
    <div className="fRight">
    <h2>Username List:</h2>
    <UserList editing={false}/>
    <hr/>
    { !postPreviews &&
      <div>
      <h2>User Profile:</h2>
      <UserDetail />
      </div>
    }

    </div>

  </div>);
}
function  mapStateToProps(state){
  return {
    profile: state.users
  };
}

export default connect(mapStateToProps)(App);
