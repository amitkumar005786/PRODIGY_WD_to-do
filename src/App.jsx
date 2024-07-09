import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [todolist, setTodolist] = useState([])
  // let[del]

  let saveToDoList = (event) => {
    let todo = event.target.todo.value;
    event.preventDefault();
    if (!todolist.includes(todo)) {
      let finalDolist = [...todolist, todo]
      setTodolist(finalDolist)

    } else {
      alert("already exits......")
    }

  }


  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems value={value} key={index} index={index} todolist={todolist} setTodolist={setTodolist} />
    )
  })

  return (
    <div>
      <div className='App '>
        <h1>To Do List</h1>
        <form action="" onSubmit={saveToDoList}>
          <input type="text" name="todo" id="" />
          <button>Save</button>
        </form>

        <div className='list'>
          <ul>
            {list}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App

function ToDoListItems({ value, index, todolist, setTodolist }) {
  let [status, setStatus] = useState(false)
  let deleteRow = () => {
    let finalData = todolist.filter((v, i) => i != index)
    setTodolist(finalData)

  }
  console.log(value, todolist, index, setTodolist);
  return (

    <li className={status ? 'completeTodo' : ''}
      onClick={() => setStatus(!status)}
    >{index + 1} {value}<span
      onClick={deleteRow}
    >&times;</span></li>
  )
}