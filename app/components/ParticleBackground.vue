<template>
  <div class="particles-wrapper">
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
  </div>
</template>

<style scoped>
.particles-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none; /* Para que no bloqueen los clics */
  z-index: 1; /* Un poco arriba del fondo pero debajo del texto */
}
</style>
