import { generatedGLSLToMinimalRenderer} from 'shader-park-core';
import { preval } from 'babel-plugin-preval'

let canvas = document.querySelector('.my-canvas');

let spCode = `rotateY(mouse.x * PI / 2 + time*.5);
rotateX(mouse.y * PI / 2);
metal(.5);
shine(.4);
color(getRayDirection()+.2);
rotateY(getRayDirection().y*4+time)
boxFrame(vec3(.4), .02);
expand(.02);
blend(nsin(time)*.6)
sphere(.2);`

// This converts your Shader Park code into a GLSL shader at build time
const output = preval`
const shaderPark = require('./node_modules/shader-park-core/dist/shader-park-core.cjs.js');
module.exports = shaderPark.sculptToGLSL(\`${spCode}\`);`;

// This sets up a WebGL context for and 
generatedGLSLToMinimalRenderer(canvas, output);