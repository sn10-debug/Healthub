import React from "react";
class DoctorDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="details">
        <table>
          <tbody>
            <tr>
              <td>
                <label>Doctor Name : </label>
              </td>
              <td>{this.props.doctor_info.name}</td>
              <td>
                <label>Email ID : </label>
              </td>
              <td>{this.props.doctor_info.email_id}</td>
            </tr>

            <tr>
              <td>
                <label>Degrees : </label>
              </td>
              <td>{this.props.doctor_info.degrees.join(" ")}</td>
              <td>
                <label>Speciality : </label>
              </td>
              <td>{this.props.doctor_info.speciality.join(" ")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default DoctorDetails;
