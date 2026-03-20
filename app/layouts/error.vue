<template>
  <div class="error-page">
    <div class="content">
      <div class="error-code" data-text="404">404</div>

      <h1 class="title">¡Página no encontrada!</h1>
      <p class="description">
        Parece que te perdiste en el camino...
        <br class="sm:hidden" />
        Esta página no existe o fue movida.
      </p>

      <div class="actions">
        <button
          class="btn primary"
          @click="goHome"
          @mousemove="handleMouseMove"
          @mouseleave="handleMouseLeave"
        >
          Volver al inicio
        </button>

        <button class="btn secondary" @click="goBack">Regresar</button>
      </div>

      <!-- Pequeño toque interactivo opcional -->
      <div class="fun-fact" :style="{ transform: `rotate(${rotation}deg)` }">
        ¿Sabías? Los 404 también sueñan con ser encontrados... 😴
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // o useNuxtApp() si es Nuxt

const router = useRouter()
const rotation = ref(0)

const goHome = () => router.push('/')
const goBack = () => router.back()


const handleMouseMove = e => {
  const btn = e.currentTarget
  const rect = btn.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = (y - centerY) / 8
  const rotateY = (centerX - x) / 12

  btn.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`
}

const handleMouseLeave = e => {
  e.currentTarget.style.transform =
    'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
}
</script>
