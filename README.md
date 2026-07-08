# Todo CLI Application

A simple command-line Todo application built with Node.js and PostgreSQL.  
It supports CRUD operations: create, read, update, and delete todos directly from the terminal.

## Features

- Add new todo items
- List all, pending, or completed todos
- Mark todos as completed
- Delete todos
- PostgreSQL database integration

---

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd todo-cli
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create PostgreSQL Database

```bash
CREATE DATABASE todo_cli;
```

### 4. Create the todos table

```bash
CREATE TABLE todos(
    id SERIAL PRIMARY KEY,
    task TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5. Configure environment variables

```bash
DB_USER=postgres
DB_HOST=localhost
DB_NAME=todo_cli
DB_PASSWORD=your_password
DB_PORT=5432
```

## Usage

### Add a new todo

```bash
node app.js --new "Learn PostgreSQL"
```

### List todos

- Show all todos:

```bash
node app.js --list all"
```

- Show pending todos:

```bash
node app.js --list pending"
```

- Show completed todos:

```bash
node app.js --list done"
```

### Mark a todo as completed

```bash
node app.js --done <id>"
```

### Delete a todo

```bash
node app.js --delete <id>"
```

## Tech Stack

- Node.js
- PostgreSQL
- pg (PostgreSQL client for Node.js)
- dotenv
