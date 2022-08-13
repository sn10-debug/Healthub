import React from "react";
import BufferComponent from "./BufferComponent";

class Doctor {
  constructor(
    name,
    email_id,
    password,
    speciality,
    degrees,
    working_hours,
    type
  ) {
    this.name = name;
    this.email_id = email_id;
    this.password = password;
    this.speciality = speciality;
    this.degrees = degrees;
    this.working_hours = working_hours;
    this.type = type;
  }
}

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      error: undefined,
      formStatus: "submission",
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    let name = e.target.elements.name.value;
    let email_id = e.target.elements["email-id"].value;
    let password = e.target.elements.password.value;
    let confirm_password = e.target.elements["confirm-password"].value;
    let speciality = e.target.elements.speciality.value;
    let degrees = e.target.elements.degrees.value;
    let working_hours = e.target.elements.working_hours.value;
    let type = e.target.elements.type.value;

    if (!name) {
      this.setState({ error: "Make sure you enter the name" });
      return;
    }

    if (name.split(" ").length < 2) {
      this.setState({ error: "Make sure you enter your full name" });
      return;
    }

    if (!email_id) {
      this.setState({ error: "Make sure you enter the email ID" });
      return;
    }

    if (!password) {
      this.setState({ error: "Make sure you enter the password" });
      return;
    }

    if (password !== confirm_password) {
      this.setState({ error: "Make sure you correctly confirm your password" });
      return;
    }

    if (!speciality) {
      this.setState({ error: "Make sure you enter your speciality" });
      return;
    }

    if (!degrees) {
      this.setState({ error: "Make sure you enter your degree/s" });
      return;
    }

    if (!working_hours) {
      return this.setState({
        error: "Make sure you enter your working hours.",
      });
    }

    if (!type) return this.setState({ error: "Make sure you enter the type." });

    let doctor_details = new Doctor(
      name,
      email_id,
      password,
      speciality.split("\n"),
      degrees.split("\n"),
      working_hours,
      type
    );

    // localStorage.setItem(
    //   "doctor-list",
    //   JSON.stringify([
    //     ...JSON.parse(localStorage.getItem("doctor-list")),
    //     doctor_details,
    //   ])
    // );

    if (this.state.error) this.setState({ error: undefined });

    this.setState({ formStatus: "onway" });

    let func = this.props.onFormSubmit;

    (async function () {
      let postRequest = new XMLHttpRequest();
      postRequest.open("POST", "http://127.0.0.1:8000/api/v1/doctor/");

      postRequest.setRequestHeader("Content-type", "application/json");

      postRequest.addEventListener("load", function () {
        let response = JSON.parse(postRequest.response);
        localStorage.setItem("doctor-id", response.data.details._id);

        func();
      });

      postRequest.send(JSON.stringify(doctor_details));
    })();
  }
  render() {
    return (
      <div>
        {this.state.formStatus === "submission" ? (
          <form onSubmit={this.onFormSubmit}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>Name : </p>
                  </td>

                  <td>
                    <input type="text" name="name" />
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>Email : </p>
                  </td>

                  <td>
                    <input type="email" name="email-id" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Password : </p>
                  </td>

                  <td>
                    <input type="password" name="password" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Confirm Password : </p>
                  </td>

                  <td>
                    <input type="text" name="confirm-password" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Degrees (Each on new line) : </p>
                  </td>

                  <td>
                    <textarea name="degrees"></textarea>
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Speciality (Each on new line) : </label>
                  </td>
                  <td>
                    <textarea name="speciality"></textarea>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Working Hours : </p>
                  </td>

                  <td>
                    <input type="text" name="working_hours" />
                  </td>
                </tr>

                <tr>
                  <td>
                    <p>Type(Clinical/Visiting) : </p>
                  </td>

                  <td>
                    <input type="text" name="type" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button> Sign In</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label
                      onClick={() => {
                        this.props.OnformChange("logIn");
                      }}
                    >
                      Log In ?
                    </label>
                  </td>
                </tr>
              </tbody>
            </table>
            {this.state.error ? <p>{this.state.error}</p> : ""}
          </form>
        ) : (
          ""
        )}

        {this.state.formStatus === "onway" ? <BufferComponent /> : ""}
      </div>
    );
  }
}

export default SignUpForm;
