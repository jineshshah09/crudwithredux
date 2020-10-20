import React, { Component } from "react";
import * as _ from "lodash";

class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
  }

  dismissError = () => {
    this.setState({ error: "" });
  };

  handleSubmit = () => {
    const { username, password } = this.state;

    if (username && _.isEmpty(username)) {
      return this.setState({ error: "Username is required" });
    }

    if (password && _.isEmpty(password)) {
      return this.setState({ error: "Password is required" });
    }

    const userData = {
      email: username,
      password: password
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "no-cors",
      body: userData
    };

    fetch("https://reqres.in/api/register", requestOptions)
      .then(response => {
        const data = response.json();
        console.log(data.id);
      })
      .then(() => {
        this.setState({
          error: "Enable to call api"
        });
      });
  };

  handleUserChange = value => {
    this.setState({
      username: value
    });
  };

  handlePassChange = value => {
    this.setState({
      password: value
    });
  };

  render() {
    return (
      <div className="Login">
        {this.state.error && (
          <h3 data-test="error" onClick={() => this.dismissError()}>
            <button onClick={() => this.dismissError()}>✖</button>
            {this.state.error}
          </h3>
        )}
        <label>User Name</label>
        <input
          type="text"
          data-test="username"
          value={this.state.username}
          onChange={item => this.handleUserChange(item.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          data-test="password"
          value={this.state.password}
          onChange={item => this.handlePassChange(item.target.value)}
        />

        <input
          type="submit"
          value="Log In"
          onClick={() => this.handleSubmit()}
        />
        <p>
          Alreday user? Please <a href="http://localhost:3000//login">Log in</a>{" "}
          here
        </p>
      </div>
    );
  }
}

export default signup;
