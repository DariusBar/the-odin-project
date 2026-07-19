import { ToDoList } from "./todolist";

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
        console.log(this.toDoList.currentProject.name);
        this.currentProject.array.forEach(element => {
            console.log(element);
        });
    }
}

export { ToDoListView };