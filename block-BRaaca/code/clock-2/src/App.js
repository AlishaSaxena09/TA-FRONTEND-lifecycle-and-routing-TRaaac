import "./App.css";
import React from "react";
import Clock from "./Clock";
import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clockCount: 3,
    };
  }

  decrementClockCount = () => {
    this.setState({ clockCount: this.state.clockCount - 1 });
  };

  incrementClockCount = () => {
    this.setState({ clockCount: this.state.clockCount + 1 });
  };
  render() {
    return (
      <div className="app">
        <button onClick={this.decrementClockCount}> - </button>
        <div className="clocks-container">
          {data.slice(0, this.state.clockCount).map((timezone) => {
            return <Clock timezone={timezone} />;
          })}
        </div>
        <button onClick={this.incrementClockCount}> + </button>
      </div>
    );
  }
}
export default App;
