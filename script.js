// Create todoList object
var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log("Your todo list is empty!");
        } else {
            console.log("My Todos:");
            for (var i = 0; i < this.todos.length; i++) {
                console.log(this.todos[i].todoText);
            }
        }
    },
    addTodo: function(todoText) {   // Add an item to the todo list
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {  // Change a todo list item
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {    // Delete an item from the todo list
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {   // Toggles todos as complete/incomplete
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};
// End todoList object
