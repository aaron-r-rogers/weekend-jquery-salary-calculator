$(document).ready(readyNow);

let allEmployees = [];//Global array to grab employees

function readyNow() {
    console.log(`Ready now.`);
    $('#form').submit(onAddEmployee);
    //event listener for form submission
    //$(document).on('click', '.delBtn', onDeleteEmployee);
    //event listener for deleting employee
}

// function onDeleteEmployee() {
//     console.log('Deleting employee');
//     for (let employee of allEmployees)
//         if ($(this).parent().parent().hasClass(`${employee}`)){
//             allEmployees.splice()
//         }
// }

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

    appendTable(allEmployees);
}

function appendTable (allEmployees) {

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
                <td>
                    <button class="delBtn">
                    Delete
                    </button>
                </td>
            </tr>
        `)
    }//Appends inputs from form into DOM table
    clearInputs();
    calcSalaries(allEmployees);
}

function calcSalaries (allEmployees) {
    let sumOfSalaries = allEmployees.reduce((total, employee) => {
        return total + employee.annualSalary;
    }, 0)
    let monthlySalaries = sumOfSalaries/12
    let roundedMonthly = Math.round((monthlySalaries + Number.EPSILON) * 100) / 100;
    $('#monthlyOutput').empty().append(`$${roundedMonthly}`);
    //Adds all employee salaries, converts to monthly, rounds, and appends them to DOM

    if (roundedMonthly > 20000) {
        $('#totalMonthly').css('background-color', 'red');        
    }//If monthly cost exceeds $20,000, background turns red
}

function clearInputs() {
    $('#firstName').val('');
    $('#lastName').val('');
    $('#iD').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    //Empties all fields
    $('#firstName').focus();
    //Returns cursor to first name input 
} 





