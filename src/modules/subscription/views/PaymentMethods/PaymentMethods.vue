<template>
    <v-container class="min-h-screen bg-gray-200 flex items-center justify-center">
      <v-card max-width="600">
        <v-card-title class="text-center font-bold text-xl uppercase">
          Secure payment info
        </v-card-title>
        <v-card-subtitle class="text-center">
          Select a payment method to proceed.
        </v-card-subtitle>
        <v-card-actions class="mb-5 justify-center">
          <v-radio-group v-model="selectedPayment" row>
            <v-radio
              label="Credit/Debit Card"
              value="card"
              class="flex items-center"
            >
              <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" class="h-8 ml-3" alt="Card Logo" />
            </v-radio>
            <v-radio
              label="PayPal"
              value="paypal"
              class="flex items-center"
            >
              <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" class="h-8 ml-3" alt="PayPal Logo" />
            </v-radio>
          </v-radio-group>
        </v-card-actions>
        <v-card-text>
          <v-row v-if="selectedPayment === 'card'">
            <v-col cols="12">
              <v-text-field v-model="cardName" label="Name on card" outlined></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="cardNumber" label="Card number" outlined></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="cardExpirationMonth"
                :items="months"
                label="Expiration Month"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="cardExpirationYear"
                :items="years"
                label="Expiration Year"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="cardCVC" label="Security code" outlined></v-text-field>
            </v-col>
          </v-row>
          <v-row v-else>
            <!-- Additional PayPal specific fields can go here -->
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn @click="submitPayment" color="indigo" dark>
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
          '01 - January', '02 - February', '03 - March', '04 - April', '05 - May',
          '06 - June', '07 - July', '08 - August', '09 - September', '10 - October',
          '11 - November', '12 - December'
        ],
        years: ['2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029']
      };
    },
    methods: {
      submitPayment() {
        // Implement payment submission logic here
      }
    }
  };
  </script>
  
  <style scoped>
  /* Additional Tailwind CSS classes can be used here if needed */
  </style>
  