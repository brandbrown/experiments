console.log("main running");

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }


sleep().then(a => {
    console.log("raw promise!");
});

class TestClass{
    constructor() {
        this._someProp = null;
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