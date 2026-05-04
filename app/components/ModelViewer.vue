<template>
  <div ref="container" class="viewer"></div>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const container = ref(null)

onMounted(async () => {
  const THREE = await import('three')
  const { STLLoader } = await import('three/examples/jsm/loaders/STLLoader')
  const { OrbitControls } = await import(
    'three/examples/jsm/controls/OrbitControls'
  )

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, 300 / 200, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(container.value.clientWidth, 220)
  container.value.appendChild(renderer.domElement)

  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(0, 1, 1)
  scene.add(light)

  const loader = new STLLoader()
  loader.load('/models/rocky_jazz_hands.stl', geometry => {
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff99 })
    const mesh = new THREE.Mesh(geometry, material)

    // Ajustes importantes
    mesh.scale.set(0.1, 0.1, 0.1)
    mesh.rotation.x = -Math.PI / 2

    scene.add(mesh)

    camera.position.z = 150

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    function animate () {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()
  })
})
</script>

<style scoped>
.viewer {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
