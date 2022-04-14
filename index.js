const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway', 
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;

}

function destructivelyUpdateFromEmployeeByKey(employee, key, value){
    employee.streetAddress = '12 Broadway'
    employee[key] = value;
    return employee;

}
    
function deleteFromEmployeeByKey(employee, key, value){
    delete employee.name; 
    employee[key] = value;
    return employee; 

}


function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    const newEmployee = destructivelyDeleteFromEmployeeByKey(employee, value);
    
}










//spread operator: let objClone = { ...obj };