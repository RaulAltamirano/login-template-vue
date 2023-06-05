<script setup lang="ts">


</script>

<template>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <title>Improved Login Form</title>

  <div class="bg-card p-8 rounded shadow-lg max-w-md w-full">
    <h2 class="text-2xl font-bold text-gray-800 mb-8">Login</h2>
    <form>
      <div class="mb-6">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" id="email" name="email"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 placeholder-gray-400"
          placeholder="Enter your email address" required>
      </div>
      <div class="mb-6">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" id="password" name="password"
          class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500 placeholder-gray-400"
          placeholder="Enter your password" required>
      </div>
      <div class="flex items-center justify-between mb-6">
        <label for="remember" class="flex items-center">
          <input type="checkbox" id="remember" name="remember" class="mr-2">
          <span class="text-sm text-gray-700">Remember me</span>
        </label>
        <a href="#" class="text-sm text-indigo-500 hover:text-indigo-700">Forgot password?</a>
      </div>
      <div>
        <button type="submit"
          class="w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-200">Sign
          In</button>
      </div>
    </form>
    <p class="text-sm text-center text-gray-700 mt-4">Don't have an account? <a href="#"
        class="text-indigo-500 hover:text-indigo-700">Sign up</a></p>
  </div>
</template>

<style>
.bg-card {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>