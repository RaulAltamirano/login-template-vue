<template>
  <v-container class="flex items-center justify-center h-screen">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-primary animate-bounce">404</h1>
      <p class="text-2xl text-gray-600 mt-4 animate-fade-in">Oops! The page you're looking for doesn't exist.</p>
      <v-btn color="primary" dark class="mt-8 animate-fade-in-delay" @click="$router.push('/')">
        Go Home
      </v-btn>
    </div>
    <div class="mt-8">
      <svg class="w-64 h-64 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="#3f83f8"
          d="M347.891 173.909c1.512-5.145 3.001-10.286 4.552-15.418l-69.016-33.933c-4.303 8.767-8.444 17.694-12.474 26.841L347.891 173.909zM478.254 101.726C457.918 64.73 429.246 31.907 395.649 6.647L358.353 46.58c21.745 15.888 41.682 34.332 59.246 55.3L478.254 101.726zM330.808 223.872c-9.282-1.46-18.536-2.881-27.897-4.282l-11.532-84.84c20.97-4.03 40.414-9.871 57.301-17.456l-18.872 88.578zM256 405.974c-82.043 0-149.061-67.018-149.061-149.061S173.957 107.852 256 107.852s149.061 67.018 149.061 149.061S338.043 405.974 256 405.974zM154.928 295.235c-2.012-4.474-3.943-9.01-5.895-13.611l-82.848 34.726c8.372 19.958 19.95 38.415 34.837 55.303L154.928 295.235zM196.719 198.73c-6.838-8.274-13.405-16.673-19.719-25.29l-69.014 33.933c7.267 14.848 15.791 28.939 25.58 42.17L196.719 198.73zM333.987 133.768c-9.948-7.621-20.734-14.285-32.216-19.718l-34.725 82.847c16.89 7.488 32.936 17.313 47.25 29.295L333.987 133.768z" />
      </svg>
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



<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',
});
</script>
