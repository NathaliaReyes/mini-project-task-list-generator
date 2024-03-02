const Component = require("./Component.js");
const { formatDate } = require('./date.js');

class Header extends Component{
    constructor() {
        super();
    }

    render() {
        return `<header><h1>Todo Today</h1>
        <p>${formatDate(new Date())}</p></header>`
    }
}

module.exports = Header;