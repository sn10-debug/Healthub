import React from "react";
import ClinicDetails from "./ClinicDetails";
import DoctorDetails from "./DoctorDetails";
import PatientDetails from "./PatientDetails";
import MedicineDetails from "./MedicineDetails";

class Prescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctor_info: JSON.parse(sessionStorage.getItem("doctor-details")),
    };
  }

  render() {
    return (
      <div className="prescription">
        <ClinicDetails></ClinicDetails>
        <h3>Doctor Details : </h3>
        <DoctorDetails doctor_info={this.state.doctor_info} />
        <h3>Patient Details : </h3>
        <PatientDetails />
        <h3>Medicine Details : </h3>
        <MedicineDetails />
        <div className="submit-prescription-bar">
          <p>
            <input
              type={"checkbox"}
              className="confirmation--checkbox"
              value="Agree"
            />{" "}
            Agree upon the Information Entered
          </p>
          <button>Submit Prescription</button>
        </div>
      </div>
    );
  }
}

export default Prescription;
