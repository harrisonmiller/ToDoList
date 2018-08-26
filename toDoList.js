/* Harrison Miller
Javascript for toDoList.htm */

    $(document).ready(function(){

        // Allows the user to enter their input by clicking the add button
        $("#addButton").click(function(){
            newTaskElement();
        });

        // Allows user to enter their input with the enter key
        $("#txbNewTask").keypress(function(e){
            if(e.which == 13)
                $("#addButton").click();
        });
    });

    // Adds the new task to the to do list
    function newTaskElement(){

        // Creates list element and its properties
        var taskObject = $(document.createElement("li"));
        $(taskObject).append(createCheckBox());
        $(taskObject).append(createTaskStringLabel());
        $(taskObject).append(createDeleteButton());
        $(taskObject).append(createVertLine());
        $(taskObject).append(createEditButton());

        // Adds the taskObject to the taskList and clears the txbNewTask value
        $("#taskList").append(taskObject);
        $("#txbNewTask").val("");
    }

    function createCheckBox(){
        var checkBox = $(document.createElement("input"));
        $(checkBox).attr("type", "checkBox");
        $(checkBox).attr("id", "listCheckBoxes");
        $(checkBox).change(function(){
            checkBoxHandler($(this).parent());
        });
        return checkBox;
    }

    function createTaskStringLabel(){
        var taskStringLabel = $(document.createElement("label"));
        $(taskStringLabel).text($('#txbNewTask').val());
        $(taskStringLabel).attr("contenteditable", false);
        $(taskStringLabel).attr("id", "txbTaskString");
        return taskStringLabel;
    }

    function createEditButton(){
        var editButton = $(document.createElement("button"));
        $(editButton).text("edit");
        $(editButton).attr("id", "editButton");
        $(editButton).click(function(){
            editTask($(this).parent());
        });
        return editButton;
    }

    function createVertLine(){
        var vertLine = $(document.createElement("label"));
        $(vertLine).text("|");
        $(vertLine).attr("id", "vertLine");
        return vertLine;
    }

    function createDeleteButton(){
        var deleteButton = $(document.createElement("button"));
        $(deleteButton).text("delete");
        $(deleteButton).attr("id", "deleteButton");
        $(deleteButton).click(function(){
            deleteTask($(this).parent());
        });
        return deleteButton;
    }

    // Puts a line through the task if it is checked
    function checkBoxHandler(taskObject){
        var editTaskString = $(taskObject).find("#txbTaskString");
        if($(taskObject).find("#listCheckBoxes").is(":checked")){
            $(editTaskString).css("text-decoration", "line-through");
        }
        else{
            $(editTaskString).css("text-decoration", "none");
        }
    }

    // Function assigned to the edit button to edit tasks
    function editTask(taskObject) {
        var editTaskString = $(taskObject).find("#txbTaskString");
        $(editTaskString).attr("contenteditable", true);
        $(editTaskString).css("border", "1.5px solid black");
        $(editTaskString).keypress(function(e){
            if(e.which == 13){
                $(editTaskString).attr("contenteditable", false);
                $(editTaskString).css("border", "none");
            }
        });
    }

    // Function assigned to the delete button to delete tasks
    function deleteTask(taskObject){
        $(taskObject).remove();
    }
