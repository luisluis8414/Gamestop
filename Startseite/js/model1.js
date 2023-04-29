import * as THREE from 'three'
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js'

const scene = new THREE.Scene();
const canvas = document.getElementById('model1');

const camera= new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.01,
  1000
);

camera.position.set(0, 0.4 , 2);




const RGBEloader = new RGBELoader();
RGBEloader.load('src/kloofendal_48d_partly_cloudy_puresky_1k.hdr', function(texture){
  texture.mapping = THREE.EquirectangularReflectionMapping;
  // scene.background=texture;
  scene.environment=texture;
})

const renderer= new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true, 
  antialias: true
});

const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping=true;

renderer.outputEncoding =THREE.sRGBEncoding;
renderer.toneMapping=THREE.ACESFilmicToneMapping
renderer.toneMappingExposure=1.8;


renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.setClearColor(0x000000, 0);
renderer.setPixelRatio( window.devicePixelRatio );


const loader= new GLTFLoader();

let mixer;
let obj;
loader.load('models/WIIFighter/scene.gltf', function(gltf){
  obj=gltf.scene;
  obj.rotation.y-=0.3
  // obj.position.z-=2
  scene.add(gltf.scene);
  mixer = new THREE.AnimationMixer(obj);
  const clips=gltf.animations;
  const clip = THREE.AnimationClip.findByName(clips, 'Take 001');
  const action =mixer.clipAction(clip);
  action.play();
});


// scene.background=new THREE.Color(0xffffff);

const ambientLight = new THREE.AmbientLight(0x404040, 1);

const light = new THREE.DirectionalLight(0x404040, 3); // soft white light
light.position.set(5,7,5);
light.target.position.set(0,0,0);

scene.add( light );
scene.add(light.target)
scene.add( ambientLight );

const helper = new THREE.DirectionalLightHelper(light, 5);

light.add(helper);

let rotationBool=true;
let increment=0.001

const clock = new THREE.Clock();
function animate() {
  	requestAnimationFrame( animate );

    mixer.update(clock.getDelta());
    controls.update();

    // animationFlying();
    // if(obj2) obj2.rotation.y+=0.01;
  	renderer.render(scene, camera);
  } 
function animationFlying(){
  if(obj) {
    
    if (rotationBool) {
      obj.rotation.y += increment;
    } else {
      obj.rotation.y -= increment;
    }
    if (obj.rotation.y > 0.5 || obj.rotation.y < -0.5) {
      rotationBool = !rotationBool;
    }
  }
}
  animate()








