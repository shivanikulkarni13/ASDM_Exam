var http=require('http');   

var Company ={
    
	
	Emp_ID:101,
	Emp_FName:'Rihan',
	Emp_LName:'Patil',
	Emp_Age:43,
	Designation:'SoftwareDevloper'
};

var count=45;
count++;
var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(Company));
};
var server=http.createServer(controller);
server.listen(7000);
console.log("listening on port 7000");