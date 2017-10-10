import React,{Component} from 'react';
import {connect} from 'react-redux';
import {updateData} from '../actions/index';

class UserUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      id:this.props.profile.id,
      first:this.props.profile.first,
      last:this.props.profile.last,
      age:this.props.profile.age,
      description:this.props.profile.description
    }

    this.updateData = this.updateData.bind(this);
    //this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    if(nextProps.profile.first !== this.props.first) {
      this.setState({
        id: nextProps.profile.id,
        first: nextProps.profile.first,
        last: nextProps.profile.last,
        age: nextProps.profile.age,
        description: nextProps.profile.description
      });
    }
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  updateData(event){
    this.props.clearForm(this.state.activeUser);
    let {users} = this.props;
    let user = this.state.users.filter((user, index) => {
      if (user.id === parseInt(this.state.id)){
        user.first = this.state.first;
        user.last = this.state.last;
        user.age = this.state.age;
        user.description = this.state.description;
      }
      return {user};
    });
    users = user;
    /*this.setState({
      users : users
    })*/
    this.props.updateData(users);
  }

  render(){
    return(
      <div>
        First: <input type="text" name="first" value={this.state.first}  onChange={(event)=> {this.handleChange(event)}}/><br/><br/>
        Last: <input type="text" name="last" value={this.state.last} onChange={(event)=> {this.handleChange(event)}}/><br/><br/>
        Age: <input type="text" name="age" value={this.state.age} onChange={(event)=> {this.handleChange(event)}}/><br/><br/>
        Desc: <input type="text" name="description" value={this.state.description} onChange={(event)=> {this.handleChange(event)}}/><br/><br/>
        <input type="submit" name="Update" value="Update" onClick={this.updateData} key={this.props.profile.id}/><br/><br/>
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
  updateData:users => dispatch(updateData(users))
});

export default connect(mapStateToProps,matchDispatchToProps)(UserUpdate);
