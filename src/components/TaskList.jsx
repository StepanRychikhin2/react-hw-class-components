import React, { Component } from "react";
import styles from "../components/TaskList.module.css";


class TaskList extends Component {
  render() {
    const { list } = this.props;

    return (
      <ul className={styles.list}>
        {list.map((task) => {
          return (
            <li key={task.id} className={styles.component}>
              {" "}
              <p >{task.text}</p>
              <button  className={styles.btn}>DEL</button>
              <button className={styles.btn}>ADD</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TaskList;
