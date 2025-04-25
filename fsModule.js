import fs from "fs";

//Dummy Data
const employeeData = {
    name: "Employee 1 Name",
    salary: 2000,
};

fs.writeFile(
    "employees.json",
    JSON.stringify(employeeData, null, 2),
    "utf8",
    (err) => {
        if (err) {
            console.error("There is a error while file is creating.:", err);
        } else {
            console.log("employees.json file created and data is added succesfully.");
        }
    }
);

fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) {
        console.log('The file does not read.Error:', err);
        return;
    }
    console.log(`Data is --> ${data}`);
    try {
        //we will convert to json data to the json object.
        const employee = JSON.parse(data);

        //Data updation.
        employee.salary = 2500;

        fs.writeFile('employees.json', JSON.stringify(employee, null, 2), 'utf8', (err) => {
            if (err) {
                console.error('Data is not updated. please control the file index.', err);
            } else {
                console.log('The employees salary is updated succesfully.');
            }
        });
    } catch (parseError) {
        console.error('JSON data could not be parsed. ');
    }

    fs.unlink('employees.json',(err) => {
        if(err) console.log(err);
    })
});
