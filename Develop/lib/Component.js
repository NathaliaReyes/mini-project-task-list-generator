class Component {
    constructor(children = []) {
        this.children = children;
    }

    render() {
        throw new Error('Child class must implement render() method');
    }

    renderInnerHTML() {
        this.children.map((child) => {
            console.log(child)
            typeof child === 'string' ? child : child.render().join('');
            
    })
    }
}

// let component = new Component(['name1', 'name2', 'name3']);
// console.log(component.renderInnerHTML());
module.exports = Component;