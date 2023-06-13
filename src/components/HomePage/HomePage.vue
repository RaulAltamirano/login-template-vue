<script lang="ts" src="./HomePage.ts" />

<template>
  <v-row align="center" justify="center" class="h-screen">
    <v-col cols="12" sm="8" md="6" lg="4">
      <v-card class="elevation-12">
        <v-card-text class="px-6 py-8">
          <div class="refresh-token-wrapper">
            <p class="refresh-token-label">Refresh Token:</p>
            <p class="refresh-token">
              {{ getRefreshToken }}
            </p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn block color="secondary" large rounded @click="refreshToken">
            Refresh Token
          </v-btn>
        </v-card-actions>
        <v-card-text>
          <v-btn block color="primary" large rounded @click="logout">
            Logout
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.v-card {
  border-radius: 8px;
}

.v-img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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