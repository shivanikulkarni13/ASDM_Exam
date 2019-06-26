var express = require('express');
var app = express();

var userController=function (request, response) {
  var user=[
  
            {Emp_ID:101,Emp_FName:'Rihan',Emp_LName:'Patil',Emp_Age:43,Designation:'SoftwareDevloper'},
			{Emp_ID:102,Emp_FName:'Monika',Emp_LName:'Randhe',Emp_Age:27,Designation:'TeamLeader'},
			{Emp_ID:103,Emp_FName:'Kaushal',Emp_LName:'Patil',Emp_Age:28,Designation:'ProjectManager'},
			{Emp_ID:104,Emp_FName:'Shital',Emp_LName:'Jadhav',Emp_Age:47,Designation:'Tester'},
			{Emp_ID:105,Emp_FName:'Vishal',Emp_LName:'Sharma',Emp_Age:32,Designation:'SoftwareDevloper'},
           
			];
  response.send(user);
};

app.get('/user',userController );
var server = app.listen(8000);
console.log("Listening At Port 8000");