// build a game

document.onkeydown = function(evt) {
    evt = evt || window.event;

    let hero = document.getElementById("moveMe");
    let heroStyle = hero.currentStyle || window.getComputedStyle(hero);
    let moveAttr = getMoveAttr(evt.keyCode);
    let finalValue = getFinalValue(evt.keyCode, parseInt(heroStyle[moveAttr]));

    console.log("key is being pressed", evt.keyCode, finalValue);

    requestAnimationFrame(() => hero.style[moveAttr] = finalValue + 'px');
};

function getMoveAttr(keyCode) {
    let attrDict = {
        "38": "marginTop",
        "40": "marginTop",
        "37": "marginLeft",
        "39": "marginLeft"
    };

    return attrDict[keyCode];
}

function getFinalValue(keyCode, baseValue) {
    let finalValues = {
        "38": baseValue - 15,
        "40": baseValue + 15,
        "37": baseValue - 15,
        "39": baseValue + 15
    };

    return finalValues[keyCode];
}