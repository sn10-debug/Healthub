import React from "react";
import Problems from "./Problems";
class PatientDetails extends React.Component {
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
                <label>Name :</label>
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <label>Phone Number :</label>
              </td>
              <td>
                <input type="phone" />
              </td>
            </tr>

            <tr>
              <td>
                <label>Blood Group :</label>
              </td>
              <td>
                <input type="text" />
              </td>

              <td>
                <label>BP :</label>
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <label>Glucose Level :</label>
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        <Problems />
      </div>
    );
  }
}

export default PatientDetails;
