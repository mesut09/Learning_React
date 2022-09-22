import React, { Component } from 'react'

const UserContext=React.createContext()
//Provider , Consumer

const reducer=(state,action)=>{
  switch(action.type){
    case "DELETE_USER":
      return{
        ...state,
        users: state.users.filter(user=>action.payload!==user.id)
      }
      default:
        return state

  }
}

export class UserProvider extends Component {
  state={
    users:[
      {
        id:1,
        name:"Mesut Bilge",
        salary:"5000",
        department:"bilişim"
      },
      {
        id:2,
        name:"Zeynep Bilge",
        salary:"6000",
        department:"Pazarlama"
      },
      {
        id:3,
        name:"Burak Bilge",
        salary:"7000",
        department:"Üretim"
      }
    ],
    dispatch:action=>{
      this.setState(state=>reducer(state,action))
    }
  }
  render() {
    return (
    <UserContext.Provider value={this.state}>
        {this.props.children}
    </UserContext.Provider>
    )
  }
}
const UserConsumer=UserContext.Consumer;
export default UserConsumer;

