import Selectron from './selectron.js';
import Timer from './timer.js';

function startup() {
    let app = new Main();

    // clock
    app.setClock();
    setInterval(app.setClock, 1000);

}

let _butler = new Selectron();
let _timer = new Timer();

class Main {
    constructor() {
        this.timers = [];
    }

    setClock() {
        let time = new Date();
        let clock = _butler.find("clock");
        clock.innerHTML = time.toLocaleTimeString();
    }

    addTimer() {
        this.timers.push(new Timer());
    }
}

startup();


_butler.find("test").addEventListener("click", e => _timer.addTimerToPage("timerList"));
