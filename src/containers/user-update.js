import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserUpdate extends Component {
  render(){
    return(
      <div>
        <img src={this.props.user.thumbnail}/>
        <input type="text" name="first" value={this.props.user.first}/>
        <input type="text" name="last" value={this.props.user.last}/>
        <input type="text" name="age" value={this.props.user.age}/>
        <input type="text" name="description" value={this.props.user.description}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserUpdate);
