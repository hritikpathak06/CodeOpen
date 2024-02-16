import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CompilerState {
  fullCode: {
    html: string;
    css: string;
    javascript: string;
  };
  currentLanguage: "html" | "css" | "javascript";
}

const initialState: CompilerState = {
  fullCode: {
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Todo List</h1>
    <input type="text" id="todoInput" placeholder="Enter a new todo">
    <button id="addTodoBtn">Add Todo</button>
    <ul id="todoList"></ul>
    <script src="script.js"></script>
</body>
</html>

    `,
    css: `
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      text-align: center;
  }
  
  h1 {
      color: #333;
  }
  
  ul {
      list-style-type: none;
      padding: 0;
  }
  
  li {
      margin-bottom: 10px;
  }
  
  button {
      padding: 5px 10px;
      margin-left: 10px;
      cursor: pointer;
  }
  
    `,
    javascript: `
const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", addTodo);

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText) {
        const li = document.createElement("li");
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInput.value = "";
        li.addEventListener("click", () => {
            li.remove();
        });
    }
}

    `,
  },
  currentLanguage: "html",
};

const compilerSlice = createSlice({
  name: "Compiler",
  initialState,
  reducers: {
    updateCurrentLanguage: (
      state,
      action: PayloadAction<CompilerState["currentLanguage"]>
    ) => {
      state.currentLanguage = action.payload;
    },
    updateCodeValue: (state, action: PayloadAction<string>) => {
      state.fullCode[state.currentLanguage] = action.payload;
    },
  },
});

export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions;

export default compilerSlice.reducer;
