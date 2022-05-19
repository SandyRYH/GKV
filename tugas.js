const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 4096, 4096 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);
