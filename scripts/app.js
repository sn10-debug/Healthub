"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import React from "react";
// import ReactDOM from "react-dom";
// import validator from "validator";

// localStorage.setItem("doctor-list", JSON.stringify([]));

if (!localStorage.getItem("doctor-list")) localStorage.setItem("doctor-list", JSON.stringify([]));

var Doctor = function Doctor(name, email_id, password, speciality) {
  _classCallCheck(this, Doctor);

  this.name = name;
  this.email_id = email_id;
  this.password = password;
  this.speciality = speciality;
};

var LoginForm = function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    _classCallCheck(this, LoginForm);

    var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

    _this.onFormSubmit = _this.onFormSubmit.bind(_this);

    _this.state = {
      error: undefined
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();

      var email_id = e.target.elements["email-id"].value;
      var password = e.target.elements.pass.value;

      if (!email_id) {
        this.setState({ error: "Please enter a Valid Email ID" });
        return;
      }

      if (!password || password.length < 8) {
        this.setState({ error: "Make sure you enter a Valid Password" });
        return;
      }

      // Checking the Doctor-list

      var doctor_details = JSON.parse(localStorage.getItem("doctor-list")).find(function (mov) {
        return mov.email_id === email_id && mov.password === password;
      });

      if (!doctor_details) {
        this.setState({ error: "Make sure you make a account " });
      }

      if (doctor_details) {
        localStorage.setItem("doctor-email-id", email_id);
        localStorage.setItem("doctor-password", password);

        if (this.state.error) this.setState({ error: undefined });
        this.props.onFormSubmit();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "form",
        { onSubmit: this.onFormSubmit },
        React.createElement(
          "table",
          null,
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "label",
                  null,
                  "Email :"
                )
              ),
              React.createElement(
                "td",
                null,
                React.createElement("input", { type: "email", name: "email-id" })
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "label",
                  null,
                  "Password :"
                )
              ),
              React.createElement(
                "td",
                null,
                React.createElement("input", { type: "password", name: "pass" })
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "button",
                  null,
                  "Log In"
                )
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "label",
                  {
                    onClick: function onClick() {
                      _this2.props.OnformChange("");
                    }
                  },
                  "Sign Up ?"
                )
              )
            )
          )
        ),
        this.state.error ? React.createElement(
          "p",
          null,
          this.state.error
        ) : ""
      );
    }
  }]);

  return LoginForm;
}(React.Component);

var SignUpForm = function (_React$Component2) {
  _inherits(SignUpForm, _React$Component2);

  function SignUpForm(props) {
    _classCallCheck(this, SignUpForm);

    var _this3 = _possibleConstructorReturn(this, (SignUpForm.__proto__ || Object.getPrototypeOf(SignUpForm)).call(this, props));

    _this3.onFormSubmit = _this3.onFormSubmit.bind(_this3);

    _this3.state = {
      error: undefined
    };
    return _this3;
  }

  _createClass(SignUpForm, [{
    key: "onFormSubmit",
    value: function onFormSubmit(e) {
      e.preventDefault();

      var name = e.target.elements.name.value;
      var email_id = e.target.elements["email-id"].value;
      var password = e.target.elements.password.value;
      var confirm_password = e.target.elements["confirm-password"].value;
      var speciality = e.target.elements.speciality.value;

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
      }

      var doctor_details = new Doctor(name, email_id, password, speciality);

      localStorage.setItem("doctor-list", JSON.stringify([].concat(_toConsumableArray(JSON.parse(localStorage.getItem("doctor-list"))), [doctor_details])));

      localStorage.setItem("doctor-email-id", email_id);
      if (this.state.error) this.setState({ error: undefined });
      this.props.onFormSubmit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "form",
        { onSubmit: this.onFormSubmit },
        React.createElement(
          "table",
          null,
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "p",
                  null,
                  "Name : "
                )
              ),
              React.createElement(
                "td",
                null,
                React.createElement("input", { type: "text", name: "name" })
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "p",
                  null,
                  "Email : "
                )
              ),
              React.createElement(
                "td",
                null,
                React.createElement("input", { type: "email", name: "email-id" })
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "p",
                  null,
                  "Password : "
                )
              ),
              React.createElement(
                "td",
                null,
                React.createElement("input", { type: "password", name: "password" })
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "p",
                  null,
                  "Confirm Password : "
                )
              ),
              React.createElement(
                "td",
                null,
                React.createElement("input", { type: "text", name: "confirm-password" })
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "label",
                  null,
                  "Speciality : "
                )
              ),
              React.createElement(
                "td",
                null,
                React.createElement("textarea", { name: "speciality" })
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "button",
                  null,
                  " Sign In"
                )
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "label",
                  {
                    onClick: function onClick() {
                      _this4.props.OnformChange("logIn");
                    }
                  },
                  "Log In ?"
                )
              )
            )
          )
        ),
        this.state.error ? React.createElement(
          "p",
          null,
          this.state.error
        ) : ""
      );
    }
  }]);

  return SignUpForm;
}(React.Component);

// Clinic Details

var ClinicDetails = function (_React$Component3) {
  _inherits(ClinicDetails, _React$Component3);

  function ClinicDetails() {
    _classCallCheck(this, ClinicDetails);

    return _possibleConstructorReturn(this, (ClinicDetails.__proto__ || Object.getPrototypeOf(ClinicDetails)).apply(this, arguments));
  }

  _createClass(ClinicDetails, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement("img", { src: this.props.ClinicImage }),
        React.createElement(
          "p",
          null,
          this.props.ClinicName
        ),
        React.createElement(
          "p",
          null,
          this.props.ClinicCaption
        )
      );
    }
  }]);

  return ClinicDetails;
}(React.Component);

ClinicDetails.defaultProps = {
  ClinicImage: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600",
  ClinicName: "Default Clinic Name",
  ClinicCaption: "Default Clinic Caption"
};

// Doctor Details

var DoctorDetails = function (_React$Component4) {
  _inherits(DoctorDetails, _React$Component4);

  function DoctorDetails(props) {
    _classCallCheck(this, DoctorDetails);

    return _possibleConstructorReturn(this, (DoctorDetails.__proto__ || Object.getPrototypeOf(DoctorDetails)).call(this, props));
  }

  _createClass(DoctorDetails, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "table",
          null,
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "label",
                  null,
                  "Doctor Name : "
                )
              ),
              React.createElement(
                "td",
                null,
                this.props.doctor_info.name
              ),
              React.createElement(
                "td",
                null,
                React.createElement(
                  "label",
                  null,
                  "Email ID : "
                )
              ),
              React.createElement(
                "td",
                null,
                this.props.doctor_info.email_id
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                React.createElement(
                  "label",
                  null,
                  "Speciality : "
                )
              ),
              React.createElement(
                "td",
                null,
                this.props.doctor_info.speciality
              )
            )
          )
        )
      );
    }
  }]);

  return DoctorDetails;
}(React.Component);

var Prescription = function (_React$Component5) {
  _inherits(Prescription, _React$Component5);

  function Prescription(props) {
    _classCallCheck(this, Prescription);

    var _this7 = _possibleConstructorReturn(this, (Prescription.__proto__ || Object.getPrototypeOf(Prescription)).call(this, props));

    _this7.state = {
      doctor_info: JSON.parse(localStorage.getItem("doctor-list")).find(function (mov) {
        return mov.email_id === localStorage.getItem("doctor-email-id");
      })
    };
    return _this7;
  }

  _createClass(Prescription, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(ClinicDetails, null),
        React.createElement(DoctorDetails, { doctor_info: this.state.doctor_info })
      );
    }
  }]);

  return Prescription;
}(React.Component);

var StartingPage = function (_React$Component6) {
  _inherits(StartingPage, _React$Component6);

  function StartingPage(props) {
    _classCallCheck(this, StartingPage);

    var _this8 = _possibleConstructorReturn(this, (StartingPage.__proto__ || Object.getPrototypeOf(StartingPage)).call(this, props));

    _this8.OnformChange = _this8.OnformChange.bind(_this8);
    _this8.onFormSubmit = _this8.onFormSubmit.bind(_this8);
    _this8.state = {
      prescription: !!localStorage.getItem("doctor-email-id"),
      login_page: true
    };
    return _this8;
  }

  _createClass(StartingPage, [{
    key: "OnformChange",
    value: function OnformChange(form_name) {
      this.setState({ login_page: form_name === "logIn" });
    }
  }, {
    key: "onFormSubmit",
    value: function onFormSubmit() {
      this.setState({
        prescription: !!localStorage.getItem("doctor-email-id")
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        !this.state.prescription ? this.state.login_page ? React.createElement(LoginForm, {
          onFormSubmit: this.onFormSubmit,
          OnformChange: this.OnformChange
        }) : React.createElement(SignUpForm, {
          onFormSubmit: this.onFormSubmit,
          OnformChange: this.OnformChange
        }) : "",
        this.state.prescription ? React.createElement(Prescription, null) : ""
      );
    }
  }]);

  return StartingPage;
}(React.Component);

ReactDOM.render(React.createElement(StartingPage, null), document.querySelector(".main-container"));
