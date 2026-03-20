<template>
  <nav class="navbar-container">
    <div class="tabs-wrapper">
      <NuxtLink to="/" class="tab-btn">SOBRE MÍ</NuxtLink>
      <NuxtLink to="/experiencia" class="tab-btn">EXPERIENCIA</NuxtLink>
      <NuxtLink to="/logros" class="tab-btn">LOGROS</NuxtLink>
      <NuxtLink to="/skills" class="tab-btn">SKILLS</NuxtLink>
      <NuxtLink to="/contacto" class="tab-btn">CONTACTO</NuxtLink>
    </div>
  </nav>
</template>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
.tabs-wrapper {
  background: rgba(255, 255, 255, 0.05);
  padding: 8px;
  border-radius: 12px;
  display: flex;
  gap: 10px;
}

.tab-btn {
  text-decoration: none;
  color: #888;
  padding: 10px 20px;
  font-weight: bold;
  transition: 0.3s;
  border-radius: 8px;
}

/* Clase automática de Nuxt para el link activo */
.router-link-active {
  background: #2563eb;
  color: white;
}
</style>
