

function sleep (time) {
    return new Promise((resolve) => setTimeout(() => {

        console.log("timeout over!");
        resolve()

    }, time));
}

sleep(1000).then(a => {
    console.log("raw promise!");
});

class TestClass{
    constructor() {
        this._someProp = null;
    }

    async tryItOut(time) {
        let result = await sleep(time);

        console.log("gets blocked");

        return result;
    } 

    set someProp(value) {
        if (value == "invalid") {
            this._someProp = "That was not valid."
        } else
        this._someProp = value;
    }

    get someProp() {
        return this._someProp;
    }
}

function someFunc() {
    console.log("I get called");
}