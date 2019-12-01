module.exports = function (parent, child) {

  let xPosition = 0;
  let yPosition = 0;
  if (parent.x) {
    if (child.x > parent.x) {
      xPosition = Math.abs(child.x - parent.x);
    }
    if (child.y > parent.y) {
      yPosition = Math.abs(child.y - parent.y);
    }
  } else {
    xPosition = child.x;
    yPosition = child.y;
  }

  return {
    x: xPosition,
    y: yPosition
  }
};
