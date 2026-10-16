#pragma lifecycle(startup, update, dispose)

let hotspot;
let panel;
let panelOpen = false;

function startup() {
    hotspot = scene.getObjectByName("MonumentHotspot2");
    panel = scene.getObjectByName("MonumentPanel2");

    if (panel) {
        panel.visible = false;
    }

    Input.mouse.start();
}

function update(delta, time) {
    if (!hotspot || !panel) return;

    if (Input.mouse.isButtonReleased(MouseButton.Left)) {
        const rayOutput = Input.mouse.raycast(camera);

        const hits = rayOutput.raycaster.intersectObject(
            hotspot,
            true
        );

        if (hits.length > 0) {
            panelOpen = !panelOpen;
            panel.visible = panelOpen;
        }
    }
}

function dispose() {
    Input.mouse.stop();
}
