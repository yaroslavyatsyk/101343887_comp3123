var http = require("http");

//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");
let employees = require('./Employee');

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8082

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to Lab Exercise</h1>");
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format

          
           
            res.write(JSON.stringify(employees) + "\n");

          
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            
            let array = [];

            for(let employee of employees) {
                array.push(employee.firstName + " " + employee.lastName);
            }

            array.sort();

            res.write(JSON.stringify(array));
            
            
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            
            let sum = 0;

            for(let employee of employees) {
                sum += employee.Salary;
            }

            res.write(`Total salary: ${sum}`);

    }
    res.end();
    }
})

server.listen(port, (error) => {
    if(error) {
        console.log("Server : " + err)
        return
    }
    console.log(`Server started at http://localhost:${port}/`);
})