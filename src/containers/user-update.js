import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserUpdate extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      user: this.props.profile
    }*/
    this.updateData = this.updateData.bind(this);
  }

  updateData(){
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
  render(){
    return(
      <div>
        First: <input type="text" name="first" defaultValue={this.props.profile.first}/><br/><br/>
        Last: <input type="text" name="last" defaultValue={this.props.profile.last}/><br/><br/>
        Age: <input type="text" name="age" defaultValue={this.props.profile.age}/><br/><br/>
        Desc: <input type="text" name="description" defaultValue={this.props.profile.description}/><br/><br/>
        <input type="submit" name="Update" defaultValue="Update" onClick={this.updateData} key={this.props.profile.id}/><br/><br/>
      </div>
    );
  }
}
function  mapStateToProps(state){
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserUpdate);
