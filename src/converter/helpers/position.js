module.exports = function (parent, child) {

  let xPosition = 0;
  let yPosition = 0;
  if (parent.absoluteBoundingBox) {
    if (child.absoluteBoundingBox.x > parent.absoluteBoundingBox.x) {
      xPosition = Math.abs(child.absoluteBoundingBox.x - parent.absoluteBoundingBox.x);
    }
    if (child.absoluteBoundingBox.y > parent.absoluteBoundingBox.y) {
      yPosition = Math.abs(child.absoluteBoundingBox.y - parent.absoluteBoundingBox.y);
    }
  } else {
    xPosition = child.absoluteBoundingBox.x;
    yPosition = child.absoluteBoundingBox.y;
  }

  return {
    x: xPosition,
    y: yPosition
  }
};
