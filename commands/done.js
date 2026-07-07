const pool = require("../db");

async function markDone(id) {
  if (!id) {
    console.log("Please provide the todo ID.");
    return;
  }

  try {
    const result = await pool.query(
      `UPDATE todos
             SET completed = true
             WHERE id = $1
             RETURNING *`,
      [id],
    );

    if (result.rowCount === 0) {
      console.log("Todo not found.");
      return;
    }

    console.log("✅ Todo marked as completed!");
  } catch (err) {
    console.log("Error:", err.message);
  }
}

module.exports = markDone;
