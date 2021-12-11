$(document).ready(readyNow);

function readyNow() {
    console.log(`Ready now.`);
    $('#form').submit(onAddEmployee);
}

function onAddEmployee(event) {
    event.preventDefault();
    console.log('employee added')

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let iD = Number($('#iD').val());
    let title = $('#title').val();
    let annualSalary = Number($('#annualSalary').val());

    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        iD: iD,
        title: title,
        annualSalary: annualSalary
    };
    console.log('New employee', newEmployee);
}