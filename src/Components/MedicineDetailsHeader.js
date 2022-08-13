import React from "react";
class MedicineDetailsHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="medicine-details__header">
        <p className="medicine-header__s-no">S.No.</p>
        <p className="medicine-header__medicine-name">Medicine Name</p>
        <p className="medicine-header__dosage">Dosage</p>
        <p className="medicine-header__duration">Duration</p>
      </div>
    );
  }
}

export default MedicineDetailsHeader;
