import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.profile
    }
    //this.openEditForm = this.openEditForm.bind(this);
  }
  render(){
    console.log(this.props.profile);
    return(
      <div>
        <img src={this.state.user.thumbnail}/>
        <input type="text" name="first" value={this.state.user.first}/>
        <input type="text" name="last" value={this.state.user.last}/>
        <input type="text" name="age" value={this.state.user.age}/>
        <input type="text" name="description" value={this.state.user.description}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.AllForm
  };
}

export default connect(mapStateToProps)(UserUpdate);
