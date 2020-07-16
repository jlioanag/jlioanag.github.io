var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 1.25;
camera.position.x = -1.75;

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// sets renderer background color
renderer.setClearColor("#222222");
document.body.appendChild(renderer.domElement);

// resize canvas on resize window
window.addEventListener( 'resize', () => {
	let width = window.innerWidth;
	let height = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
})

var geometry = new THREE.IcosahedronGeometry(1, 0);
var material = new THREE.MeshNormalMaterial();
var ico = new THREE.Mesh(geometry, material);
scene.add(ico);

// wireframe
var geometry = new THREE.IcosahedronGeometry(2, 1);
var material = new THREE.MeshBasicMaterial({
	color: "#dadada", wireframe: true, transparent: true
});
var wireframeIco = new THREE.Mesh (geometry, material);
scene.add(wireframeIco);

// ambient light
var primary = 0xffffff;
var ambientLight = new THREE.AmbientLight(primary, 0.20);
scene.add(ambientLight);

// point light
var complement = 0xffffff;
var pointLight = new THREE.PointLight(complement, 0.20);
pointLight.position.set(25, 50, 25);
scene.add(pointLight);

spd = 0.005;

$(document).ready(function(){
    $("#title").hide();
});
// setTimeout(function() {
// 	$("#title").fadeIn("slow");
// }, 6000);

function speedUp() {
	spd *= 2.5;
	ambientLight.intensity = 0.25;
	pointLight.intensity = 0.25;
}

function slowDown() {
	spd /= 2.5;
	ambientLight.intensity = 0.20;
	pointLight.intensity = 0.20;
}

function fadeStuff() {
	$(document).ready(function(){
    $("#title").fadeIn("slow");
	});
}

function animate() {
	var flag = 1;
	requestAnimationFrame(animate);
	ico.rotation.x += spd;
	ico.rotation.y += spd;
	wireframeIco.rotation.x -= spd / 10;
	wireframeIco.rotation.y -= spd / 10;
	renderer.render(scene, camera);
	if (camera.position.z < 4.75) {	
		camera.position.z += 0.005;
		console.log("z: " + camera.position.z);
	}
	if (camera.position.x < 0) {
		camera.position.x += 0.0025;
		console.log("x: " + camera.position.x);
	}

	if (camera.position.z >= 4.75 && camera.position.x >= 0 && flag == 1) {
		fadeStuff();
	}
}
animate();