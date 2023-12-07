/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  // this creates a constructor function where todos are initialised to an empty array 

  add(todo) {
    this.todos.push(todo);
  }
  // this adds the new todo to the todos array using `push` operation

  remove(indexOfTodo) {
    if (indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
  }
  // `Important`- Here if the index of todo is less than the length of the todos array, it splices the mentioned indexOfTodo only upto 1 place using `splice` method  

  update(index, updatedTodo) {
    if (index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }
  // this updates the particular index with the updated todo 

  getAll() {
    return this.todos;
  }
  // it returns all the todos so far obtained 

  get(indexOfTodo) {
    if (indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    else{
      return null;
    }
  }
  // it returns a particular todo with the mentioned indexOfTodo
  // NOTE- We have to return `NULL` instead of throwing error if incase indexOfTodo > Length of todos array

  clear() {
    this.todos = [];
  }
  // this again sets the todos array to an empty array
}

module.exports = Todo;
