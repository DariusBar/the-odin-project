import { ToDoList } from "./todolist.js";

// Controls the display of a to do list
class ToDoListView {
    // Displays the current project and each 
    // task within that project
    constructor(toDoList) {
        this.toDoList = toDoList;
    }


    // displays the current project name
    // with all the tasks within the projects underneath it
    display() {
        console.log("All Projects: ");
        this.toDoList.projectList.forEach(element => {
            console.log(element.name);
        });
        console.log(this.toDoList.projectList);
        console.log("Current Project: " + this.toDoList.currentProject.name);
        this.toDoList.currentProject.taskList.forEach(element => {
            console.log(element);
        });
    }
}

export { ToDoListView };