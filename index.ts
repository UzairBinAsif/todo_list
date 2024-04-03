#! /usr/bin/env node

console.log("\nTodo List made by Uzair Bin Asif");

import inquirer from "inquirer";

let todo = [];
let condition = true;
while (condition) {
  let todoQuestions = await inquirer.prompt([
    {
      name: "firstQuestion",
      message: "What do you want to add in your Todo List?",
      type: "input",
    },
    {
        name: "secondQuestion",
        message: "Do you wanna add more in you Todo List?",
        type: "confirm",
        default: "true",
    }
  ]);
  todo.push(todoQuestions.firstQuestion)
  console.log(todo);
  condition = todoQuestions.secondQuestion
}
