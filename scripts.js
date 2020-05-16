console.log('in scripts.js');

$(document).ready(onReady);

let employees = [];
let displayMonthlyCost = 0;
let intTotalMonthlyCost = 0;

function onReady() {
    console.log('in jquery');
    $('#submitButton').on('click', handleSubmit);
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
    if (intTotalMonthlyCost > 20000) {
        $('#costBackground').addClass('red');
    }
    else{

    }
}

function appendToDom(value){
    $('#monthlyCosts').empty();
    $('#monthlyCosts').append(value)
}