function sendAlert(message) {
  alert(message);
}

function addTodoItem() {
  var todo = document.getElementById("todo-item");

  this.sendAlert(todo.value);

  todo.value = null
}
