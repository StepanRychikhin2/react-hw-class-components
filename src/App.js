import "./App.css";
import TaskList from "./components/TaskList";
let list = [
  {
    id: 1,
    text: "1 text",
  },
  {
    id: 2,
    text: "2 text",
  },
  {
    id: 3,
    text: "3 text",
  },
];
function App() {
  return (
    <div className="App">
      <TaskList list={list} ></TaskList>
      <button onClick={(event) => console.log(event.target)}>Click me!</button>
    </div>
  );
}

export default App;
