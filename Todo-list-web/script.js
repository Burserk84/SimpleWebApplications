/**
 * This script manages a simple task list application using DOM manipulation.
 * It allows users to add, view, edit, complete, and delete tasks.
 *
 * - 'add' button: Prompts the user to enter a task and appends it to the task list.
 * - 'tasks' button: Displays an alert with the current list of tasks.
 * - 'edit' button: Prompts the user to select a task to edit and updates it with new text.
 * - 'complete' button: Marks a selected task as complete by appending "[complete]" to it.
 * - 'delete' button: Removes a selected task from the list.
 */

var add = document.getElementById("add");
var tasks = document.getElementById("tasks");
var activities = document.querySelector(".activities");
var edit = document.getElementById("edit");
var complete = document.getElementById("complete");
var del = document.getElementById("delete");

add.addEventListener("click", function () {
  var task = window.prompt("Enter your task:");
  var tag = document.createElement("p");
  var textNode = document.createTextNode(task);
  tag.appendChild(textNode);
  activities.appendChild(tag);
});

tasks.addEventListener("click", function () {
  var taskList = "";
  let index = 0;
  activities.childNodes.forEach(function (node) {
    if (node.nodeType === 1) {
      index += 1;
      taskList += index + "-" + node.textContent + "\n";
    }
  });

  alert(taskList.trim());
});

edit.addEventListener("click", function () {
  var which = window.prompt("Which task do you want to change: ");
  var change = window.prompt("what do you want to change it to?!");
  var index = parseInt(which) - 1;

  if (index >= 0 && index < activities.children.length) {
    activities.children[index].textContent = change;
  } else {
    alert("Invalid task number!");
  }
});

complete.addEventListener("click", function () {
  var which = window.prompt("Which task do you want to assign complete: ");
  var index = parseInt(which) - 1;

  if (index >= 0 && index < activities.children.length) {
    activities.children[index].textContent += " [complete] ";
  } else {
    alert("Invalid task number!");
  }
});

del.addEventListener("click", function () {
  var which = window.prompt("Which task do you want to delete: ");
  var index = parseInt(which) - 1;

  if (index >= 0 && index < activities.children.length) {
    activities.children[index].remove();
  }
});
