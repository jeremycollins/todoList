// Create todoList object
var todoList = {
    todos: [],
    displayTodos: function() {  // Show the todo list
        console.log("My Todos", this.todos);
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
    }
};
// End todoList object
