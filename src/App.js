import React, { Component } from 'react'
import Plan from './Plan'
import Set from "./Set"

export default class App extends Component {
  state = {
    items : [],
    text : "",
    date : [],
    date1 : ""
  }
  handleChange = (e)=>{
    this.setState({text:e.target.value});
    
  }
  handleAdd = ()=>{
      if(this.state.text !== "")
      {
        let currentdate = new Date();
        let datetime = currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
        console.log(datetime);

        const items = [...this.state.items, this.state.text]
        
        this.setState({items: items, text  : "", date : datetime})
        // console.log("Date And Time = "+ this.state.date)

      }
  }
  handleDelete = (id) =>{
    console.log("deleted", id);
    //remove that id and update
    const Olditems = [...this.state.items];
    // console.log("Old Items", Olditems);
    const items = Olditems.filter((element, i) =>{
      return i !== id
    })
    this.setState({items:items});
  }

  dataChange = (e)=>{
           console.log("clicked");
           this.setState({text : e.target.value});
          //  console.log(e.target.value);
  }
  render() {
    return (
      <div className='container-fluid my-5'>
             <div className='row'>
                <div className='col-8 mx-auto  text-white shadow-lg p-3'>
                      <h2 className='text-center'>Today's Plan</h2>

                      <div className="row">
                          <div className='col-md-9'>
                              <input type= "text" className = "form-control" placeholder = "Write Plan Here" value={this.state.text} onChange = {this.handleChange}/>
                          </div>

                          <div className="col-3 mx-auto px-2">
                               <button className='btn btn-warning px-lg-5 px-md-4 fw-bold' onClick={this.handleAdd}>Add</button>
                          </div>

                          <div className="container-fluid my-2">
                                <ul className='list-inline  row m-5'>
                                      {
                                        this.state.items.map((value, i)=>{
                                             console.log(i,value);
                                             return <Plan key = {i} id = {i} value = {value} dat = {this.state.date} sendData = {this.handleDelete} change = {this.dataChange}/>
                                        })
                                      }
                                     {/* {console.log(this.state.items)} */}
                                </ul>
                          </div>
                      </div>
                </div>
             </div>
      </div>
    )
  }
}
