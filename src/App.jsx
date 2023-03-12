// import logo from './logo.svg';
import './App.css';
import { MemoFooter } from './components/Footer/Footer';
import { MemoHeader } from './components/Header/Header';
import { Main } from './components/Main';
import { useTodos } from './hooks/useTodos';


function App() {
 
  const {todos, addToList, deleteList, deleteOneTodo, updateStatus} =useTodos()

    return (
      <div className="container py-5">

        <MemoHeader  addToList={addToList}/>
        
        <Main           
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
