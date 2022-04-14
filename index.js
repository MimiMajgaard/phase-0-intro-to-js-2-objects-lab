const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway', 
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = '12 Broadway'
    employee[key] = value;
    return employee;

}
    
function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee[key]; 
    return newEmployee; 

}


function destructivelyDeleteFromEmployeeByKey(employee, key){
    const newEmployee = employee
    newEmployee[key] = undefined;
    return newEmployee;
    
};










