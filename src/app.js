import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./Router/AppRouter";
import "normalize.css/normalize.css";
import "./styles/style.scss";
import BufferComponent from "./Components/BufferComponent";
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="side-bar-icons">
        <img src="./src/icons/icons8-home-48.png" />
        <img src="./src/icons/icons8-prescription-66.png" />
        <img src="./src/icons/icons8-card-payment-50.png" />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.OnformChange = this.OnformChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      logged_in:
        !!localStorage.getItem("doctor-id") &&
        !!sessionStorage.getItem("doctor-details"),
      login_page: true,
    };
  }

  OnformChange(form_name) {
    this.setState({ login_page: form_name === "logIn" });
  }

  async onFormSubmit() {
    let obj = await fetch(
      `http://127.0.0.1:8000/api/v1/doctor/${localStorage.getItem("doctor-id")}`
    )
      .then((res) => {
        console.log(res);

        return res.json();
      })
      .then((res) => {
        console.log(res);
        return res.data;
      });

    sessionStorage.setItem("doctor-details", JSON.stringify(obj));

    this.setState({
      logged_in:
        !!localStorage.getItem("doctor-id") &&
        !!sessionStorage.getItem("doctor-details"),
    });
  }

  render() {
    return (
      <div>
        {!this.state.logged_in ? (
          this.state.login_page ? (
            <LoginForm
              onFormSubmit={this.onFormSubmit}
              OnformChange={this.OnformChange}
            />
          ) : (
            <SignUpForm
              onFormSubmit={this.onFormSubmit}
              OnformChange={this.OnformChange}
            />
          )
        ) : (
          ""
        )}

        {this.state.logged_in ? <AppRouter /> : ""}
      </div>
    );
  }
}

(async function () {
  ReactDOM.render(
    <BufferComponent />,
    document.querySelector(".main-container")
  );
  let obj = await fetch(
    `http://127.0.0.1:8000/api/v1/doctor/${localStorage.getItem("doctor-id")}`
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.data;
    });

  sessionStorage.setItem("doctor-details", JSON.stringify(obj));

  ReactDOM.render(<App />, document.querySelector(".main-container"));
})();
