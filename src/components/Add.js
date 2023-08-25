import React, { Component } from 'react'



export default class Add extends Component {
state={
  tasks:[{
    task:""
  }]
}
  change=(e)=>{

this.setState({
tasks:[{
  task:e.target.value,
  id:Math.random()
}]

  
})
    

  }
  submit=(e)=>{
    e.preventDefault()
    if(this.state.tasks[0].task!==""){

      let tasks=this.props.prop(...this.state.tasks)
    }else{
      return null
    }
  
this.setState({
tasks:
[
  {

    task:"",
  }
]


  
  


  
  
})
  }
  render() {
    return (
      
      <form onSubmit={this.submit} >
      <div className="inputs">
      <input onChange={this.change} type="text" placeholder="write your task" value={this.state.tasks[0].task} />
      <button > ADD </button>
      
      </div>
      </form>
      
    )
  }
}
