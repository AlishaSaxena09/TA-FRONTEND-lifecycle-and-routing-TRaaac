import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null, currentProperty: "email" };
  }
  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  };

  handleCurrentProperty = (propertyName) => {
    this.setState({ currentProperty: propertyName });
  };

  getPropertyValue = (person, propertyName) => {
    switch (propertyName) {
      case "email":
        const { email } = person;
        return email;
      case "age":
        const { age } = person.dob;
        return age;
      case "street":
        const { street, city, state, country } = person.location;
        return `${street.number} ${street.name}`;
      case "phone":
        const { phone } = person;
        return phone;
      case "password":
        const { password } = person.login;
        return password;

      case "name":
      default:
        const { title, first, last } = person.name;
        return `${title} ${first} ${last}`;
    }
  };

  render() {
    if (!this.state.data) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="container">
        {this.state.data.map((person) => {
          const { title, first, last } = person.name;
          return (
            <div>
              <div className="user">
                <img src={person.picture.large} />
                <p>My {this.state.currentProperty} is</p>
                <h1>
                  {this.getPropertyValue(person, this.state.currentProperty)}
                </h1>
              </div>
              <div className="icons">
                {[
                  {
                    propertyName: "name",
                    icon: <i class="fas fa-user-alt"></i>,
                  },
                  {
                    propertyName: "email",
                    icon: <i class="fas fa-user-alt"></i>,
                  },
                  {
                    propertyName: "age",
                    icon: <i class="fas fa-user-alt"></i>,
                  },
                  {
                    propertyName: "street",
                    icon: <i class="fas fa-user-alt"></i>,
                  },
                  {
                    propertyName: "phone",
                    icon: <i class="fas fa-user-alt"></i>,
                  },
                  {
                    propertyName: "password",
                    icon: <i class="fas fa-user-alt"></i>,
                  },
                ].map((property) => {
                  const { propertyName } = property;
                  return (
                    <button
                      onMouseEnter={() =>
                        this.handleCurrentProperty(propertyName)
                      }
                      onMouseOut={() => this.handleCurrentProperty("name")}
                    >
                      {propertyName}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        <button className="random-user" onClick={() => this.getUser()}>
          Random User
        </button>
      </div>
    );
  }
}

export default App;
