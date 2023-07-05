<script lang="ts" src="./HomePage.ts" />

<template>
  <v-row align="center" justify="center" class="h-screen">
    <v-col cols="12" sm="8" md="6" lg="4">
      <v-card class="auth-card elevation-12">
        <v-card-text class="px-6 py-8">
          <div class="refresh-token-wrapper">
            <p class="refresh-token-label">Refresh Token:</p>
            <p class="refresh-token">
              {{ getRefreshToken }}5
            </p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn :loading="getLoadingRefreshToken" block color="secondary" large rounded @click="refreshToken">
            Refresh Token
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          <v-btn block color="primary" rounded @click="toProtectedRoute">
            Protected route
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <v-btn block color="primary" rounded @click="logout">
            Logout
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style >
.auth-card {
  padding: 20px;
  border-radius: 8px;
  animation: fade-in 0.5s ease-in-out;
  background-color: #f3f7f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.text-white {
  color: white;
}

.refresh-token-wrapper {
  margin-bottom: 16px;
  text-align: center;
}

.refresh-token-label {
  font-weight: bold;
  color: #888;
}

.refresh-token {
  font-size: 18px;
  color: #555;
  word-break: break-all;
}


.animated {
  animation: slideIn 0.3s ease-out;
}
</style>