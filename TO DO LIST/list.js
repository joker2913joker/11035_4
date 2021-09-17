let todo = document.querySelector("#todo");
let submitBtn = document.querySelector("#submitBtn");
let tbody = document.querySelector("#tbody");


submitBtn.addEventListener('click', () => {
    let new_row = document.createElement("tr");
    let new_todo = document.createElement("td");

    let new_delete = document.createElement("td");

    new_todo.innerHTML = todo.value; 
    new_delete.innerHTML ='<button>DEL</button>';

    new_row.appendChild(new_todo);
    new_row.appendChild(new_delete);

    tbody.appendChild(new_row);

    new_delete.addEventListener("click", function() {
    new_row.remove();
})
  
    todo.value = "";

})