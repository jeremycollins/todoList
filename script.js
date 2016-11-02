// Create todoList object
var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log("Your todo list is empty!");
        } else {
            console.log("My Todos:");
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log("(x)", this.todos[i].todoText);
                } else {
                    console.log("( )", this.todos[i].todoText);
                }
            }
        }
    },

    // Add an item to the todo list
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },

    // Change a todo list item
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },

    // Delete an item from the todo list
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

     // Toggles todos as complete/incomplete
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
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

    // Displays the Todo List
        this.displayTodos();
    }
};

// On click runs functions for displayTodos, toggleAll, addTodo, changeTodo, and deleteTodo
var handlers = {
    displayTodos: function() {
        todoList.displayTodos();
    },
    addTodo: function() {
        var addTodoTextInput = document.getElementById("addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
    },
    changeTodo: function() {
        var changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        var changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
    },
    deleteTodo: function() {
        var deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
    },
    toggleCompleted: function() {
        var toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
    },
    toggleAll: function() {
        todoList.toggleAll();
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
