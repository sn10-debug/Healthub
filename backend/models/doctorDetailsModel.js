const mongoose = require("mongoose");
const doctorInfoSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email_id: {
    type: String,
    required: [true, "Email ID is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password has to be provided"],
  },
  degrees: {
    type: Array,
    required: [true, "Degrees has to be provided"],
  },
  speciality: {
    type: Array,
    required: [true, "Speciality has to be provided"],
  },
  working_hours: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const doctorDetailsModel = mongoose.model("doctorDetails", doctorInfoSchema);

module.exports = doctorDetailsModel;
