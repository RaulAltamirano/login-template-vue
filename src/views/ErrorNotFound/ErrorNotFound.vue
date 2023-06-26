<script lang="ts" src="./ErrorNotFound"/>

<template>
  <v-container class="flex items-center justify-center h-screen">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-primary animate-bounce">404</h1>
      <p class="text-2xl text-gray-600 mt-4 animate-fade-in">Oops! The page you're looking for doesn't exist.</p>
      <v-btn color="primary" dark class="mt-8 animate-fade-in-delay" @click="$router.push('/')">
        Go Home
      </v-btn>
    </div>
  </v-container>
</template>

<style>
.container {
  background-color: #f8fafc;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.animate-fade-in {
  animation: fade-in 1s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.animate-fade-in-delay {
  animation-delay: 0.5s;
}

.animate-spin {
  animation: spin 2s linear infinite;
}

@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }

  60% {
    transform: translateY(-10px);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>




