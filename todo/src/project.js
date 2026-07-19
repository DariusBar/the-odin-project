
import { isAfter, isThisSecond } from "date-fns";
class Project {
    constructor(name) {
        // Sorted by due date
        this.toDoList = [];
        this.name = name;
    }

    // Adds a task to the list
    // Add 
    addTask(task) {
        // Push the task to the
        // end of the list
        this.toDoList.push(task);

        // Sortz list by date
        this.toDoList.sort((x, y) => isAfter(x.dueDate, y.dueDate));
    }

    // Deletes a task from the list
    deleteTask(taskID) {
        // Finds the task within the list

        // Iterate through the array until
        // you find a task with the matching id to
        // the task
        for (let i = 0; i < this.toDoList.length; i++) {
            if (this.todoDoList[i].id == taskID)  {
                this.toDoList.splice(i, 1);
                break;
            }
        }

        console.log("Task does not exist");
    }

    // Checks if a specific project contains a certain task
    containsTask(taskID) {
        return this.toDoList.some((task) => task.id == taskID);
    }

    // Returns the object of a task with this specific id
    getTask(taskID) {   
        if (this.containsTask(taskID)) {
            return this.toDoList.find((task) => task.id == taskID);
        }   
    }

}

export { Project };