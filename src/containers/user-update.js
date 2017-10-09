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
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  updateData(event){
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
    this.setState({
      users : users
    })
    this.props.updateData(users);
  }

  render(){
    return(
      <div>
        First: <input type="text" name="first" value={this.state.first} onChange={this.handleChange}/><br/><br/>
        Last: <input type="text" name="last" value={this.state.last} onChange={this.handleChange}/><br/><br/>
        Age: <input type="text" name="age" value={this.state.age} onChange={this.handleChange}/><br/><br/>
        Desc: <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/><br/><br/>
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
