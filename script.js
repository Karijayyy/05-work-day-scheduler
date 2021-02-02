// using moment.js
// create variables
let currentHour = moment().hour();
let dayOfWeek = moment().format('dddd');
let today = moment().format("MM DD YY");
let ToDoListArray = [];

$("#currentDay").text(dayOfWeek + ' ' + today);

// create functions changing colors 
for (i = 9; i < 18; i++) {
    if (parseInt($('#' + i).attr('id')) < currentHour) {
        $('#' + i).attr('style', 'background-color: #F5F5F5');
    } else if (parseInt($('#' + i).attr('id')) > currentHour) {
        $('#' + i).attr('style', 'background-color: #F5F5DC');
    } else {
        $('#' + i).attr('style', 'background-color: #FFE4E1')
    }
}
// saves array 
$('.save').on('click', function () {
    toDoListArray = [];
    console.log("toDoLisArray")

    for (i = 9; i < 18; i++) {
        let todoValue = $('#' + i).val();

        let todoObject = {
            todoHour: i,
            todoItem: todoValue
        }

        toDoListArray.push(todoObject);
// adds response to local storage
        localStorage.setItem("todo", JSON.stringify(toDoListArray));
        // console.log(localStorage)
    }
})
// clear out local storage
$('#clear-button').on('click', function () {
    localStorage.clear();
    $('textarea').val('');
})
//show to do list
function loadTodo() {
    let storedTodo = JSON.parse(localStorage.getItem("todo"));
    console.log(storedTodo);

    if (storedTodo !== null) {
        for (i = 0; i < storedTodo.length; i++) {
            $('#' + storedTodo[i].todoHour).val(storedTodo[i].todoItem);
        };
    }
    // console.log(loadToDoList)
}
loadTodo();
