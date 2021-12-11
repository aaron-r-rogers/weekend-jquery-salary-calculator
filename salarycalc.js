$(document).ready(readyNow);

let allEmployees = [];//Global array to grab employees

function readyNow() {
    console.log(`Ready now.`);
    $('#form').submit(onAddEmployee);//event listener for form submission
}

function onAddEmployee(event) {
    event.preventDefault();//stops page refresh

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let iD = Number($('#iD').val());
    let title = $('#title').val();
    let annualSalary = Number($('#annualSalary').val());
    //Variables created for values of input fields

    let newEmployee = {
        firstName: firstName,
        lastName: lastName,
        iD: iD,
        title: title,
        annualSalary: annualSalary
    };
    console.log('New employee', newEmployee);
    //Values of input fields --> object per employee

    allEmployees.push(newEmployee);
    console.log(allEmployees);
    //Newly created employee object added to global array allEmployees

    $('#tableBody').empty();
    //Empties table body each time new employee is added
    //to prevent duplicate rows in DOM

    for (let employee of allEmployees) {
        $('#tableBody').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.iD}</td>
                <td>${employee.title}</td>
                <td>$${employee.annualSalary}</td>
            </tr>
        `)
    }
}





