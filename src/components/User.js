import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";
class User extends Component {
  state ={
    isVisible:false
  }
  static defaultProps={
    name:"Bilgi yok",
    salary:"Bilgi yok",
    department:"Bilgi yok"
  }
  onClickEvent=(e)=>{

    this.setState({
      isVisible:!this.state.isVisible
    })

  }
  onDeleteUser=(dispatch,e)=>{
   const {id}=this.props
   //consumer dispatch
    dispatch({type:"DELETE_USER",payload:id})

  }


  render() {

    const {name,department,salary}=this.props
    const {isVisible}=this.state
    return (<UserConsumer>
      {
        value=>{
          const {dispatch}=value
          return (
            <div className='col-md-8 mb-4'>
              <div className='card'>
                <div className='card-header d-flex justify-content-between'onClick={this.onClickEvent.bind(this,34)}>
                  <h4 className='d-inline'  >{name}</h4>
                  <i onClick={this.onDeleteUser.bind(this,dispatch)} className='far fa-trash-alt' style={{cursor:"pointer"}}></i>
                </div>
               {
                  isVisible ? <div className='card-body'>
                  <p className='card-text' >Maaş :{salary}</p>
                  <p className='card-text'>Department :{department}</p>
                
                </div> : null
                }
              </div>
              
            </div>
          )  
        }
      }
    </UserConsumer>)
   
  }
}



User.propTypes={
  name:PropTypes.string.isRequired,
  salary:PropTypes.string.isRequired,
  department:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired
}
export default User