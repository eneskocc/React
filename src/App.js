import React, {Component} from 'react';
import {Todolist} from './todolist.js'
import {TodoForm} from './todoForm.js'
import {Footer} from './inc/footer.js'
import {Header} from './inc/header.js'


class App extends Component {
  constructor(){
    super();
    this.state={myTasks:[
      {text:"sahur yap",status:"passive"},
      {text:"kitap oku",status:"passive"},
      {text:"ders çalış",status:"passive"},
      {text:"React calış",status:"passive"},
      {text:"biraz şekerleme yap",status:"passive"},
      {text:"kahve iç",status:"passive"},
      {text:"oruç aç",status:"passive"},
      {text:"namaz kıl",status:"passive"},
      {text:"uyu",status:"passive"},
      {text:"spor yap",status:"passive"}
    ]};
    this.addTask=this.addTask.bind(this);
    this.doneTask=this.doneTask.bind(this);
    this.removeTask=this.removeTask.bind(this);
  }
  addTask(val){
    let updatedList=this.state.myTasks;
    updatedList.push({text:val,status:"passive"});
    this.setState({myTasks:updatedList});
  }

  doneTask(task_id){
    task_id=task_id.replace('task_','');
    let updatedList=this.state.myTasks;
    let newStatus='active';
    let curruntStatus=updatedList[task_id].status;
    if(curruntStatus==='active'){
      newStatus='passive';
    }
    updatedList[task_id].status=newStatus;
    this.setState({myTasks:updatedList})

  }

  removeTask(task_id){
    task_id=task_id.replace('task_','');
    let updatedList=this.state.myTasks;
    updatedList.splice(task_id,1);
    this.setState({myTasks:updatedList})
  }

  render(){
    return (
      <div className="App">
        <div className="content">
          <Header/>
          <TodoForm addTasks={this.addTask}/>
          <Todolist myTasks={this.state.myTasks}
            doneTask={this.doneTask}
            removeTask={this.removeTask}></Todolist>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
