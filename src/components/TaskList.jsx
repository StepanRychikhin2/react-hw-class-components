import React, { Component } from "react";
import styles from "../components/TaskList.module.css";
import svg from "./musor.svg";
class TaskList extends Component {
  removeItem = (list, task) => {
    delete list[task];

    this.forceUpdate();
  };

  addTask = (list) => {
    let awd = document.getElementById("inptt").value;
    console.log(awd);
  let add = {
    id: list.length,
    text: awd
  }

  list.push(add)
console.log(add);
console.log(list);
    this.forceUpdate();
  };
  render() {
    const { list } = this.props;
    console.log(list);

    return (
      <>
        <ul className={styles.list}>
          {list.map((task) => {

            return (
              <li key={task.id} className={styles.component}>
                <p>{task.text}</p>
                <button
                  onClick={(e) => this.removeItem(list, task.id)}
                  className={styles.btn}
                >
                  <img href={svg}/>
                </button>
              </li>
            );
          })}
        </ul>
        <button onClick={() => this.addTask(list)}>ADD</button>
        <input id="inptt" placeholder="text" />
      </>
    );
  }
}

export default TaskList;
