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
  const result = {
    _class: type(data.type),
    do_objectID: data.id,
    booleanOperation: -1,
    exportOptions: {
      _class: 'exportOptions',
      exportFormats: [],
      includedLayerIds: [],
      layerOptions: 0,
      shouldTrim: false,
    },
    frame: {
      _class: 'rect',
      constrainProportions: false,
    },
    isFixedToViewport: false,
    isFlippedHorizontal: false,
    isFlippedVertical: false,
    isLocked: false,
    isVisible: true,
    layerListExpandedType: 0,
    name: data.name,
    nameIsFixed: false,
    resizingConstraint: 63,
    resizingType: 0,
    rotation: 0,
    shouldBreakMaskChain: false,
    clippingMaskMode: 0,
    hasClippingMask: false,
    style: setStyle(data),
  };

  if (data.type !== 'PAGE') {
    const newPosition = position(parent, data);
    result.frame.x = data.x;
    result.frame.y = data.y;
    result.frame.height = data.height;
    result.frame.width = data.width;
  }

  if (data.children) {
    result.layers = data.children.map(child => transform(child, data));
  }

  switch (data.type) {
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
