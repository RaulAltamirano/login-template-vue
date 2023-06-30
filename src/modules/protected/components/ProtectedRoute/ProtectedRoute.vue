<script src="./ProtectedRoute"/>

<template>
 <v-row align="center" justify="center" class="h-screen">
  <v-col cols="12" sm="8" md="6" lg="4">
    <v-card class="elevation-12 rounded-lg shadow-lg" :class="{ 'animated': animated, 'bounceIn': animated }">
      <v-img :src="user.avatar" :alt="user.name" height="200"></v-img>
      <v-card-title class="text-center">
        <h2 class="text-2xl font-bold">{{ user.name }}</h2>
        <p class="text-gray-500">{{ user.email }}</p>
      </v-card-title>
      <v-card-text>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, velit vel bibendum bibendum, sapien nunc bibendum urna, vel bibendum sapien sapien vel velit.</p>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="red" @click="logout" class="mr-1" :class="{ 'animate-pulse': animated }">
          <v-icon>mdi-logout</v-icon>
          Logout
        </v-btn>
        <v-btn color="primary" @click="goHome" :class="{ 'animate-bounce': animated }">
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</v-row>
</template>

<style>
.animated {
  animation-duration: 1s;
}

@keyframes bounceIn {

  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}

@keyframes pulse {
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>