import React from "react";

class Medicine extends React.Component {
  constructor(props) {
    super(props);
    this.OnRemoveMedicine = this.OnRemoveMedicine.bind(this);
  }
  OnRemoveMedicine() {
    console.log("In the Remove Function");
    this.props.OnRemoveMedicine(this.props.medicine_num);
  }

  render() {
    return (
      <div>
        <div className={`medicine-option`}>
          {/* 3 inputs*/}

          <p className="medicine-header__s-no">{this.props.medicine_num}</p>
          <input className="medicine-header__medicine-name" />
          <input className="medicine-header__dosage" />
          <input className="medicine-header__duration" />
        </div>
        <div className="medicine-option-remove">
          <p></p>
          <button onClick={this.OnRemoveMedicine}>Remove</button>
        </div>
      </div>
    );
  }
}

export default Medicine;
