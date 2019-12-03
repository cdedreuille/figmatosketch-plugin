// MOVE TO ES6 imports and TS?
const type = require('./helpers/type');
const setStyle = require('./helpers/style');
const position = require('./helpers/position');
const canvas = require('./containers/canvas');
const frame = require('./containers/frame');
const group = require('./containers/group');
const component = require('./containers/component');
const instance = require('./containers/instance');
const rectangle = require('./shapes/rectangle');
const triangle = require('./shapes/triangle');
const ellipse = require('./shapes/ellipse');
const vector = require('./shapes/vector');
const text = require('./text/index');

const transform = (data, parent = {}) => {
  const result = {};

  // Can these just be defined up front?
  result._class = type(data.type),
  result.do_objectID = data.id;
  result.booleanOperation = -1;
  result.exportOptions = {
    "_class": "exportOptions",
    "exportFormats": [],
    "includedLayerIds": [],
    "layerOptions": 0,
    "shouldTrim": false
  };
  result.frame = {
    "_class": "rect",
    "constrainProportions": false,
  };
  result.isFixedToViewport = false;
  result.isFlippedHorizontal = false;
  result.isFlippedVertical = false;
  result.isLocked = false;
  result.isVisible = true;
  result.layerListExpandedType = 0;
  result.name = data.name;
  result.nameIsFixed = false;
  result.resizingConstraint = 63;
  result.resizingType = 0;
  result.rotation = 0;
  result.shouldBreakMaskChain = false;
  result.clippingMaskMode = 0;
  result.hasClippingMask = false;
  result.style = setStyle(data);

  // console.log(data);

  // This is to update the position to be relative and not absolute.
  // Sketch uses relative position to its parent.
  // Page is the top level so obviously doesn't need this code
  if (data.type !== 'PAGE') {
    const newPosition = position(parent, data);
    result.frame.x = data.x;
    result.frame.y = data.y;
    result.frame.height = data.height;
    result.frame.width =  data.width;
  }

  // This is where the magic happen - Recursion to create all the layers.
  if (data.children) {
    result.layers = data.children.map(child => transform(child, data));
  }

  // Each case need to be updated using Figma plugin API.
  // The structure isn't the same as the REST API
  switch(data.type) {
    case 'PAGE':
      canvas(data, result);
      break;
    case 'FRAME':
      frame(data, result);
      break;
    case 'GROUP':
      group(data, result);
      break;
    case 'COMPONENT':
      component(data, result);
      break;
    case 'INSTANCE':
      instance(data, result);
      break;
    case 'RECTANGLE':
      rectangle(data, result);
      break;
    case 'ELLIPSE':
      ellipse(data, result);
      break;
    case 'REGULAR_POLYGON':
      triangle(data, result);
      break;
    case 'VECTOR':
      vector(data, result);
      break;
    case 'TEXT':
      text(data, result);
      break;
  }

  return result;
};

module.exports = transform;
