module.exports = function (data, result) {
  const newPath = [];
  const objWidth = data.width;
  const objHeight = data.height;

  console.log(data.vectorNetwork);

  data.vectorNetwork.segments.map(segment => {
    const vertice = data.vectorNetwork.vertices[segment.end];
    let boom = {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "point": `{${vertice.x/objWidth}, ${vertice.y/objHeight}}`,
      "curveFrom": `{${segment.tangentStart.x/objWidth}, ${segment.tangentStart.y/objHeight}}`,
      "curveTo": `{${segment.tangentEnd.x/objWidth}, ${segment.tangentEnd.y/objHeight}}`
    }

    const ts = segment.tangentStart;
    const te = segment.tangentEnd;

    if (ts.x > 0 || ts.y > 0 || ts.x < 0 || ts.y < 0) {
      if (te.x === 0 && te.y === 0) {
        boom.hasCurveFrom = false;
        boom.hasCurveTo = true;
      } else {
        boom.hasCurveFrom = true;
        boom.hasCurveTo = true;
      }
    } else if (ts.x === 0 && ts.y === 0) {
      if (te.x === 0 && te.y === 0) {
        boom.hasCurveFrom = false;
        boom.hasCurveTo = false;
      } else {
        boom.hasCurveFrom = true;
        boom.hasCurveTo = false;
      }
    }

    // https://www.figma.com/plugin-docs/api/HandleMirroring/
    // Figma doesn't have curveMode 3. No need for it.
    if (vertice.handleMirroring === "ANGLE") {
      boom.curveMode = 4;
    } else if (vertice.handleMirroring === "ANGLE_AND_LENGTH") {
      boom.curveMode = 2;
    } else {
      boom.curveMode = 1;
    }

    newPath.push(boom);
  });

  console.log(newPath);

  result.edited = true;
  result.isClosed = true;
  result.pointRadiusBehaviour = 1;
  result.points = newPath;
}
