import Selectron from './selectron.js';

let _butler = new Selectron();

export default class Timer {
    constructor() {
        this.name = '';
        this.startTime = '0';
    }

    addTimerToPage(selector) {
        // add new timer by adding item to list
        let timerList = _butler.find(selector);
        let newTimer = _butler.create("li");
        newTimer.innerHTML = "<p>I want to be a timer some day!</p>";
    
        timerList.appendChild(newTimer);
    }
}