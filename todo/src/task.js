class Task {
    #id = null;

    constructor(name, desc, priority, dueDate, id) {
        this.name = name;
        this.desc = desc;
        this.priority = priority;
        this.dueDate = dueDate;
        // Also has a uniqueID, used for
        // deletion and editing task
        this.id = id;
    }

    // get id() {
    //     return this.id;
    // }

    editTask(name, desc, priority, dueDate) {
        this.name = name;
        this.desc = desc;
        this.priority = priority;
        this.dueDate = dueDate;
    }
}

export { Task };