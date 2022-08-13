const validator = require("validator");
const { response } = require("../app");
const doctorDetailsModel = require("../models/doctorDetailsModel");

exports.CheckDoctorCred = (request, response, next) => {
  let id = request.params.id;

  // Fetch for the Doctors list stored in the Database and find the doctor with the ID provided and check for the email_id and password

  //   Here with validation existence will also be checked and the corresponding password to Email ID

  console.log(`Requested for ID ${id}`);

  if (validator.isEmail(request.body.email_id)) next();
  else {
    return response.status(400).json({
      status: "fail",
      message: "Incorrect Email ID or Password",
    });
  }
};

exports.getDoctorsInfo = (request, response) => {
  // Define a function before it to check for authentication
  // This provides the list of doctors

  response.status(200).json({
    status: "success",
    data: {
      message: "Successfully provided the doctor's list",
    },
  });
};

exports.getDoctorInfo = async (request, response) => {
  // Then find the Doctor's object which consists data about the Patient checked and their appointment

  // Also the Prescriptions given by the Doctor

  try {
    let id = request.params.id;

    let info = await doctorDetailsModel.findById(id);

    response.status(200).json({
      status: "success",
      data: info,
    });
  } catch (err) {
    response.status(404).json({
      status: "fail",
      message: "Id is invalid",
    });
  }
};

exports.getDoctorIdUsingEmail = async (request, response) => {
  try {
    let email_id = request.params.email_id;
    let password = request.params.password;

    let obj = await doctorDetailsModel.findOne({ email_id, password });

    response.status(200).json({
      status: "success",
      id: obj._id,
    });
  } catch (err) {
    response.status(404).json({
      status: "fail",
      message: "Data not found",
    });
  }
};

exports.addNewDoctorInfo = async (request, response) => {
  try {
    const newDoctor = await doctorDetailsModel.create(request.body);

    response.status(200).json({
      status: "success",
      data: {
        message: "Data Successfully stored",
        details: newDoctor,
      },
    });
  } catch (err) {
    response.status(400).json({
      status: "fail",
      error: err,
    });
  }
};
