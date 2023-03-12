// import logo from './logo.svg';
import './App.css';
import { MemoFooter } from './components/Footer/Footer';
import { MemoHeader } from './components/Header/Header';
import { Main } from './components/Main';
import { useEffect, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { LS_TOKEN } from './utils/constant';

function App() {
  const [count, setCount] = useState(0)

  const [todos, setTodos] = useState(()=>{
    const todoList = localStorage.getItem(LS_TOKEN)
    return todoList ? JSON.parse(todoList) : []
  })

  useEffect(()=>{
    localStorage.setItem(LS_TOKEN, JSON.stringify(todos))
  },[todos])

  const addToList = useCallback((value) => {
    const newTodo = {
      id: uuidv4(),
      title: value,
      status: false
    }
    setTodos((prev)=>[newTodo, ...prev])
    }, [])

   const deleteList = () => {
    setTodos([])
  }
  const deleteOneTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const updateStatus = (id) => {
    setTodos((prev) => prev.map(todo => { 
      if (todo.id === id) return{
        ...todo,
        status: !todo.status
      }
    return todo
    }))
  }

    return (
      <div className="App">

        <MemoHeader count = {count} addToList={addToList}/>
        
        <Main 
          setCount={setCount} 
          todos={todos} 
          deleteList = {deleteList}
          deleteOneTodo = {deleteOneTodo}
          updateStatus = {updateStatus}
        />

        <MemoFooter />

        
      </div>
    );
}

export default App;
