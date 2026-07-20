import { ToDoList } from "./todolist.js";
import { ToDoListView } from "./todolistview.js";
// Deals with the inputs that the user puts in
class ToDoListController {
    id = 0;
    constructor() {
        this.toDoList = new ToDoList();
        this.toDoListDisplay = new ToDoListView(this.toDoList);
    }

    // This class should:
    // 1. Display toDoList with view object
    // 1. Handle user to add tasks
    // 2. Handle user input to add Projects
    // 3. Handle user input to edit projects
    // 4. Handle user input to delete tasks
    // 5. Handle user input to delete projects



    // Displays entire list and allows for user interaction
    // In the final draft, in charger of creating objects
    // And adding action listeners
    list() {
        this.toDoListDisplay.display();

        // All the ineractions that the user can make
        console.log(
            "--- PROJECT INPUTS ---\n",
            "1. Add a new project\n",
            "2. Edit the name of your current project\n",
            "3. Switch Projects\n",
            "4. Delete Project\n",
            "--- TASK INPUTS ---\n",
            "5. Add a new task to the current project\n",
            "6. Edit a task\n",
            "7. Delete a task\n",
        )

        // if staments for each interaction into a different option
        let userInput = prompt("Enter your choice.");

        if (userInput == "1") {
            let projectName = prompt("Enter project name");
            this.#addProject(projectName);
        } else if (userInput == "2") {
            let projectName = prompt("Enter new project name: ");
            this.#editProject(projectName);
        } else if (userInput == "3")  {
            let projectName = prompt("Enter project name to switch to:");
            this.#switchProject(projectName);
        
        } else if (userInput == "4") {
            let projectName = prompt("Enter project name to delete");
            this.#deleteProject(projectName);
        } else if (userInput == "5") {
            let taskName = prompt("Enter new task name");
            let taskDesc = prompt("Enter task description");
            let taskPriority = prompt("Enter task Priority of High, Med, or Low");
            let taskDueDate = prompt("Enter task due date");
            // temporarily have each task id be incremental for testing
            // purposes
            let taskID = this.id;
            this.id++;
            this.#addTaskToProject(taskName, taskDesc, taskPriority, taskDueDate, taskID);
        } else if (userInput == "6") {
            let taskID = prompt("Enter id of task to edit");

            let taskName = prompt("Enter the new task name:")
            let taskDesc = prompt("Enter the new task description:")
            let taskPriority = prompt("Enter the new task priority");
            let taskDueDate = prompt("Enter the new task due date");
            this.#editTask(taskName, taskDesc, taskPriority, taskDueDate, taskID);
            
        } else if (userInput == "7") {
            let taskID = prompt("Enter id of task to delete.")
            this.#deleteTaskFromProject(taskID);
        } else {
            consoleLog("Try again.");
            this.list();
        }

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
        this.list();
    }

    #addProject(name) {
        this.toDoList.createProjectFromInput(name);
        this.#updateDOM();
    }

    #editProject(name) {
        this.toDoList.editProject(name);
        this.#updateDOM(); 
    }

    #switchProject(name) {
        this.toDoList.switchProject(name);
        this.#updateDOM();
    }

    #deleteProject(name) {
        this.toDoList.deleteProject(name);
        this.#updateDOM();
    }

    // For now, make tasks chronological in order, and 
    // make ids be chronilogical. Then when seeking 
    // to edit and delete tasks in console its based on that

    #addTaskToProject(name, desc, priority, dueDate, id) {
        this.toDoList.addToProject(name, desc, priority, dueDate, id);
        this.#updateDOM();
    }

    #deleteTaskFromProject(id) {
        this.toDoList.deleteTask(id);
        this.#updateDOM();
    }

    #editTask(name, desc, priority, dueDate, id) {
        this.toDoList.editTask(name, desc, priority, dueDate, id);
        this.#updateDOM();
    }


    
}

let test = new ToDoListController();
test.list();