import './style.css'
import * as THREE from 'three'
import testVertexShader from './shaders/test/vertex.glsl'
import testFragmentShader from './shaders/test/fragment.glsl'
import mesh2Frag from './shaders/test/meshFrag.glsl'
import mesh2Vertex from './shaders/test/meshVertex.glsl'
import gsap from 'gsap';

/**
 * Base
 */
// Debug
const mountain = (ref) => {

// Canvas
const canvas = ref;

// Scene
const scene = new THREE.Scene()


/**
 * Sizes
 */
 const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Test mesh
 */
// Geometry
const geoWidth = 8;
const geometry = new THREE.PlaneGeometry(geoWidth, 2, geoWidth * 64 , 64)

const uniforms = {
    uTime: {value : 0},
    screenWidth: {value: sizes.width},
    timeMultiplier: {value : 16.7},
    height: {value: 9.5},
    frequency: {value: 1500},
    uVScale: {value: 33.6},
    mouseX: {value: 0},
}

const wireFrameOgColor = new THREE.Color(.4, .4, .4);

// Material
const material = new THREE.ShaderMaterial({
    vertexShader: testVertexShader,
    fragmentShader: testFragmentShader,
    wireframe: true,
    uniforms: {
        ...uniforms,
        uColor: {value: wireFrameOgColor}
    },
})

const material2 = new THREE.ShaderMaterial({
    vertexShader: mesh2Vertex,
    fragmentShader: mesh2Frag,
    side: THREE.DoubleSide,
    uniforms: {
        ...uniforms,
        uColor: {value: new THREE.Color(.0, .0, .0)}
    },
})

// gui.add(uniforms.timeMultiplier,'value', 0, 30).name('timeMultiplier');
// gui.add(uniforms.height,'value', 7, 13).name('height');
// gui.add(uniforms.frequency,'value', 0, 4000).name('frequency');
// gui.add(uniforms.uVScale,'value', 0, 100).name('uVScale');
// gui.addColor(material.uniforms.uColor, 'value').name('wireframe color');
// gui.addColor(material2.uniforms.uColor, 'value').name('face color');


// Mesh
const mesh = new THREE.Mesh(geometry, material)
const mesh2 = new THREE.Mesh(geometry, material2);
scene.add(mesh)
scene.add(mesh2)


mesh.rotation.x = Math.PI / 1.7;
mesh2.rotation.x = Math.PI / 1.7;

const mouse = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX / sizes.width
    mouse.y = -(e.clientY / sizes.height)
    uniforms.mouseX.value = mouse.x;
    console.log(uniforms.mouseX.value);
})

const colorCicle = () => {
    const randColor = new THREE.Color(Math.random(), Math.random(), Math.random())
    gsap.to(material.uniforms.uColor.value, {
        x: randColor.r,
        y: randColor.g,
        z: randColor.b,
        duration: 5
    }).then(colorCicle)
}


colorCicle()


window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.001, 100)
camera.position.set(0.04, .262, 1)
camera.lookAt(new THREE.Vector3(0, 0, 0))

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x000000);


const clock = new THREE.Clock()

/**
 * Animate
 */
const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    mesh.material.uniforms.uTime.value = elapsedTime
    mesh2.material.uniforms.uTime.value = elapsedTime

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
}

export default mountain;