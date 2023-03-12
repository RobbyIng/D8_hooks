import { DeleteAllButton } from "../DeleteAllButton";
import { TodoList } from "../TodoList";

export const Main = ({setCount, todos, deleteList, deleteOneTodo, updateStatus}) => {
    const increment = () => setCount((prev) => prev+1);
    const decrement = () => setCount((prev) => prev-1);

    if (!todos.length) {
        return <p>TODO list still empty</p>
    }
return(
    <main className="mt-3">
      <TodoList 
        todos={todos} 
        deleteOneTodo={deleteOneTodo} 
        updateStatus={updateStatus}
      />
      <button onClick={increment}>Plus one</button>
      <button onClick={decrement}>Minus one</button>
      <DeleteAllButton deleteList={deleteList }/>
</main>
)}   