import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, editForm, clearForm} from '../actions/index';

class UserList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.editing,
      users: this.props.users,
      activeUser:{}
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
    let {profile, editing} = this.props;
    let usrId = event.target.getAttribute('data-key');
    console.log('Update Form ', usrId);
    let user = this.state.users.filter((user, index) => {
      if (user.id === parseInt(usrId)){
        user.editing = true;
        return user;
      }
    });
    profile = user[0];
    editing = true;
    //this.setState({profile: profile});
    this.props.editForm(profile);
  }

  showDetail(user){
    this.props.clearForm(this.state.activeUser);
    console.log('showDetail', user);
    this.props.selectUser(user);
  }
  createListItems(){
    return this.props.users.map((user) => {
      return (
        <div key={user.id}>
        <div
          onClick={() => {this.showDetail(user)}}>
            {user.first} {user.last}
        </div>
        <div><button  data-key={user.id} onClick={(event)=> {this.openEditForm(event)}} >Edit</button> | <button>Remove</button> </div>
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
});

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
