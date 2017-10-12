import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, editForm, clearForm, removeData} from '../actions/index';

class UserList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.editing,
      users: this.props.users,
      activeUser:{},
      user:{}
    }
    this.openEditForm = this.openEditForm.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.state.editing, nextProps);
    if(this.state.editing !== this.props.editing) {
      this.setState({
        editing: this.props.editing
      });
    }
  }

  openEditForm(event){
    this.props.clearForm(this.state.activeUser);
    let {profile} = this.props;
    let usrId = event.target.getAttribute('data-key');
    console.log('Update Form ', usrId);
    let user = this.state.users.filter((user, index) => {
      user.editing = false;
      if (user.id === parseInt(usrId)){
        user.editing = true;
      }
      return user;
    });
    profile = user;
    this.props.editForm(profile);
  }

  removeData(event){
    let usrId = event.target.getAttribute('data-key');
    console.log('Remove Data ID', usrId);
    let user = this.state.users.filter((user, index) => {
      if (user.id === parseInt(usrId)){
        user = '';
      }
      return user;
    });
    this.setState({users: user});
    console.log('Remove Data', user);
    this.props.removeData(user);
  }

  showDetail(user){
    this.props.clearForm(this.state.activeUser);
    console.log('showDetail', user);
    this.props.selectUser(user);
  }
  createListItems(){
    return this.state.users.map((user) => {
      return (
        <div key={user.id}>
        <div
          onClick={() => {this.showDetail(user)}}>
            {user.first} {user.last}
        </div>
        <div><button  data-key={user.id} onClick={(event)=> {this.openEditForm(event)}} >Edit</button> | <button data-key={user.id} onClick={(event)=> {this.removeData(event)}}>Remove</button> </div>
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

const matchDispatchToProps = (dispatch) => ({
    //actions: bindActionCreators(actions, dispatch),
    selectUser:user => dispatch(selectUser(user)),
    editForm:user => dispatch(editForm(user)),
    clearForm:user => dispatch(clearForm(user)),
    removeData:user => dispatch(removeData(user)),
});

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
