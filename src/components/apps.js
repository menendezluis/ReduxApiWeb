import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showUsers } from '../actions';


 class App extends Component {

  componentWillMount(){
    this.props.showUsers()
  }
  renderUsersList() {
    return this.props.users.map((user) => {
      return(
        <label>
         <li class='lista' key={user.id}><img class='avatarimg' src='./assets/avatar.png' />
          <ul><li class='datoslist'>{user.name}</li><li class='datoslist'>{user.email} </li><li class='datoslist'>{user.phone} </li></ul>
          </li></label>
         
      )
    })
  }
  render() {
    return (
      <div class='content'>
         <ul>
          
          { this.renderUsersList() }
          </ul>
          </div>
    );
  }
}

function mapStateToProps(state){
  return{
    users: state.user.list
  }
}
export default connect(mapStateToProps, {showUsers})(App)
