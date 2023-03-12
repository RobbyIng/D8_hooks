export const TodoItem = ({todo, index, deleteOneTodo, updateStatus})=>{
    return <li className="list-group-item d-flex justify-content-between align-items-center mx-5">
              <div>
                <span className={todo.status ? 'text-decoration-line-through' : ""}>{`${index + 1}.  `}{todo.title}</span>
              </div>
              <div data-actions>
                <button
                  type="submit"
                  onClick={() => deleteOneTodo(todo.id)}
                  className="btn btn-danger mx-2"
                >
                  Удалить
                </button>
                <button
                  type="submit"
                  onClick={() => updateStatus(todo.id)}
                  className="btn btn-success"
                >
                  Выполнено
                </button>
              </div>
            </li>
  }