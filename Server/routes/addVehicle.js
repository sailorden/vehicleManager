var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");

/* Make a new post. */
router.post('/', function(req, res, next) {

	console.log(" posting -- "  + " , " + req.body  ) ;
			
	var now = new Date();

	var insuranceExpiresDate =  new Date( req.body.params.insuranceDate );
	insuranceExpiresDate.setMonth(insuranceExpiresDate.getMonth() + Number(req.body.params.insuranceMonths));

	var registrationExpiresDate = new Date( req.body.params.registrationDate );
	registrationExpiresDate.setMonth(registrationExpiresDate.getMonth() + Number(req.body.params.registrationMonths));

	var secondInsuranceExpiresDate = new Date( req.body.params.secondInsuranceDate );
	secondInsuranceExpiresDate.setMonth(secondInsuranceExpiresDate.getMonth() + Number(req.body.params.secondInsuranceMonths));
	
	var cargoInsuranceExpiresDate =  new Date( req.body.params.cargoInsuranceDate );
	cargoInsuranceExpiresDate.setMonth(cargoInsuranceExpiresDate.getMonth() + Number(req.body.params.cargoInsuranceMonths));

	var techInspectionExpireDate =  new Date( req.body.params.techInspectionDate );
	techInspectionExpireDate.setMonth(techInspectionExpireDate.getMonth() + Number(req.body.params.techInspectionMonths));
	
	var maintenanceInspectionExpiresDate =  new Date( req.body.params.maintenanceInspectionDate );
	maintenanceInspectionExpiresDate.setMonth(maintenanceInspectionExpiresDate.getMonth() + Number(req.body.params.maintenanceInspectionMonths));

	Vehicles.create({
			username: req.body.params.username,

			activeStatus: req.body.params.vehicleStatus,
			vehicleVIN: req.body.params.vehicleVIN,
			vehicleLicense: req.body.params.vehicleLicense,
			vehicleType: req.body.params.vehicleType,
			vehicleMake: req.body.params.vehicleMake,
			vehicleYear: req.body.params.vehicleYear,
			
			registrationNumber: req.body.params.registrationNumber,
			registeredOn: req.body.params.registrationDate,
			registrationExpiresOn: registrationExpiresDate,

			insuranceNumber: req.body.params.insuranceNumber,
			insuranceCompany: req.body.params.insuranceCompany,
			insuredOn: req.body.params.insuranceDate,
			insuranceExpiresOn: insuranceExpiresDate,
			
			secondInsuranceNumber: req.body.params.secondInsuranceNumber,
			secondInsuranceCompany: req.body.params.secondInsuranceCompany,
			secondInsuranceOn: req.body.params.secondInsuranceDate,
			secondInsuranceExpiresOn: secondInsuranceExpiresDate,

			cargoInsuranceNumber: req.body.params.cargoInsuranceNumber,
			cargoInsuranceCompany: req.body.params.cargoInsuranceCompany,
			cargoInsuranceOn: req.body.params.cargoInsuranceDate,
			cargoInsuranceExpiresOn: cargoInsuranceExpiresDate,

			techInspectionOn: req.body.params.techInspectionDate,
			techInspectionExpiresOn: techInspectionExpireDate,

			maintenanceInspectionOn:req.body.params.maintenanceInspectionDate,
			maintenanceInspectionExpiresOn: maintenanceInspectionExpiresDate
		  });
			
	  res.send('posted');
});

module.exports = router;