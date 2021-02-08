import React from "react";
// import { utcToZonedTime } from "date-fns-tz";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      date: new Intl.DateTimeFormat("en-US", {
        timeStyle: "medium",
        timeZone: this.props.timezone.tz,
      }).format(date),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const date = new Date();

    this.setState({
      date: new Intl.DateTimeFormat("en-US", {
        timeStyle: "medium",
        timeZone: this.props.timezone.tz,
      }).format(date),
    });
  }

  render() {
    const timezone = this.props.timezone;
    return (
      <div
        className="clock-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${timezone.image})`,
          backgroundPosition: "center",
        }}
      >
        <h1 className="city-name">{timezone.city}</h1>
        <hr className="hrule"></hr>
        <h2>{this.state.date.toString()}</h2>
      </div>
    );
  }
}
export default Clock;
