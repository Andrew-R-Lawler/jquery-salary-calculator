console.log('in scripts.js');

$(document).ready(onReady);

let employees = [];

function onReady() {
    console.log('in jquery');
    $('#submitButton').on('click', handleSubmit)
    $('#submitButton').on('click', monthlyCost)
}

function handleSubmit(){
    console.log('in handleSubmit');
    
    let newEmpObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val(),
    };
    employees.push(newEmpObject);
    console.log(newEmpObject);
    console.log(employees);
}

function monthlyCost(){
    console.log('in monthlyCost');
    
}