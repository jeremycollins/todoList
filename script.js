// Create todoList object
var todoList = {
    todos: [],

    // Add an item to the todo list
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },

    // Change a todo list item
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },

    // Delete an item from the todo list
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },

     // Toggles todos as complete/incomplete
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;

    this.todos.forEach(function(todo) {
        if (todo.completed === true) {
            completedTodos++;
        }
    });

        this.todos.forEach(function(todo) {
            // If everything's true make everything false.
            if (completedTodos === totalTodos) {
                todo.completed = false;
                // Otherwise make everything true.
            } else {
                todo.completed = true;
            }
        });
    }
};

// On click runs functions for displayTodos, toggleAll, addTodo, changeTodo, and deleteTodo
var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        view.displayTodos();
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

// Create view object to render Todo list to screen
var view = {
    displayTodos: function() {
        var todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";     // Clears out list before adding new items

        todoList.todos.forEach(function(todo, position) {
            var todoLi = document.createElement("li");
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x)" + todo.todoText;
            } else {
                todoTextWithCompletion = "( )" + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
    },
    
    // Created delete buttons for each todo item
    createDeleteButton: function() {
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";
        return deleteButton;
    },
    setUpEventListeners: function() {
        var todosUl = document.querySelector("ul");

        todosUl.addEventListener("click", function(event) {
            // Get the element that was clicked on.
            var elementClicked = event.target;

            // Check if element clicked is a delete button.
            if (elementClicked.className === "deleteButton") {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();
