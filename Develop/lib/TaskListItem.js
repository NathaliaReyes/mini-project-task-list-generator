const Component = require("./Component.js");

class TaskListItem extends Component{
    constructor(children, priority = false) {
        super(children);
        this.priority = priority;
    }

    // It's done when a `render()` method is placed on the `TaskListItem` 
    // class and returns a string of HTML following this format: `<li class="tasks-item">{INNER_HTML}</li>`.

    render() {
        let classNames = 'tasks-item';
        if (this.priority) {
        classNames += ' tasks-item-priority';
        }
        return `<li class="${classNames}">${this.renderInnerHTML()}</li>`;
    }
}

module.exports = TaskListItem;