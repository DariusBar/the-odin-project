// Starts with an empty project

// Holds all of the information of the webpage
import { Project } from "./project.js";
import { Task } from "./task.js";

class ToDoList {
    constructor() {
        this.projectList = [new Project("defaultProject")];
        this.currentProject = this.projectList[0];
    }

    // Contains functionality for:
    // 1. Adding tasks based on user input
    // 2. Adding projects based on user input
    // 3. Motifying the information within a task
    // 4. Deleting tasks and projects based on user input

    // Checks if a project exists through checking for the name
    containsProject(projectName) {
        return this.projectList.some((project) => project.name == projectName);
    }
    // Switches between what project you'rrbreak;e on
    switchProject(projectName) {

        
        for (let i = 0; i < this.projectList.length; i++) {
            if (this.projectList[i].name == projectName) {
                // Move the currentProject to the end of the list
                let addToEnd = this.projectList.splice(i, 1);
                this.projectList.push(addToEnd[0]);
                this.currentProject = this.projectList[this.projectList.length - 1];
                break;
            }
        }

        return -1;
    }

    createTaskFromInput(name, desc, task, dueDate) {
        let newTask = new Task(name, desc, task, dueDate)
        
        return newTask;
    }

    // Creates project and populates to the list
    createProjectFromInput(name) {
        if (this.containsProject(name)) {
            // Error for project already existing
            console.log("Project Already Exists");
            return;
        }
        let newProject = new Project(name);
        this.projectList.push(newProject);
    }

    deleteTask(taskID) {
        this.currentProject.deleteTask(taskID);
    }

    deleteProject(projectName) {
        if (this.projectList.length == 1) {
            console.log("Cannot delete only project");
            return;
        }
        for (let i = 0; i < this.projectList.length; i++) {
            if (this.projectList[i].name == projectName)  {
                // Cannot delete a project if there is only one project
                // Switch to a new project
                if (this.currentProject.name == projectName) {
                    // Switches the project to the one before 
                    // the currentProject since the currentProject is always
                    // at the end
                    this.currentProject = this.projectList[this.projectList.length - 2];
                }
                this.projectList.splice(i, 1);
                return;

            }
            console.log("Project does not exist.");
        }
    }  

    // Add task to a specific project
    // Reads field information to create a task and then adds the task to the project
    addToProject(name, desc, priority, dueDate, id) {
        // Retrieve which project you're on.
        // Search for that specific project in the list
        // Check if the project already contains
        let newTask = new Task(name, desc, priority, dueDate, id);
        this.currentProject.addTask(newTask);
    }

    // Editing a task at a later date
    // Retrive the task to be edited, 
    // Edit all inputs in the task
    // 1. Search for task to be edited within the current project
    // 2. Set all variables within that task to be inputted variable
    // 3. When information in task is edited and then submitted, 
    // retrives that information and then sets it into the task 
    // information
    editTask(name, desc, priority, dueDate, id) {
        // Identifies which task to edit based on its unique id
        // Retrieve the task of that specific id from the current
        // project
        let task = this.currentProject.getTask(id);

        task.name = name;
        task.desc = desc;
        task.priority = priority;
        task.dueDate = dueDate;
    }

    editProject(name) {
        this.currentProject.name = name;
    }
}

export { ToDoList };