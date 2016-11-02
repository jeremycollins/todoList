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

    // Get number of completed todos.
        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
        }
    }

    // If everything's true, make everything false.
        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
    // Otherwise make everything true
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
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
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
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
        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement("li");
            var todo = todoList.todos[i];
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( )" + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};
