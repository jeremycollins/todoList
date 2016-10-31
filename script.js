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



// Test todoList
// todoList.addTodo("item 1"); // Adds item 1 to the todo list
// todoList.addTodo("item 2"); // Adds item 2 to the todo list
// todoList.addTodo("item 3"); // Adds item 3 to the todo list
// todoList.toggleCompleted(0); // Marks item 1 as complete
// todoList.toggleAll(); // If all is complete, mark incomplete, else mark all complete
// End Test
