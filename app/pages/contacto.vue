<script setup>
const form = ref({
  nombre: '',
  email: '',
  mensaje: ''
})

const enviando = ref(false)
const mensajeEstado = ref('')

const enviarFormulario = async () => {
  enviando.value = true
  mensajeEstado.value = 'Enviando mensaje...'

  // Simulamos una Promesa de API
  const apiPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = true // Cambia a false para probar el error
      if (exito) resolve('¡Mensaje enviado con éxito!')
      else reject('Hubo un error al enviar.')
    }, 2000)
  })

  try {
    const respuesta = await apiPromise
    mensajeEstado.value = respuesta
    // Limpiar formulario
    form.value = { nombre: '', email: '', mensaje: '' }
  } catch (error) {
    mensajeEstado.value = error
  } finally {
    enviando.value = false
  }
}
</script>

<template>
  <section class="contacto-container">
    <h2 class="section-title">Contacto</h2>
    <form @submit.prevent="enviarFormulario" class="form-card">
      <div class="input-group">
        <label>Nombre</label>
        <input
          v-model="form.nombre"
          type="text"
          placeholder="Tu nombre"
          required
        />
      </div>

      <div class="input-group">
        <label>Email</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="correo@ejemplo.com"
          required
        />
      </div>

      <div class="input-group">
        <label>Mensaje</label>
        <textarea
          v-model="form.mensaje"
          rows="4"
          placeholder="¿En qué puedo ayudarte?"
          required
        ></textarea>
      </div>

      <button type="submit" :disabled="enviando" class="submit-btn">
        {{ enviando ? 'Procesando...' : 'Enviar Mensaje' }}
      </button>

      <p v-if="mensajeEstado" class="status-msg">{{ mensajeEstado }}</p>
    </form>
  </section>
</template>

<style scoped>
.contacto-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
.form-card {
  background: #1a1a1a;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid #333;
}
.input-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
.input-group label {
  margin-bottom: 5px;
  color: #64b5f6;
  font-weight: bold;
}
input,
textarea {
  padding: 12px;
  background: #222;
  border: 1px solid #444;
  color: white;
  border-radius: 8px;
}
.submit-btn {
  width: 100%;
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}
.submit-btn:disabled {
  background: #444;
  cursor: not-allowed;
}
.status-msg {
  margin-top: 15px;
  text-align: center;
  color: #64b5f6;
}
</style>
