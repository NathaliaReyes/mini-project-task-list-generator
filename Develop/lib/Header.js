const Component = require("./Component.js");

class Header extends Component{
    constructor() {
        super();
    }

    render() {
        
        return `<header><h1>Todo Today</h1><p>{DATE-HERE}</p></header>`
    }
}