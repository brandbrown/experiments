export default class Selectron {
    constructor() {
        
    }
    
    create(elementType) {
        return document.createElement(elementType);
    }

    find(selector) {
        return document.getElementById(selector);
    }
}