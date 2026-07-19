import { ToDoList } from "./todolist.js";
import { ToDoListView } from "./todolistview.js";
// Deals with the inputs that the user puts in
class ToDoListController {
    constructor() {
        this.toDoList = new ToDoList();
        this.toDoListDisplay = new ToDoListView(this.toDoList.currentProject);
    }

    // This class should:
    // 1. Display toDoList with view object
    // 1. Handle user to add tasks
    // 2. Handle user input to add Projects
    // 3. Handle user input to edit projects
    // 4. Handle user input to delete tasks
    // 5. Handle user input to delete projects



    // Displays entire list and allows for user interaction
    list() {
        this.toDoListDisplay.display();

        // All the ineractions that the user can make
        console.log("testing...")

        // if staments for each interaction into a different option
        // !!! -- WHEN I CREATE DOM INTERACTION -- !!! //
        // Each new task object will have an action listener 
        // attatched to each button within the task, that will

        // Each new project will also have buttons with action
        // actions listeners attatched to methods within this
        // class
    }

    // Methods that are called when a user interacts with a prompt
    // with in the list function
    // Should also create the dom element within here
    #updateDOM() {

    }

    #addProject(name) {
        this.toDoList.createProjectFromInput(name);
    }

    #editProject(name, desc, priority, dueDate, id) {
        this.toDoList.editTask(name, desc, priority, dueDate, id);
    }

    #addTaskToProject(name, desc, priority, dueDate, id) {
        this.toDoList.addToProject(name, desc, priority, dueDate, id);
    }

    #deleteTaskFromProject(id) {
        this.toDoList.deleteTask(id);
    }

    #editTask(name, desc, priority, dueDate, id) {
        this.toDoList.editTask(name, desc, priority, dueDate, id);
    }


    
}

let test = new ToDoListController();
test.list();