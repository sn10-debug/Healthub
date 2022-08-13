import React from "react";
import MedicineDetailsHeader from "./MedicineDetailsHeader";
import MedicineList from "./MedicineList";

class MedicineDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="medicine-details">
        <MedicineDetailsHeader />
        <MedicineList />
      </div>
    );
  }
}

export default MedicineDetails;
