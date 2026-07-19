// Starts with an empty project

// Holds all of the information of the webpage
import { Project } from "./project";
import { Task } from "./task";

class ToDoList {
    constructor() {
        this.projectList = [new Project("defaultProject")]
        this.currentProject = projectList[0];
    }

    // Contains functionality for:
    // 1. Adding tasks based on user input
    // 2. Adding projects based on user input
    // 3. Motifying the information within a task
    // 4. Deleting tasks and projects based on user input

    // Checks if a project exists through checking for the name
    containsProject(projectName) {
        return projectList.some((project) => project.name == projectName);
    }
    // Switches between what project you're on
    switchProject(projectName) {

        
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].name = projectName) {
                currentProject = projectList[i];
                break;
            }
        }
    }

    createTaskFromInput(name, desc, task, dueDate) {
        let newTask = new Task(name, desc, task, dueDate)
        
        return newTask;
    }

    // Creates project and populates to the list
    createProjectFromInput(name) {
        if (containsProject(projectName)) {
            // Error for project already existing
            console.log("Project Already Exists");
            return;
        }
        let newProject = new Project(name);
        toDoList.add(newProject);
    }

    deleteTask(taskID) {
        this.currentProject.deleteTask(taskID);
    }

    deleteProject(projectName) {
        for (let i = 0; i < this.projectList.length; i++) {
            if (this.projectList[i].name == projectName)  {
                this.projectList.splice(i, 1);
                break;
            }
        }

        console.log("Project does not exist");
    }  

    // Add task to a specific project
    // Reads field information to create a task and then adds the task to the project
    addToProject(name, desc, priority, dueDate, id) {
        // Retrieve which project you're on.
        // Search for that specific project in the list
        // Check if the project already contains
        let newTask = new Task(name, desc, priority, dueDate, id);
        currentProject.addTask(newTask);
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
        let task = currentProject.getTask(id);

        task.name = name;
        task.desc = desc;
        task.priority = priority;
        task.dueDate = dueDate;
    }
}

export { ToDoList };