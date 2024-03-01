class Component {
    constructor(children = []) {
        this.children = children;
    }

    render() {
        throw new Error('Child class must implement render() method');
    }

    renderInnerHTML() {
        this.children.map((child) => 
            typeof child == 'string' ? child : child.render()).join('');
    }
}

module.exports = Component;