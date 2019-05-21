import React from 'react';

export class TodoForm extends React.Component{
  constructor(){
    super();
    this.addTask=this.addTask.bind(this);
   }

  addTask(e){
    e.preventDefault();
    var inp=document.getElementById('todoInput');
    var val =inp.value;
    inp.value='';
    this.props.addTasks(val);
  }

  render(){
    return(
      <div>
        <div className="todo type1">
          <form className="input-warpper" onSubmit={this.addTask}>
            <input autoComplete="off" id="todoInput" type="text" className="add-todo" placeholder="Whats needs to be done?" />
          </form>
        </div>
        <button type="button" className="add-btn" onClick={this.addTask}/>
      </div>
    )
  }
}
