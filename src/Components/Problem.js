import React from "react";
class Problem extends React.Component {
  constructor(props) {
    super(props);
    this.OnClickRemove = this.OnClickRemove.bind(this);
  }

  OnClickRemove(e) {
    e.preventDefault();
    let num = +document
      .querySelector(`.form-${this.props.number}`)
      .querySelector("label").textContent;

    this.props.OnDeleteOption(num);
  }

  render() {
    return (
      <form
        onSubmit={this.OnClickRemove}
        className={`form-${this.props.number}`}
      >
        {this.props.number ? <label>{this.props.number}</label> : ""}
        {` . `}
        <input type="text" />
        <button>Remove</button>
      </form>
    );
  }
}

Problem.defaultProps = {
  def: "",
};

export default Problem;
