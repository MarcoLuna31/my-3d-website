// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#webgl') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Load a texture for the globe
const textureLoader = new THREE.TextureLoader();
const globeTexture = textureLoader.load('assets/globe.jpg');

// verify texture
const textureLoader = new THREE.TextureLoader();
const globeTexture = textureLoader.load(
    'assets/globe.jpg',
    () => {
        console.log('Texture loaded successfully');
    },
    undefined,
    (error) => {
        console.error('An error occurred loading the texture:', error);
    }
);



// Create the globe
const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
const globeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const globe = new THREE.Mesh(globeGeometry, globeMaterial);
scene.add(globe);

camera.position.z = 3;

// Lighting
const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the globe
    globe.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();


