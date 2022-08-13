const express = require("express");
const morgan = require("morgan");
const { request, response, route } = require("../app");
const DoctorDetailsController = require("../Controllers/doctorDetailsController");

const router = express.Router();

// Check Doctor's Credential and then provide doctor's details

router.use(express.json());

router.param("id", (request, response, next) => {
  // if (request.body.email_id && request.body.password) next();
  // else
  //   return response.status(400).json({
  //     status: "fail",
  //     message: "Email ID or Password not entered",
  //   });

  next();
});

router
  .route("/")
  .get(DoctorDetailsController.getDoctorsInfo)
  .post(DoctorDetailsController.addNewDoctorInfo);

router
  .route("/:email_id/:password")
  .get(DoctorDetailsController.getDoctorIdUsingEmail);

router.route("/:id").get(DoctorDetailsController.getDoctorInfo);

module.exports = router;
