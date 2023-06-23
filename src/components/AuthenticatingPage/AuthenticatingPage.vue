<script lang="ts" src="./AuthenticatingPage"/>

<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" lg="4">
      <v-card class="auth-card">
        <v-card-title class="text-center">Authenticating...</v-card-title>
        <v-card-text>
          <div class="spinner-wrapper">
            <v-progress-circular :size="80" :width="10" color="primary" indeterminate></v-progress-circular>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.authenticating-page {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.authenticating-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.auth-card {
  padding: 20px;
}

.spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>