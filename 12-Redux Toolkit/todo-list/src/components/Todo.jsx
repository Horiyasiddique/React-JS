import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../Features/Todo/todoSlice";
import { FaTrash, FaCheck } from "react-icons/fa";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Todos
      </h1>

      {todos.length === 0 ? (
        <div className="text-center py-8 bg-gray-100 rounded-lg">
          <p className="text-gray-500">No todos yet. Add one above!</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full border-2 border-blue-500 flex items-center justify-center">
                  <FaCheck className="text-blue-500 text-xs" />
                </span>
                <span className="text-gray-800">{todo.text}</span>
              </div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors duration-200"
                aria-label="Delete todo"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todo;
