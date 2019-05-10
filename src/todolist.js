import React from 'react'

export class Todolist extends React.Component{
  constructor(){
    super();
    this.state={todoFilter:'All'};
  }

  doneTask=(e)=>{
    this.props.doneTask(e.target.parentNode.id);
  };

  removeTask=(e)=>{
    this.props.removeTask(e.target.parentNode.id);
  };

  todoListFilter=(param)=>{
    this.setState({todoFilter:param});
    const activeBtn=document.getElementById('filterBtn'+param);
    document.getElementById('filterBtnAll').classList.remove('active');
    document.getElementById('filterBtnActive').classList.remove('active');
    document.getElementById('filterBtnCompleted').classList.remove('active');
    activeBtn.classList.add('active');

  };
  render(){
    let items_left=0;
    const items=this.props.myTasks.map((elem,i)=>{
      if(elem.status==='passive'){
        items_left ++;
      }
      if (this.state.todoFilter==='All' ||
          (this.state.todoFilter==='Active' && elem.status==='passive') ||
          (this.state.todoFilter==='Completed' && elem.status==='active')){
            let task_id='task_'+i;
            return(
              <li key={i} id={task_id} className={elem.status}>
                <span className="id">{i+1} </span>
                <span className="title">{elem.text} </span>
                <span className="type" onClick={this.doneTask} />
                <span className="delete" onClick={this.removeTask}>x</span>
              </li>
            )
          }
    });
    return(
      <div>
        <div className="todo-list">
          <ul>
              {items}
          </ul>
        </div>
        <div className="todo-filter">
          <div className="left">
            <span>{items_left} items left</span>
          </div>
          <div className="rigth">
            <ul>
              <li id="filterBtnAll" className="active"><span onClick={()=> this.todoListFilter('All')}>All </span></li>
              <li id="filterBtnActive"><span onClick={()=> this.todoListFilter('Active')}>Active</span></li>
              <li id="filterBtnCompleted"><span onClick={()=> this.todoListFilter('Completed')}>Completed</span></li>
            </ul>
          </div>
        </div>
      </div>

    )
  }
}
