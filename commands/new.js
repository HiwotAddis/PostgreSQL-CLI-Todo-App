const pool = require("../db");

async function addTodo(task) {
  if (!task) {
    console.log("Please provide a task.");
    return;
  }

  try {
    await pool.query("INSERT INTO todos(task) VALUES($1)", [task]);

    console.log("✅ Todo added successfully!");
  } catch (err) {
    console.log("Error:", err.message);
  }
}

module.exports = addTodo;
