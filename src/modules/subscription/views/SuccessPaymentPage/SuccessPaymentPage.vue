<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-4">Detalles de la Factura</h1>
    
    <!-- Información de la factura -->
    <div class="bg-white shadow-md rounded p-4 mb-4">
      <div class="flex justify-between mb-2">
        <span>Fecha de Emisión:</span>
        <span>15 de Septiembre, 2023</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>Número de Factura:</span>
        <span>#12345</span>
      </div>
      <div class="flex justify-between mb-2">
        <span>Cliente:</span>
        <span>Nombre del Cliente</span>
      </div>
    </div>

    <!-- Detalles de la factura -->
    <div class="bg-white shadow-md rounded p-4">
      <table class="w-full">
        <thead>
          <tr>
            <th class="text-left">Descripción</th>
            <th class="text-right">Cantidad</th>
            <th class="text-right">Precio Unitario</th>
            <th class="text-right">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Producto 1</td>
            <td class="text-right">2</td>
            <td class="text-right">$50.00</td>
            <td class="text-right">$100.00</td>
          </tr>
          <tr>
            <td>Producto 2</td>
            <td class="text-right">1</td>
            <td class="text-right">$75.00</td>
            <td class="text-right">$75.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Total de la factura -->
    <div class="mt-4">
      <div class="flex justify-between">
        <span class="text-xl font-semibold">Total:</span>
        <span class="text-xl font-semibold">$175.00</span>
      </div>
    </div>

    <!-- Botón de pago -->
    <div class="mt-6">
      <v-btn color="primary" @click="realizarPago">Realizar Pago</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    realizarPago() {
      // Aquí puedes agregar la lógica para procesar el pago
      alert("Pago realizado con éxito");
    },
  },
};
</script>

<style scoped>
/* Puedes agregar estilos personalizados aquí si es necesario */
</style>
