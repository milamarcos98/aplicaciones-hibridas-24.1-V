import React, { useState } from 'react'
import Item from './Item'
import styles from "./TodoList.module.scss"
import Toast from './Toast';

const TodoList = () => {
  const [inputTask, setInputTask] = useState('');
  const [list, setList] = useState([]);
  const [showTask, setShowTask] = useState({});

  const handleInputChange = (event) => {
    setInputTask(event.target.value);
  }

  const handleAddTodo = () => {
    const newTask = {
      id: list.length + 1,
      todo: inputTask,
      done: false
    }

    setList([...list, newTask]);
    setInputTask("");
    
    setShowTask({
      message: 'creado correctamente!',
      type: 'success',
      position: 'top-right'
    })
    setTimeout(() => {
      setShowTask({})
    }, 4000)
  }

  const handleDeleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
      setList(newList)
      setShowTask({
        message: 'creado correctamente!',
        type: 'danger',
        position: 'top-right'
      })
      setTimeout(() => {
        setShowTask({})
      }, 4000)
  }

  const handleToggleDone = (id) => {
    const updatedList = list.map((todo) => {
      return todo.id === id ? {...todo, done: !todo.done} : todo
    })
    setList(updatedList)

    const updatedTask = updatedList.find(task => task.id === id)
    if(updatedTask && updatedTask.done){
      setShowTask({
        message: 'todo completado!',
        type: 'success',
        position: 'top-right'
      })
      setTimeout(() => {
        setShowTask({})
      }, 4000)
    }else{
      setShowTask({
            message: 'modificado correctamente!',
            type: 'info',
            position: 'top-right'
          })
          setTimeout(() => {
            setShowTask({})
          }, 4000)
    }

   
  }

  return (
    <div className={styles.Todo}>
      {
        Object.keys(showTask).length > 0 && <Toast type={showTask.type} position={showTask.position} message={showTask.message} />
      }
      {/* <Toast type="success" position="top-right" message="mensaje"/> */}
      {/* <Toast type="danger" position="bottom-right" message="mensaje"/> */}
      <h1>My To-Do List</h1>
      <div className={styles.input_container}>
        <input className={styles.input} type="text" placeholder='Enter a task' value={inputTask} onChange={handleInputChange}/>
        <button className={styles.btn} onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {
          list.map((todo) => (
            <Item todo={todo} handleDeleteTodo={handleDeleteTodo} handleToggleDone={handleToggleDone} />
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList