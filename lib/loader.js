var imageArray = [];
var img = new Image();


for(var i=0; 52>i; i++){
  let type = "clubs";
  let num = i;
  if (i>=13 && i<=25) {
    num -= 13;
    type = "diamonds";
  } else if (i>=26 && i<=38) {
    num -= 26;
    type = "hearts";
  } else if (i>=39) {
    num -= 39;
    type = "spades";
  }
  imageArray.push(`${type}${num+2}.png`);
}

module.exports = imageArray;
