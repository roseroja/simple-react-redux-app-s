import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

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
    console.log('componentWillReceiveProps-nextProps', nextProps);
    if(this.state.editing !== this.props.editing) {
      this.setState({
        users: this.props.users,
        editing: "false"
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate-nextProps', nextProps);
    console.log('shouldComponentUpdate-nextState', nextState);
    let user = nextProps.users.filter((user, index) => {
      user.editing = false;
      return user;
    });
    console.log('shouldComponentUpdate-user', user);
    return user;
  }
  openEditForm(event){
    this.props.actions.clearForm(this.state.activeUser);
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
    this.props.actions.editForm(profile);
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
    this.props.actions.removeData(user);
  }

  showDetail(user){
    //this.props.clearForm(this.state.activeUser);
    console.log('showDetail', user);
    this.props.actions.selectUser(user);
  }
  createListItems(){
    return this.props.users.map((user) => {
      return (
        <div key={user.id}>
        <div data-active-key={user.id}
          onClick={()=> {this.showDetail(user)}}>
            {user.first} {user.last}
        </div>
        <div><button  data-key={user.id} onClick={(event)=> {this.openEditForm(event)}} >Edit</button> | <button data-key={user.id} onClick={(event)=> {this.removeData(event)}}>Remove</button> </div>
        </div>
      );
    })
  }
  render(){
    this.state.users =  this.props.users;
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

const matchDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

/*const matchDispatchToProps = (dispatch) => ({
    selectUser:activeUser => dispatch(selectUser(activeUser)),
    editForm:user => dispatch(editForm(user)),
    clearForm:user => dispatch(clearForm(user)),
    removeData:user => dispatch(removeData(user)),
});*/

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
