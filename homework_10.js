// Зробити збірку і додати до неї 2 бібліотеки
// на Ваш розсуд

import axios from "axios";
import dayjs from "dayjs";

// 1. Використання Day.js (вивід поточної дати)
document.addEventListener("DOMContentLoaded", () => {
  const dateDisplay = document.getElementById("date");
  dateDisplay.innerText = `Сьогодні: ${dayjs().format("DD.MM.YYYY HH:mm")}`;
});

// 2. Використання Axios (отримання даних)
async function fetchUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const list = document.getElementById("users");

    response.data.slice(0, 5).forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (Email: ${user.email})`;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Error donloaded:", error);
  }
}

fetchUsers();
