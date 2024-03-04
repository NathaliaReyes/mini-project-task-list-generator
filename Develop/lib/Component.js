class Component {
    constructor(children = []) {
        this.children = children;
    }

    render() {
        throw new Error('Child class must implement render() method');
    }

    renderInnerHTML() {
        // return this.children.map(child =>child.toString()).join('');
        return this.children
        .map((child) => {
          if (typeof child === 'string') {
            return child;
          }
          return child.render();
        })
        .join('');
    }
    
}

// let component = new Component([2, 3456, 'name3']);
// console.log(component.renderInnerHTML());
module.exports = Component;