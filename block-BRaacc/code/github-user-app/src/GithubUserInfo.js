import React from "react";
import Card from "./Card";
import "./App.css";
class GithubUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.fetchUser(this.props.match.params.username);
  }

  fetchUser = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  };

  render() {
    return (
      <div className="App">
        {this.state.data ? <Card data={this.state.data} /> : null}
      </div>
    );
  }
}

export default GithubUserInfo;
