const Component = require("./Component.js");

class TaskListItem extends Component{
    constructor(children, priority) {
        super(children);

        this.priority = priority;
    }

    // It's done when a `render()` method is placed on the `TaskListItem` 
    // class and returns a string of HTML following this format: `<li class="tasks-item">{INNER_HTML}</li>`.

    render() {
        
        if(this.priority === true) {
            return `<li class="task-item-priority">
                {INNER-HTML}
            </li>`;
        } else {
            return `<li class="task-item">
                {INNER-HTML}
            </li>`;
        }
    }
}