import React,{Component} from 'react';
import {connect} from 'react-redux';
import {updateData} from '../actions/index';

class UserUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      user:{},
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
    if(nextProps.profile.first !== this.props.profile.first) {
      this.setState({
        id: nextProps.profile.id,
        first: this.props.profile.first,
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
    let {users} = this.props;
    let user = this.state.users.filter((user, index) => {
      if (user.id === parseInt(this.state.id)){
        user.first = this.state.first;
        user.last = this.state.last;
        user.age = this.state.age;
        user.description = this.state.description;
        user.editing = false;
      }
      return user;
    });
    users = user;
    this.props.updateData(users);
  }

  saveData(event){
    let previousUser = this.state.users;
    let { user } = this.state.user;
    //console.log("new user add", previousUser);
    this.setState({
        users:{
          ...previousUser,
          user:{
            id:4,
            first : this.state.first,
            last: this.state.last,
            age : this.state.age,
            description : this.state.description,
            editing : false
          }
        }
    });
    console.log("new user add", previousUser);
  }

  render(){
    let isFormNew = false;
    let button = null;
    if(this.props.profile == 'New'){
      isFormNew = true;
    }
    if (isFormNew) {
      button = <div><input type="submit" name="New" value="New" onClick={(event)=> {this.saveData(event)}} /><br/><br/></div>
    } else {
      button = <div><input type="submit" name="Update" value="Update" onClick={(event)=> {this.updateData(event)}} key={this.props.profile.id}/><br/><br/></div>
    }
    return(

        <div>
          First: <input type="text" name="first" value={this.state.first}  onChange={(event)=> {this.handleChange(event)}}/><br/><br/>
          Last: <input type="text" name="last" value={this.state.last} onChange={(event)=> {this.handleChange(event)}}/><br/><br/>
          Age: <input type="text" name="age" value={this.state.age} onChange={(event)=> {this.handleChange(event)}}/><br/><br/>
          Desc: <input type="text" name="description" value={this.state.description} onChange={(event)=> {this.handleChange(event)}}/><br/><br/>
          {button}
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
