<template>
  <section class="card">
    <h2>Logros técnicos destacados</h2>

    <ul class="achievements">
      <li>Migración exitosa sin pérdida de datos</li>
      <li>Automatización que redujo tiempo manual en >90%</li>
      <li>Optimización de estructuras de datos</li>
    </ul>

    <div class="projects">
      <!-- Proyecto 1 -->
      <div class="project">
        <h3>StreamHub</h3>
        <p>
          Consiste en conectar la API de YouTube a mi página para poder
          visualizar cualquier tipo de video musical.
        </p>

        <div class="buttons">
          <a
            href="https://streamhub-nuxt-spa.vercel.app/"
            target="_blank"
            class="btn"
          >
            Ver demo
          </a>

          <a
            href="https://github.com/BIGGUZMAN/streamhub-nuxt-spa"
            target="_blank"
            class="btn secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      <!-- Proyecto 2 -->
<div class="project">
  <h3>Visor 3D</h3>
  <p>Modelo STL renderizado con Three.js</p>

  <ClientOnly>
    <LazyModelViewer />
  </ClientOnly>
</div>
    </div>
  </section>
</template>


<script setup>
import { defineAsyncComponent } from 'vue'

const LazyModelViewer = defineAsyncComponent(() =>
  import('~/components/ModelViewer.vue')
)
</script>


<style scoped>
.projects {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.project {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 10px;
  width: 260px;
  overflow: hidden;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.btn {
  padding: 8px 12px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: 0.2s;
  font-size: 14px;
}

.btn:hover {
  background-color: #555;
}

.secondary {
  background-color: #555;
}

.secondary:hover {
  background-color: #777;
}

.disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

.project canvas { width: 100%; height: 200px; border-radius: 8px; margin-top:
10px; }

</style>

