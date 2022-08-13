import React from "react";
import Medicine from "./Medicine";

class Meds {
  constructor(med_name, dosage, duration) {
    this.MedicineName = med_name;
    this.Dosage = dosage;
    this.Duration = duration;
  }
}

class MedicineList extends React.Component {
  constructor(props) {
    super(props);
    this.OnAddMedicine = this.OnAddMedicine.bind(this);
    this.OnRemoveMedicine = this.OnRemoveMedicine.bind(this);
    this.state = {
      values: [new Meds("", "", ""), new Meds("", "", "")],
      medicines: [
        <Medicine medicine_num={1} OnRemoveMedicine={this.OnRemoveMedicine} />,
        <Medicine medicine_num={2} OnRemoveMedicine={this.OnRemoveMedicine} />,
      ],
    };
  }

  OnRemoveMedicine(index) {
    console.log("In the Remove Function");
    let values = [];

    [...document.querySelectorAll(".medicine-option")].forEach((mov) => {
      let med_name = mov.querySelector(".medicine-header__medicine-name").value;
      let dosage = mov.querySelector(".medicine-header__dosage").value;
      let duration = mov.querySelector(".medicine-header__duration").value;
      let x = new Meds(med_name, dosage, duration);
      values.push(x);
    });

    values = values.filter((_, i) => i + 1 !== index);

    let medicines = [];

    values.forEach((_, i) => {
      medicines.push(
        <Medicine
          medicine_num={i + 1}
          OnRemoveMedicine={this.OnRemoveMedicine}
        />
      );
    });

    this.setState(() => ({
      medicines,
      values,
    }));
  }

  componentDidUpdate() {
    [...document.querySelectorAll(".medicine-option")].forEach((mov, i) => {
      mov.querySelector(".medicine-header__medicine-name").value =
        this.state.values[i].MedicineName;
      mov.querySelector(".medicine-header__dosage").value =
        this.state.values[i].Dosage;

      mov.querySelector(".medicine-header__duration").value =
        this.state.values[i].Duration;
    });
  }

  OnAddMedicine() {
    let values = [];

    [...document.querySelectorAll(".medicine-option")].forEach((mov) => {
      let med_name = mov.querySelector(".medicine-header__medicine-name").value;
      let dosage = mov.querySelector(".medicine-header__dosage").value;
      let duration = mov.querySelector(".medicine-header__duration").value;
      let x = new Meds(med_name, dosage, duration);
      values.push(x);
    });

    this.setState((prevState) => ({
      medicines: [
        ...prevState.medicines,
        <Medicine
          medicine_num={prevState.medicines.length + 1}
          OnRemoveMedicine={this.OnRemoveMedicine}
        />,
      ],
      values: [...values, new Meds("", "", "")],
    }));
  }

  render() {
    return (
      <div>
        {this.state.medicines}

        <div className="medicine-add-button-bar">
          <p></p>
          <button
            className="medicine-add-button-button"
            onClick={this.OnAddMedicine}
          >
            Add Medicine
          </button>
        </div>
      </div>
    );
  }
}

export default MedicineList;
