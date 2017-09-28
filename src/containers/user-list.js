import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser, editForm} from '../actions/index';

class UserList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      editing: this.props.editing,
      users: this.props.users,
      profile:{}
    }
    this.openEditForm = this.openEditForm.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if(this.state.editing !== this.props.editing) {
      this.setState({
        editing: this.props.editing
      });
    }
  }

  openEditForm(){
    let {profile} = this.props;

    console.log('Update Form');
    let user = this.state.users.filter((user, index) => {
      if (user.id === 2){
        user.editing = true;
        return user;
      }
    });
    profile = user[0];
    //this.setState({profile: profile});
    this.props.editForm(profile);
  }
  createListItems(){
    return this.props.users.map((user) => {
      return (
        <div key={user.id}>
        <div
          onClick={() => this.props.selectUser(user)}>
            {user.first} {user.last}
        </div>
        <div><button onClick={this.openEditForm} key={user.id}>Edit</button> | <button>Remove</button> </div>
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
    users: state.users,
    editing: state.editing
  };
}
/*function  matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser: selectUser}, dispatch)
}*/
const matchDispatchToProps = (dispatch) => ({
    //actions: bindActionCreators(actions, dispatch),
    selectUser:user => dispatch(selectUser(user)),
    editForm:user => dispatch(editForm(user)),
});

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
