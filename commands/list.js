const pool = require("../db");

async function listTodos(filter) {
  try {
    let query = "SELECT * FROM todos";

    if (filter === "pending") {
      query += " WHERE completed = false";
    } else if (filter === "done") {
      query += " WHERE completed = true";
    }

    query += " ORDER BY id";

    const result = await pool.query(query);

    if (result.rows.length === 0) {
      console.log("No todos found.");
      return;
    }

    result.rows.forEach((todo) => {
      console.log(`${todo.id}. ${todo.completed ? "✅" : "❌"} ${todo.task}`);
    });
  } catch (err) {
    console.log("Error:", err.message);
  }
}

module.exports = listTodos;
