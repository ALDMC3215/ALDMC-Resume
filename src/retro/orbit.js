export async function createOrbit(host, signal) {
  const T = await import('./vendor/three.module.min.js');
  if (signal.aborted) return;
  const renderer = new T.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
  renderer.domElement.setAttribute('aria-hidden', 'true');
  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(33, 1, 0.1, 60);
  camera.position.z = 8;
  const group = new T.Group();
  const materials = [new T.MeshBasicMaterial({color:0x662c18}), new T.MeshBasicMaterial({color:0xffc37d})];
  const ring = new T.TorusGeometry(1.55, 0.016, 8, 100);
  const stone = new T.SphereGeometry(0.085, 12, 10);
  for (let index = 0; index < 3; index++) {
    const orbit = new T.Mesh(ring, materials[index % 2]);
    orbit.rotation.set(0.38 + index * 0.43, 0.55, index * 1.1);
    const satellite = new T.Mesh(stone, materials[(index + 1) % 2]);
    satellite.position.set(0, 1.55, 0);
    orbit.add(satellite);
    group.add(orbit);
  }
  scene.add(group);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  host.append(renderer.domElement);
  const resize = () => {
    const { clientWidth: width, clientHeight: height } = host;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };
  const size = new ResizeObserver(resize);
  size.observe(host);
  resize();
  let pointerX = 0, pointerY = 0, frame = 0, visible = false;
  const parent = host.parentElement;
  const move = event => {
    const rect = parent.getBoundingClientRect();
    pointerX = (event.clientX - rect.left) / rect.width - 0.5;
    pointerY = (event.clientY - rect.top) / rect.height - 0.5;
  };
  const reset = () => { pointerX = 0; pointerY = 0; };
  const render = time => {
    if (!visible || signal.aborted || document.hidden) return;
    group.rotation.x += (pointerY * 0.52 - group.rotation.x) * 0.06;
    group.rotation.y += (pointerX * 0.64 - group.rotation.y) * 0.06;
    group.rotation.z = time * 0.00023;
    renderer.render(scene, camera);
    frame = requestAnimationFrame(render);
  };
  const restart = () => {
    cancelAnimationFrame(frame);
    if (visible && !document.hidden) frame = requestAnimationFrame(render);
  };
  const viewpoint = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    restart();
  });
  viewpoint.observe(host);
  parent.addEventListener('pointermove', move);
  parent.addEventListener('pointerleave', reset);
  document.addEventListener('visibilitychange', restart);
  signal.addEventListener('abort', () => {
    cancelAnimationFrame(frame);
    viewpoint.disconnect();
    size.disconnect();
    parent.removeEventListener('pointermove', move);
    parent.removeEventListener('pointerleave', reset);
    document.removeEventListener('visibilitychange', restart);
    ring.dispose(); stone.dispose();
    for (const material of materials) material.dispose();
    renderer.dispose(); renderer.domElement.remove();
  }, { once: true });
}
