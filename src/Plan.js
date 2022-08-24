
import React, { Component } from 'react'

export default class Plan extends Component {
  state = {
    date2 : this.state
  }
  render() {
    return (
      <> 
            <h1></h1>
            <span>{this.props.dat}</span>
            <li className='shadow bg-success rounded-1 p-2 my-2 col-sm-9'><input type= "text" className='form-control' defaultValue = {this.props.value}  onChange = {this.change}/></li>
            <button className='btn btn-danger my-2 h-50 col-sm-2 offset-1' onClick={()=>{this.props.sendData(this.props.id)}}>X{this.props.id}</button>
     </>

    )
  }
}
export  class Plan1 extends Component {
  render() {
    return (
      <span></span>
    )
  }
}


