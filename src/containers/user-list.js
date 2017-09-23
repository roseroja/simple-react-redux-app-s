import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index'


class UserList extends Component{

  updateForm(){
    console.log('Update Form');
  }
  createListItems(){
    return this.props.users.map((user) => {
      return (
        <div key={user.id}>
        <div
          onClick={() => this.props.selectUser(user)}>
            {user.first} {user.last}
        </div>
        <div><button onClick={this.updateForm.bind(this)}>Edit</button> | <button>Remove</button> </div>
        </div>
      );
    })
  }
  render(){
    return(
      <div>
        {this.createListItems()}
      </div>
    );
  }
}

function  mapStateToProps(state){
  return {
    users: state.users
  };
}
function  matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
