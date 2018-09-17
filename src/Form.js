import React, { Component } from "react";

export default class Form extends React.Component {
  state = {
    FirstName: "",
    LastName: "",
    Username: "",
    Email: "",
    Password: "",
    Question: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form action="">
        <input
          name="FirstName"
          placeholder="First name"
          value={this.state.FirstName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="LastName"
          placeholder="Last name"
          value={this.state.LastName}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Username"
          placeholder="Username"
          value={this.state.Username}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Email"
          placeholder="Email"
          value={this.state.Email}
          onChange={e => this.change(e)}
        />
        <br />
        <input
          name="Password"
          type="password"
          placeholder="Password"
          value={this.state.Password}
          onChange={e => this.change(e)}
        />
        <br />Do you own a car?<br />
        <input
          type="radio"
          name="Question"
          value="yes"
          onChange={e => this.change(e)}
        />
        yes
        <input
          type="radio"
          name="Question"
          value="no"
          onChange={e => this.change(e)}
        />
        no<br />
        <button onClick={e => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
