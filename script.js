// using moment.js
// create variables
let today = moment().format("MMM DD YY");
let dayOfWeek = moment().format('dddd');
let currentHour = moment().hour();
let ToDoListArray = [];

// Dom event
$("#currentDay").text(dayOfWeek + '' + today);

// create functions 
for (i = 9; i < 17; i++) {
    if (parseInt($('#' + i).attr('id')) < currentHour) {
        $('#' + i).attr('style', 'background-color: #F5F5F5');
    } else if (parseInt($('#' + i).attr('id')) > currentHour) {
        $('#' + i).attr('style', 'background-color: #CD5C5C');
    } else {
        $('#' + i).attr('style', 'background-color: #8B0000')
    }

    $('.save').on('click', function() {
        toDoListArray = [];
    
        for (i = 9; i < 1; i++) {
            let toDoListValue = $('#' + i).val();
    
            let toDoListObject = {
                toDoListHour: i,
                toDoListItem: toDoListValue
            }
    
            toDoListArray.push(toDoListObject);
    
            localStorage.setItem("toDoList", JSON.stringify(toDoListArray));
        }
    })
    
    $('#clear-button').on('click', function() {
        localStorage.clear();
        $('textarea').val('');
    })
    
    function loadToDo() {
        let storedTodo = JSON.parse(localStorage.getItem("toDos"));
        console.log(storedTodo);
    
        if (storedTodo != null) {
            for (i = 0; i < storedTodo.length; i++) {
                $('#' + storedTodo[i].todoHour).val(storedTodo[i].todoItem);
            };
        }
    }
    
}
    loadToDoList();

// create even listeners

