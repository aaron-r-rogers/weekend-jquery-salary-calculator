$(document).ready(readyNow);

let allEmployees = [];//Global array to grab employees

function readyNow() {
    console.log(`Ready now.`);
    $('#form').submit(onAddEmployee);
    //event listener for form submission
    $(document).on('click', '.delBtn', onDeleteEmployee);
    //event listener for deleting employee
}

function onDeleteEmployee() {
    let removal = $(this).closest('tr').find('.idNum').text();
    index = allEmployees.findIndex(function (item) {
    return item.id === removal;
    });//grabs tr at button click and assigns as variable; returns corresponding index

    allEmployees.splice(index, 1);
    //grabs specified element

    $(this).closest('tr').remove();
    //removes the row

    appendTable(allEmployees);
    calcSalaries(allEmployees);
}

// function onDeleteEmployee() {
//     console.log('Deleting employee');
//     $(this).parent().remove();
//     $(this).closest('tr').remove();
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
                <td class="idNum">${employee.iD}</td>
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
        }  
        else {
            $('#totalMonthly').css('background-color', 'white');
        }        
    }//If monthly cost exceeds $20,000, background is red

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





