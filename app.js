const addTodo = require("./commands/new");
const listTodos = require("./commands/list");
const markDone = require("./commands/done");

const args = process.argv.slice(2);

const command = args[0];
const value = args.slice(1).join(" ");

switch (command) {
  case "--new":
    addTodo(value);
    break;
  case "--list":
    listTodos(args[1]);
    break;
  case "--done":
    markDone(args[1]);
    break;

  default:
    console.log("Unknown command.");
}
