import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="max-w-[100vw] min-h-screen bg-slate-800 rounded-2xl">
        <h1 className="text-4xl text-white font-medium py-6">Learn Redux Toolkit 😎 </h1>
        <AddTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;

/**
 * REDUX TOOLKIT (STEPS)
 * we need both core redux and redux toolkit in our project
 * install core redux and redux toolkit
 * configure store : make folder 'app' and create store.js file in this folder
 * create slice : make folder 'features' and make folder 'todo' in this folder and finally create todoSlice.js file in this folder . slice is just for naming conveention of RTK (src > features > todo > todoSlice.js)
 * create reducers : reducers are part of slices create them , export them and then export individual functionality from reducers
 */
