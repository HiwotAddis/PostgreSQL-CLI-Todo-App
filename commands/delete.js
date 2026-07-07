const pool = require("../db");

async function deleteTodo(id) {
  if (!id) {
    console.log("Please provide the todo ID.");
    return;
  }

  try {
    const result = await pool.query(
      "DELETE FROM todos WHERE id = $1 RETURNING *",
      [id],
    );

    if (result.rowCount === 0) {
      console.log("Todo not found.");
      return;
    }

    console.log("🗑️ Todo deleted successfully!");
  } catch (err) {
    console.log("Error:", err.message);
  }
}

module.exports = deleteTodo;
