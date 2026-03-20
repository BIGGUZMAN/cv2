<script setup>
// Accedemos a la utilidad de color de Nuxt
const colorMode = useColorMode()

// Función para alternar entre oscuro y claro
const toggleMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button id="modoOscuro" @click="toggleMode" aria-label="Cambiar tema">
    {{ colorMode.value === 'dark' ? '☀️' : '🌙' }}
  </button>
</template>

