const parse = require("d-path-parser");

module.exports = function (data, result) {
  const newPath = [];
  const objWidth = data.absoluteBoundingBox.width;
  const objHeight = data.absoluteBoundingBox.height;

  /*

  There's a problem with relativeTransform as it keeps the original size of the Object

  absoluteBoundingBox: { x: -1543, y: 137, width: 30, height: 30 },
  preserveRatio: true,
  constraints: { vertical: 'TOP', horizontal: 'LEFT' },
  relativeTransform: [ [ 0.05000000074505806, 0, 38 ], [ 0, -0.05000000074505806, 573 ] ],
  size: { x: 600, y: 600 },
  fills: [ { blendMode: 'NORMAL', type: 'SOLID', color: [Object] } ],
  fillGeometry: [
    {
      path: 'M25 0L575 0C600 0 600 0 600 25L600 575C600 600 600 600 575 600L25 600C0 600 0 600 0 575L0 25C0 0 0 0 25 0ZM125 100L475 100C500 100 500 100 500 125C500 150 500 150 475 150L125 150C100 150 100 150 100 125C100 100 100 100 125 100ZM100 199L500 199L430.5 275L387 230.5L343.5 275L300 230.5L256.5 275L213 230.5L169 275L100 199ZM50 50L50 550L550 550L550 50L50 50Z',
      windingRule: 'NONZERO'
    }
  ]

  */

  const vectorFunction = function (command1, command2, command3) {
    const boom = {
      "_class": "curvePoint",
      "cornerRadius": 0,
      "curveMode": 4,
      "point": `{${command1.end.x/objWidth}, ${command1.end.y/objHeight}}`
    }

    if (command1.code === 'M') {
      console.log(command3);

      if (command2.code === 'C') {
        boom.curveFrom = `{${command2.cp1.x/objWidth}, ${command2.cp1.y/objHeight}}`;

        if (JSON.stringify(command2.cp1) === JSON.stringify(command1.end)) {
          boom.hasCurveFrom = false;
          boom.hasCurveTo = false;
        } else if (JSON.stringify(command2.cp1) !== JSON.stringify(command1.end)) {
          boom.hasCurveFrom = true;
          boom.hasCurveTo = false;
        }
      }

      if (command3.code === 'C') {
        boom.curveTo = `{${command3.cp2.x/objWidth}, ${command3.cp2.y/objHeight}}`;
        boom.hasCurveTo = true;
      }
    } else if (command1.code === 'L') {
      if (command2.code === 'C') {
        boom.curveFrom = `{${command2.cp1.x/objWidth}, ${command2.cp1.y/objHeight}}`;

        if (JSON.stringify(command2.cp1) === JSON.stringify(command1.end)) {
          boom.hasCurveFrom = false;
          boom.hasCurveTo = false;
        } else if (JSON.stringify(command2.cp1) !== JSON.stringify(command1.end)) {
          boom.hasCurveFrom = true;
          boom.hasCurveTo = false;
        }
      }
    } else if (command1.code === 'C') {
      if (command2.code === 'L') {
        boom.curveTo = `{${command1.cp2.x/objWidth}, ${command1.cp2.y/objHeight}}`;
        boom.hasCurveFrom = false;
        boom.hasCurveTo = true;
      } else if (command2.code === 'C') {
        boom.curveFrom = `{${command2.cp1.x/objWidth}, ${command2.cp1.y/objHeight}}`;
        boom.curveTo = `{${command1.cp2.x/objWidth}, ${command1.cp2.y/objHeight}}`;
        boom.hasCurveFrom = true;
        boom.hasCurveTo = true;
      }
    }

    console.log(boom);

    newPath.push(boom);
  }

  data.fillGeometry.map(path => {
    const noZ = path.path.substring(0, path.path.length - 1);
    const split = noZ.split('Z');

    split.map(singleSplit => {
      console.log(singleSplit);
      const commands = parse(singleSplit);
      console.log('--------- ' + data.name + ' ---------------------- ');
      console.log(commands);

      for (let i = 0; i < commands.length - 1; i++) {
        // Take the element, the next one and the last from the list
        vectorFunction(commands[i], commands[i+1], commands[commands.length - 1]);
      }
    });
  });

  // data.strokeGeometry.map(path => {
  //   const commands = parse(path.path);
  //   // console.log('--------- ' + data.name + ' ---------------------- ');
  //   // console.log(commands);
  //
  //   commands.map(curvePoint => {
  //     vectorFunction(curvePoint);
  //   });
  // });

  result.edited = true;
  result.isClosed = true;
  result.pointRadiusBehaviour = 1;
  result.points = newPath;
}
