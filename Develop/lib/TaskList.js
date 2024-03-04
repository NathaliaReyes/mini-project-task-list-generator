const Component = require("./Component");

class TaskList extends Component{
    constructor(children) {
        super(children);
    }

    // It's done when a `render()` method is placed on the `TaskList` class and 
    // returns a string of HTML following this format: `<ul class="tasks">{INNER_HTML}</ul>`.
    render() {
        return `<ul class="tasks">${this.renderInnerHTML()}</ul>`;
    }
}

module.exports = TaskList;