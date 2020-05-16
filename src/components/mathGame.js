import React from "react";

const top = 10;

class MathGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: Math.floor(Math.random() * top),
      b: Math.floor(Math.random() * top),
      result: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.assertResult = this.assertResult.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  assertResult() {
    const answer = this.state.a + this.state.b;
    if (answer === Number(this.state.result)) {
      alert("congrats");
    } else {
      alert(`Wrong! correct answer is ${answer}`);
    }
    this.setState({
      a: Math.floor(Math.random() * top),
      b: Math.floor(Math.random() * top),
      result: ""
    });
  }

  render() {
    return (
      <div>
        <h2>Simple math game</h2>
        <div class="box">{this.state.a}</div>
        <div class="box">+</div>
        <div class="box">{this.state.b}</div>
        <div class="box">=</div>
        <input
          class="box"
          onChange={this.handleChange}
          name="result"
          value={this.state.result}
        />
        <br />
        <button onClick={this.assertResult}>assert</button>
      </div>
    );
  }
}

export default MathGame;
