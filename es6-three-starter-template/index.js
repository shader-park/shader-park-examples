import { Scene, PerspectiveCamera, WebGLRenderer, Color, TorusKnotGeometry, SphereGeometry } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createSculpture, createSculptureWithGeometry } from 'shader-park-core';
import { spCode } from './spCode.js';

let scene = new Scene();
let params = { time: 0 };

let camera = new PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

let renderer = new WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );

renderer.setClearColor( new Color(1, 1, 1), 1 );
document.body.appendChild( renderer.domElement );


let geometry = new TorusKnotGeometry( 1, .3, 100, 9.6);
geometry.computeBoundingSphere();
geometry.center();


// Shader Park Setup
let mesh = createSculpture(spCode, () => ( {
    time: params.time,
} ));
scene.add(mesh);

// *** Uncomment to try using a custom geometry. Make sure to comment out likes 26-29 ***.

// let mesh = createSculptureWithGeometry(geometry, spCode, () => ( {
//   time: params.time,
// } ));
// scene.add(mesh);

let controls = new OrbitControls( camera, renderer.domElement, {
  enableDamping : true,
  dampingFactor : 0.25,
  zoomSpeed : 0.5,
  rotateSpeed : 0.5
} );

let render = () => {
  requestAnimationFrame( render );
  params.time += 0.01;
  controls.update();
  renderer.render( scene, camera );
};

render();