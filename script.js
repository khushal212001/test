let form = document.getElementById("input-form");
let input = document.getElementById("todo-input");
let listContainer = document.querySelector(".todo-list-container");

let state = {
    todos: [],
};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!input.value.trim()) {
        alert("Input is required!");
        return;
    }
    state.todos.push({
        id: Math.floor(Math.random() * 1000000),
        todo: input.value,
    });
    renderTodos();
    input.value = "";
});

/**
 * @description This function checks the todos array from state object and renders a todoContainer for each of the element from that array
 * @returns {number}
 */
function renderTodos() {
    listContainer.innerHTML = "";
    state.todos.forEach((todoObject) => {
        let todoContainer = document.createElement("div");
        todoContainer.className =
            "d-flex justify-content-between align-items-center my-2";
        let todoTitle = document.createElement("h5");
        todoTitle.className = "m-0";
        todoTitle.innerText = todoObject.todo;
        todoContainer.append(todoTitle);
        let deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger";
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", function (e) {
            handleDelete(todoObject.id);
        });
        todoContainer.append(deleteButton);
        listContainer.append(todoContainer);
    });
}

function handleDelete(id) {
    let index = state.todos.findIndex((todo) => todo.id === id);
    state.todos.splice(index, 1);
    renderTodos();
}