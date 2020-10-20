import React, { Fragment, Component } from "react";
import * as _ from "lodash";
import "../css/ToDoList.css";

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfTasks: [],
      userInput: ""
    };
  }

  updateInput = value => {
    this.setState({
      userInput: value
    });
  };

  addTask = () => {
    const { userInput } = this.state;
    if (userInput && !_.isEmpty(userInput)) {
      let listOfTasksTemp = [...this.state.listOfTasks];
      listOfTasksTemp.push(userInput);
      this.setState({
        listOfTasks: listOfTasksTemp,
        userInput: ""
      });
    }
  };

  removeTask = taskId => {
    let listOfTasksTemp = [...this.state.listOfTasks];
    _.nth(listOfTasksTemp, taskId);
    this.setState({
      listOfTasks: listOfTasksTemp
    });
  };

  render() {
    const { listOfTasks, userInput } = this.state;
    return (
      <Fragment>
        <h2>TO DO LIST</h2>
        <input
          type="text"
          id="task"
          name="task"
          value={userInput}
          onChange={item => this.updateInput(item.target.value)}
        />
        <input type="submit" value="ADD" onClick={() => this.addTask()} />
        {!_.isEmpty(listOfTasks) && (
          <table>
            <tr>
              <th>Task</th>
              <th>Action</th>
            </tr>
            {listOfTasks.map((task, index) => (
              <tr>
                <td>{task}</td>
                <td>
                  <input
                    type="button"
                    id="remove"
                    name="remove"
                    value="REMOVE"
                    onClick={item => this.removeTask(item)}
                  />
                </td>
              </tr>
            ))}
          </table>
        )}
      </Fragment>
    );
  }
}

export default ToDoList;
