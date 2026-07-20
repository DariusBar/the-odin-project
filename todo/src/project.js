
import { isAfter, isThisSecond } from "date-fns";
class Project {
    constructor(name) {
        // Sorted by due date
        this.taskList = [];
        this.name = name;
    }

    // Adds a task to the list
    // Add 
    addTask(task) {
        // Push the task to the
        // end of the list
        this.taskList.push(task);

        // Sortz list by date
        this.taskList.sort((x, y) => isAfter(x.dueDate, y.dueDate));
    }

    // Deletes a task from the list
    deleteTask(taskID) {
        // Finds the task within the list

        // Iterate through the array until
        // you find a task with the matching id to
        // the task
        for (let i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id == taskID)  {
                this.taskList.splice(i, 1);
                break;
            }
        }

        console.log("Task does not exist");
    }

    // Checks if a specific project contains a certain task
    containsTask(taskID) {
        return this.taskList.some((task) => task.id == taskID);
    }

    // Returns the object of a task with this specific id
    getTask(taskID) {   
        if (this.containsTask(taskID)) {
            return this.taskList.find((task) => task.id == taskID);
        }   
    }

}

export { Project };