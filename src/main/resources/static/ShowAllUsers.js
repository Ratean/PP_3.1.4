async function showAllUsers() {

    // отправляет запрос и получаем ответ
    const response = await fetch("/api", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const users = await response.json();
        let rows = document.getElementById("usersTablePlacement")
        users.forEach(user => {
            // добавляем полученные элементы в таблицу
            rows.append(row(user));
        });
    }
}

function row(user) {

    const tr = document.createElement("tr");
    tr.setAttribute("data-rowid", user.id);

    const idTd = document.createElement("td");
    idTd.append(user.id);
    tr.append(idTd);

    const nameTd = document.createElement("td");
    nameTd.append(user.name);
    tr.append(nameTd);

    const surnameTd = document.createElement("td");
    surnameTd.append(user.surname);
    tr.append(surnameTd);

    const ageTd = document.createElement("td");
    ageTd.append(user.age);
    tr.append(ageTd);

    const emailTd = document.createElement("td");
    emailTd.append(user.username);
    tr.append(emailTd);

    const rolesTd = document.createElement("td");
    user.roles.forEach(role => {
        const authority = role.name;
        rolesTd.innerHTML += `
        <span>${authority.substring(authority.lastIndexOf('_') + 1)}</span>
        `;
    });
    tr.append(rolesTd);

    tr.innerHTML += `
        <td>
            <button type="button" class="btn btn-info text-white" data-bs-toggle="modal" data-bs-target="#editModal" data-bs-userId="${user.id}">
                Edit
            </button>
        </td>
        <td>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal" data-bs-userId="${user.id}">
                Delete
            </button>
        </td>
    `;

    return tr;
}