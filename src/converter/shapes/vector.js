module.exports = function (data, result) {
  const newPath = [];
  const objWidth = data.width;
  const objHeight = data.height;
  const segments = data.vectorNetwork.segments;
  let vertices = data.vectorNetwork.vertices;

  console.log(vertices);

  // Faraz - Problem here. I don't know why but it blocks when I try to do anything on vertices.
  // Check this doc: https://www.figma.com/file/6xCBaLyNHjny5mF5zaxwUE/Abracadabra-Not-working?node-id=0%3A1
  if(vertices.length !== segments.length) {
    // let popped = vertices.pop();
    // console.log(vertices);
  }

  vertices.map((vertice, key) => {
    const segment = data.vectorNetwork.segments[key];
    const thing = data.vectorNetwork.segments.find(item => {
      return item.start === key;
    });

    let boom = {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "point": `{${vertice.x/objWidth}, ${vertice.y/objHeight}}`
    }

    // The first curvePoint will have the curveTo from the last vertice
    if (key === 0) {
      const curveFrom = thing.tangentStart;
      const curveTo = data.vectorNetwork.segments[data.vectorNetwork.segments.length - 1].tangentEnd;
      boom.curveFrom = `{${(vertice.x + thing.tangentStart.x)/objWidth}, ${(vertice.y + thing.tangentStart.y)/objHeight}}`;
      boom.curveTo = `{${(vertice.x + curveTo.x)/objWidth}, ${(vertice.y + curveTo.y)/objHeight}}`;

      if (curveFrom.x === 0 && curveFrom.y === 0) {
        boom.hasCurveFrom = false;
      } else {
        boom.hasCurveFrom = true;
      }

      if (curveTo.x === 0 && curveTo.y === 0) {
        boom.hasCurveTo = false;
      } else {
        boom.hasCurveTo = true;
      }
    } else {
      const curveFrom = thing.tangentStart;
      const curveTo = data.vectorNetwork.segments[key - 1].tangentEnd;
      boom.curveFrom = `{${(vertice.x + thing.tangentStart.x)/objWidth}, ${(vertice.y + thing.tangentStart.y)/objHeight}}`;
      boom.curveTo = `{${(vertice.x + curveTo.x)/objWidth}, ${(vertice.y + curveTo.y)/objHeight}}`;

      if (curveFrom.x === 0 && curveFrom.y === 0) {
        boom.hasCurveFrom = false;
      } else {
        boom.hasCurveFrom = true;
      }

      if (curveTo.x === 0 && curveTo.y === 0) {
        boom.hasCurveTo = false;
      } else {
        boom.hasCurveTo = true;
      }
    }

    newPath.push(boom);
  });

  result.edited = true;
  result.isClosed = true;
  result.pointRadiusBehaviour = 1;
  result.points = newPath;
}
