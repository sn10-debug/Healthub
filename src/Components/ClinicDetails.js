import React from "react";
class ClinicDetails extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.ClinicImage} />
        <p>{this.props.ClinicName}</p>
        <p>{this.props.ClinicCaption}</p>
      </div>
    );
  }
}

ClinicDetails.defaultProps = {
  ClinicImage:
    "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=600",
  ClinicName: "Default Clinic Name",
  ClinicCaption: "Default Clinic Caption",
};

export default ClinicDetails;
