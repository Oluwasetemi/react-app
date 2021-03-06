import React, { Component } from "react";
import "./AddGreeter.css";

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }
  handleUpdate(event) {
    this.setState({ greetingName: event.target.value });
  }

  addGreeting() {
    this.props.addGreeting(this.state.greetingName);
    this.setState({ greetingName: "" });
  }
  render() {
    return (
      <div className="AddGreeter">
        <label name="add">
          <input
            style={{
              padding: 5,
            }}
            type="text"
            placeholder="Enter Name"
            onChange={this.handleUpdate}
            value={this.state.greetingName}
          />
          &nbsp;&nbsp;
          <button
            style={{
              padding: 10,
            }}
            onClick={this.addGreeting}
          >
            Add
          </button>
        </label>
      </div>
    );
  }
}

export default AddGreeter;
