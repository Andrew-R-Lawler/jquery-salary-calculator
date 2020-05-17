console.log('in scripts.js');

$(document).ready(onReady);

let employees = [];
let displayMonthlyCost = 0;
let intTotalMonthlyCost = 0;

function onReady() {
    console.log('in jquery');
    $('#submitButton').on('click', handleSubmit);
    $('#list').on('click', '.deleteButton', removeEmployee);
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

    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
    monthlyCost(employees);
    appendToDom(employees);
}

function monthlyCost(array){
    console.log('in monthlyCost');
    let monthlyCostArray = [];
    for (let i = 0; i < array.length; i++) {
        const employeeSalary = array[i].annualSalary;
        let monthlyCost = employeeSalary / 12;
        monthlyCostArray.push(monthlyCost);
    }
    console.log(monthlyCostArray);
    totalMonthlyCost(monthlyCostArray)
}

function totalMonthlyCost(array) {
    console.log('in totalMonthlyCost');
    let intTotalMonthlyCost = 0;
    for (let i = 0; i < array.length; i++) {
            const element = array[i];
            intTotalMonthlyCost += element;
    }
    console.log(intTotalMonthlyCost);
    $('#monthlyCosts').empty();
    $('#monthlyCosts').append(intTotalMonthlyCost);
    redAlert(intTotalMonthlyCost);
}

function appendToDom(array){
    $('#list').empty();
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        $('#list').append(`<li>${element.firstName} ${element.lastName}; ID Number: ${element.idNumber}, Job Title: ${element.jobTitle}, Annual Salary: ${element.annualSalary} <button class = 'deleteButton'>Delete</button>`)
    }
}

function redAlert(value){
    if (value >=20000) {
        $('.costBackground').addClass('red')
    }
}

function removeEmployee() {
    $(this).parent().remove();
}