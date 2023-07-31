import React, { Component } from 'react'
import Add from './Add';

export default class Delete extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      tasks:[]
      
    }
  }
  adds=(item)=>{
    let tasks=[...this.state.tasks]
tasks.push(item)  
this.setState({
tasks:tasks
})
  }
  del=(id)=>{
let tasks=this.state.tasks.filter(task=>task.id!==id)
this.setState({
  tasks:tasks
})
  }
  render() {

    
    const all=this.state.tasks
    const listItems=all.map(tas=>{
      return(
        <div className="tasks" key={Math.random()}>
        <span>{tas.task}</span>
        <span className="dele" onClick={()=>this.del(tas.id)}>x</span>
        
        </div>
        )
      
              })
    return (
      <div >
      <Add  prop={this.adds} />
      <div className="allTasks">

{all.length?listItems:<p className='textP'>No Tasks To Show</p>}
</div>

      </div>
    )
  }
}
