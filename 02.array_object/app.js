const inputElement = document.getElementById("title")
const createBtn = document.getElementById("create")
const listElement = document.getElementById("list")

// console.log(inputElement.value)

createBtn.onclick = function () {
    listElement.innerHTML = `
            <li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span>Название</span>
          <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
          </span>
        </li>
        `
}