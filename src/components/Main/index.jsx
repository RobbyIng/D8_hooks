import { DeleteAllButton } from "../DeleteAllButton";
import { TodoList } from "../TodoList";

export const Main = ({todos, deleteList, deleteOneTodo, updateStatus}) => {

  // console.log(`Main log   ${todos}`);

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
      <DeleteAllButton deleteList={deleteList }/>
</main>
)}   