function ambient() {
    const light = new THREE.AmbientLight(0xffffff, 0.3); // soft white light
    scene.add(light);
}

function dir() {
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(60, 80, 100);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
}

function spot() {
    const spotLight = new THREE.SpotLight(0xffffff, 0.6);
    spotLight.position.set(50, 8, 80);
    spotLight.castShadow = true;
    // spotLight.power = 4;
    scene.add(spotLight);
}

function hemi() {
    const hemiLight = new THREE.HemisphereLight(0x454B1B, 0x00ff00, 0.6);
    scene.add(hemiLight);
}