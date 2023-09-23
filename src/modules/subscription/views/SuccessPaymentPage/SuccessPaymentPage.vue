<template>
    <div class="min-h-screen flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 class="text-2xl font-semibold mb-4">Detalles del pago</h1>
        <form @submit.prevent="realizarPago">
          <!-- Campos de información del usuario y tarjeta -->
          <div class="mb-4">
            <label for="nombre" class="block text-gray-600 text-sm font-medium mb-2">Nombre</label>
            <input type="text" id="nombre" v-model="nombre" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
          </div>
          <div class="mb-4">
            <label for="tarjeta" class="block text-gray-600 text-sm font-medium mb-2">Número de tarjeta</label>
            <input type="text" id="tarjeta" v-model="numeroTarjeta" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
          </div>
          <div class="mb-4">
            <label for="caducidad" class="block text-gray-600 text-sm font-medium mb-2">Fecha de caducidad</label>
            <input type="text" id="caducidad" v-model="caducidad" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
          </div>
          <div class="mb-4">
            <label for="cvv" class="block text-gray-600 text-sm font-medium mb-2">CVV</label>
            <input type="text" id="cvv" v-model="cvv" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
          </div>
          
          <!-- Botón de pago -->
          <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">Pagar</button>
        </form>
      </div>
      
      <!-- Animación de confirmación -->
      <transition name="fade" mode="out-in">
        <div v-if="pagoRealizado" class="bg-green-200 text-green-700 p-4 mt-4 rounded-lg shadow-md max-w-md w-full">
          <p class="text-xl font-semibold">¡Pago realizado con éxito!</p>
          <p class="mt-2">Gracias por su compra, {{ nombre }}.</p>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nombre: '',
        numeroTarjeta: '',
        caducidad: '',
        cvv: '',
        pagoRealizado: false,
      };
    },
    methods: {
      realizarPago() {
        // Aquí puedes agregar lógica para procesar el pago (por ejemplo, con una API).
        // Cuando el pago se realiza correctamente, establece `pagoRealizado` en true.
        // En este ejemplo, simplemente lo estableceremos en true después de un breve retraso simulado.
        setTimeout(() => {
          this.pagoRealizado = true;
        }, 2000);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo de la animación de transición */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>