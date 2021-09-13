import { Scene, PerspectiveCamera, WebGLRenderer, Color} from './three.module.js'
import { createSculpture } from './shader-park-core.esm.js';
import { spCode } from './sp-code.js';
import {TrackballControls} from './TrackballControls.js'
// import { OrbitControls } from './OrbitControls.js'

// If you want to create OBJKT's with different seeds,
// you can access the creator and viewer wallet ids.
// This values will only be injected once the piece
// has been minted they will not work locally.
// If the user is not sync, the viewer comes in as false.
const creator = new URLSearchParams(window.location.search).get('creator')
const viewer = new URLSearchParams(window.location.search).get('viewer')

console.log('NFT created by', creator);
console.log('NFT viewed by', viewer);


let scene = new Scene();
let params = { time: 0 };

let camera = new PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 2;

let renderer = new WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setClearColor( new Color(1, 1, 1), 1 );
document.body.appendChild( renderer.domElement );

//Shader Park setup
let mesh = createSculpture(spCode, () => ( {
  time: params.time
} ));

scene.add(mesh);

let controls = new TrackballControls( camera, renderer.domElement );

controls.rotateSpeed = 1.2;
controls.zoomSpeed = 1.2;
// controls.panSpeed = 0.8;
controls.noZoom = true;
controls.dynamicDampingFactor =.05;

//  If you want fixed vertical rotation use Orbit Controls
// let controls = new OrbitControls( camera, renderer.domElement, {
//   enableDamping : true,
//   // dampingFactor : 0.9,
//   zoomSpeed : 0.5,
//   rotateSpeed : 0.5
// } );
// controls.dampingFactor = .05;
// controls.enableZoom = false;
// controls.enableDamping = true;

let onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

window.addEventListener( 'resize', onWindowResize );

let render = () => {
  requestAnimationFrame( render );
  params.time += 0.01;
  controls.update();
  renderer.render( scene, camera );
};

render();
