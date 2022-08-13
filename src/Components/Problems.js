import React from "react";
import Problem from "./Problem";

class Problems extends React.Component {
  constructor(props) {
    super(props);
    this.OnClickAdd = this.OnClickAdd.bind(this);
    this.OnDeleteOption = this.OnDeleteOption.bind(this);
    this.state = {
      probs: [<Problem number={1} OnDeleteOption={this.OnDeleteOption} />],
    };
  }

  OnDeleteOption(index) {
    let values = this.state.probs.map((mov, i) => {
      return document.querySelector(`.form-${i + 1}`).querySelector("input")
        .value;
    });

    values = values.filter((mov, i) => i != index - 1);
    this.setState(() => ({
      probs: values.map((_, i) => {
        return <Problem number={i + 1} OnDeleteOption={this.OnDeleteOption} />;
      }),
    }));

    values.forEach((mov, i) => {
      document.querySelector(`.form-${i + 1}`).querySelector("input").value =
        mov;
    });
  }

  OnClickAdd() {
    console.log("Add Clicked");
    this.setState((prevState) => ({
      probs: [
        ...prevState.probs,
        <Problem
          number={prevState.probs.length + 1}
          OnDeleteOption={this.OnDeleteOption}
        />,
      ],
    }));
  }

  render() {
    return (
      <div>
        <p>Problems : </p>
        {this.state.probs.map((mov) => (
          <div>
            {mov}
            <br />
          </div>
        ))}
        <br />
        <br />
        <button onClick={this.OnClickAdd} className="button__add">
          Add
        </button>
      </div>
    );
  }
}

export default Problems;
