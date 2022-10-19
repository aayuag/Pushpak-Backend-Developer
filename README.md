This Backend is made using NodeJS,Express and MongoDB.

The database is used as localhost and port number is 3001.

For Vehicle the API's are:-

1.To add a registration: http://localhost:3001/vehicle/add 
and The input data should be in Format:
{
"id": "XXXX-XX-XXXX-XXX",(it should be unique)
"licensePlateNumber": "XXXXXXXXXX",
"manufacturerName": "XXXXX",
"model": "XXXX",
"fuelType": "XXXXX", (petrol, desiel, or electric)
"ownerName": "XXXXX XXXXX",
"rc_status": "XXXX", (Active, Inactive)
"vehicleColor": "XXXXX",
"registrationDate":"YYYY-MM-DD",
"insuranceUpto": "YYYY-MM-DD",
"fitnessUpto": "YYYY-MM-DD",
"roadTaxUpto": "YYYY-MM-DD"
}

2.To get Vehicle Details:http://localhost:3001/vehicle/:id
where ':id' is replaced by vechicle id.

3.To edit Vehicle Details:http://localhost:3001/vehicle/edit/:id
where ':id' is replaced by vechicle id.
and the data to change is given in body as per key and value.

4.To delete vechicle Details:http://localhost:3001/vehicle/delete/:id
where ':id' is replaced by vechicle id.

For Violation the API's are:-

1.To add a registration: http://localhost:3001/violation/add 
and The input data should be in Format:
{
"id": "xxxx-xx-xxxx-xxx",
"licensePlateNumber": Vehicle(licensePlateNumber)
"violationType": "XXXXXXX",
"status": "XXXXXXXX", (paid, unpaid)
"date": "YYYY-MM-DD",
"time": "HH:MM:SS",
"location": "XXXXXXXXXXX",
"videoUrl": "https://XXXX"
}

2.To get Violation Details:http://localhost:3001/violation/:id
where ':id' is replaced by Violation id.

3.To edit Violation Details:http://localhost:3001/violation/edit/:id
where ':id' is replaced by Violation id.
and the data to change is given in body as per key and value.

4.To delete Violation Details:http://localhost:3001/violation/delete/:id
where ':id' is replaced by Violation id.