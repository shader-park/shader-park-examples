import {sculptToMinimalRenderer} from 'shader-park-core';
import {spCode} from './spCode.js';

let canvas = document.querySelector('.my-canvas');
// This converts your Shader Park code into a shader and renders it to the my-canvas element
sculptToMinimalRenderer(canvas, spCode);