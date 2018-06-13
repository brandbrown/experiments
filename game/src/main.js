// build a game

document.onkeydown = function(evt) {
    evt = evt || window.event;

    let hero = document.getElementById("moveMe");
    let curTransform = new WebKitCSSMatrix(window.getComputedStyle(hero).webkitTransform);
    let x = curTransform.m41 + "px";
    let y = curTransform.m42 + "px";

    switch (evt.keyCode) {
        case 37:
            x = incrementWithPx(curTransform.m41, -15);
            break;
        case 39:
            x = incrementWithPx(curTransform.m41, 15);
            break;
        case 38:
            y = incrementWithPx(curTransform.m42, -15);
            break;
        case 40:
            y = incrementWithPx(curTransform.m42, 15);
            break;
    }

    hero.style["transform"] = "translate(" + x + "," + y + ")";
};

function incrementWithPx(value, increment) {
    return (value + increment) + "px";
}