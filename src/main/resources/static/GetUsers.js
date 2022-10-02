async function getUsers() {

    // отправляет запрос и получаем ответ
    const response = await fetch("/api", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        const users = await response.json();
        let rows = document.querySelector("tbody");
        users.forEach(user => {
            // добавляем полученные элементы в таблицу
            rows.append(row(user));
        });
    }

}