import React from "react";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      error: undefined,
    };
  }

  onFormSubmit(e) {
    e.preventDefault();

    let email_id = e.target.elements["email-id"].value;
    let password = e.target.elements.pass.value;

    if (!email_id) {
      this.setState({ error: "Please enter a Valid Email ID" });
      return;
    }

    if (!password || password.length < 8) {
      this.setState({ error: "Make sure you enter a Valid Password" });
      return;
    }

    // Checking the Doctor-list

    let func1 = this.props.onFormSubmit;
    let func2 = this.setState.bind(this);
    (async function () {
      fetch(`http://127.0.0.1:8000/api/v1/doctor/${email_id}/${password}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.status !== "success") {
            throw new Error();
          } else {
            localStorage.setItem("doctor-id", res.id);
            fetch(`http://127.0.0.1:8000/api/v1/doctor/${res.id}`)
              .then((res) => res.json())
              .then((res) => {
                sessionStorage.setItem(
                  "doctor-details",
                  JSON.stringify(res.data)
                );
                func1();
              });
          }
        })
        .catch(() => {
          func2({ error: "Make sure you make a account " });
        });
    })();

    // if (!doctor_details) {
    //   this.setState({ error: "Make sure you make a account " });
    // }

    // if (doctor_details) {
    //   localStorage.setItem("doctor-email-id", email_id);
    //   localStorage.setItem("doctor-password", password);

    //   if (this.state.error) this.setState({ error: undefined });
    //   this.props.onFormSubmit();
    // }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Email :</label>
              </td>
              <td>
                <input type="email" name="email-id" />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password :</label>
              </td>
              <td>
                <input type="password" name="pass" />
              </td>
            </tr>
            <tr>
              <td>
                <button>Log In</button>
              </td>
            </tr>
            <tr>
              <td>
                <label
                  onClick={() => {
                    this.props.OnformChange("");
                  }}
                >
                  Sign Up ?
                </label>
              </td>
            </tr>
          </tbody>
        </table>
        {this.state.error ? <p>{this.state.error}</p> : ""}
      </form>
    );
  }
}

export default LoginForm;
