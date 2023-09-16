<template>
  <v-container class="min-h-screen bg-gray-200 flex items-center justify-center">
    <v-card class="Card" max-width="600">
      <v-row justify="center" align="center">
        <v-icon size="40">mdi-credit-card-outline</v-icon>
      </v-row>
      <v-card-title class="text-center font-bold text-xl uppercase">
        Secure Payment Information
      </v-card-title>
      <v-card-subtitle class="text-center">
        Select a payment method to proceed.
      </v-card-subtitle>
      <v-card-actions class="justify-center">
        <v-radio-group v-model="selectedPayment" row>
          <v-radio  label="Credit/Debit Card" value="card" class="flex items-center">
            <img src="https://cdn-icons-png.flaticon.com/128/147/147258.png" class="h-8 ml-3"
              alt="Card Logo" />
          </v-radio>
          <v-radio label="PayPal" value="paypal" class="flex items-center">
            <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" class="h-8 ml-3"
              alt="PayPal Logo" />
          </v-radio>
        </v-radio-group>
      </v-card-actions>
      <v-card-text>
        <v-row v-if="selectedPayment === 'card'">
          <v-col cols="12">
            <v-text-field v-model="cardName" label="Name on Card" outlined :rules="nameRules"></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="cardNumber" label="Card Number" outlined :rules="cardNumberRules"></v-text-field>
          </v-col>
          <v-col cols="6">
            <v-select v-model="cardExpirationMonth" :items="months" label="Expiration Month" outlined></v-select>
          </v-col>
          <v-col cols="6">
            <v-select v-model="cardExpirationYear" :items="years" label="Expiration Year" outlined></v-select>
          </v-col>
          <v-col cols="12">
            <v-text-field v-model="cardCVC" label="Security Code" outlined :rules="cvcRules"></v-text-field>
          </v-col>
        </v-row>
        <v-row v-else>
          <!-- Campos específicos de PayPal pueden ir aquí -->
        </v-row>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn @click="submitPayment" color="indigo" dark block>
          <v-icon left>mdi-lock-outline</v-icon>
          PAY NOW
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedPayment: 'card',
      cardName: '',
      cardNumber: '',
      cardExpirationMonth: null,
      cardExpirationYear: null,
      cardCVC: '',
      months: [
        '01 - January', '02 - February', '03 - March', '04 - April', '05 - May', '06 - June',
        '07 - July', '08 - August', '09 - September', '10 - October', '11 - November', '12 - December'
      ],
      years: [
        '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032'
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => /^[A-Za-z\s]+$/.test(v) || 'Name must contain only letters and spaces',
      ],
      cardNumberRules: [
        v => !!v || 'Card number is required',
        v => /^\d{16}$/.test(v) || 'Card number must be 16 digits',
      ],
      cvcRules: [
        v => !!v || 'Security code is required',
        v => /^\d{3}$/.test(v) || 'Security code must be 3 digits',
      ],
    };
  },
  methods: {
    submitPayment() {
      // Lógica para enviar el pago
    },
  },
};
</script>

<style scoped>
/* Agrega tus estilos personalizados aquí si es necesario */
.Card {
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Personaliza estilos de validación aquí si es necesario */
</style>
