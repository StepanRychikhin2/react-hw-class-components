import "./App.css";
import TaskList from "./components/TaskList";
import styles from "./components/TaskList.module.css";
// import addTask from "./components/AddTask";
// import styled from "styled-components";
let list = [
  {
    id: 0,
    text: "1 text",
  },
  {
    id: 1,
    text: "2 text",
  },
  {
    id: 2,
    text: "3 text",
  },
];

// const Input = styled.input`
// `
function App() {
  return (
    <div className="App">
      <TaskList list={list} ></TaskList>
    
      <button onClick={(e) => console.log(list)}>Click me!</button>
      </div>
  );
}

export default App;
