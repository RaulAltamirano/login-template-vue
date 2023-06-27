<script lang="ts" src="./AuthenticatingPage"/>

<template>
  <v-container class="flex items-center justify-center h-screen">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6" lg="4">
        <v-card class="auth-card" elevation="12">
          <v-card-title class="text-center">Authenticating...</v-card-title>
          <v-card-text>
            <div class="spinner-wrapper">
              <v-progress-circular :size="80" :width="10" color="primary" indeterminate></v-progress-circular>
            </div>
            <p class="auth-description">Please wait while we authenticate your account.</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.auth-card {
  padding: 20px;
  border-radius: 8px;
  animation: fade-in 0.5s ease-in-out;
  background-color: #f3f7f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
}

.auth-description {
  margin: 0;
  text-align: center;
  color: #888;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>