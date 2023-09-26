<script lang="ts" src="./PaymentMethods.ts"/>

<template>
  <v-row class="h-screen flex items-center justify-center">
    <v-card>
      <v-row justify="center" align="center">
        <v-icon class="pa-8 ma-4" size="80">mdi-credit-card-outline</v-icon>
      </v-row>
      <v-card-title class="text-center font-bold text-xl uppercase">
        Secure Payment Information
      </v-card-title>
      <v-card-subtitle class="text-center">
        Select a payment method to proceed.
      </v-card-subtitle>
      <v-card-actions class="justify-center">
        <v-radio-group v-model="selectedPayment">
          <v-radio label="Credit/Debit Card" value="card" class="ml-8">
            <img src="https://cdn-icons-png.flaticon.com/128/147/147258.png"   alt="Card Logo" />
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
        <v-btn @click="submitPayment" color="primary" variant="flat" block>
          <v-icon left>mdi-lock-outline</v-icon>
          PAY NOW
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

