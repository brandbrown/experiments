

// build a game


document.onkeydown = function(evt) {
    evt = evt || window.event;


    let hero = document.getElementById("moveMe");
    

    let heroStyle = hero.currentStyle || window.getComputedStyle(hero);

    let moveAttr = getMoveAttr(evt.keyCode);
    let finalValue = getFinalValue(evt.keyCode, parseInt(heroStyle[moveAttr]));

    console.log("key is being pressed", evt.keyCode, finalValue);

    animate('moveMe', moveAttr, finalValue, 10);
   
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
        "38": baseValue + 5,
        "40": baseValue - 5,
        "37": baseValue - 5,
        "39": baseValue + 5
    };

    return finalValues[keyCode];
}

function animate(id, styleAttr, finalValue, duration, callback) {
    var ele = document.getElementById(id),
      startTime = +new Date,
      delta = null,
      req = null;
  
    (function timeout() {
      let elapsedTime = +new Date - startTime;
  
      if (elapsedTime >= duration) {
        cancelAnimationFrame(req);
        ele.style[styleAttr] = finalValue + 'px';
        if (typeof callback !== 'undefined') {
          callback();
        }
        return;
      } else {
        delta = finalValue / duration;
        ele.style[styleAttr] = delta * elapsedTime + 'px';
      }
  
      req = requestAnimationFrame(timeout);
    })();
  }
//   animate('moveMe', 'marginLeft', 250, 1000, function() {
//     animate('moveMe', 'marginTop', 250, 1000);
//   });