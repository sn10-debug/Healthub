import React from "react";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <h3>You are Almost There !</h3>
        <p>You are Requested to add the Clinics/Hospitals you visit</p>
        <Link to="/profile#add_clinic">
          <button>Add the Locations</button>
        </Link>
        <br />

        <h3>Time to Check Patients !</h3>
        <Link to="/prescription">
          <button>Create Your Prescription</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
