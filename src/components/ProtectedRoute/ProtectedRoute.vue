<script src="./ProtectedRoute"/>

<template>
    <div class="parallax-container">
      <div class="parallax">
        <h1 class="parallax-title">Welcome to the Parallax Effect</h1>
        <p class="parallax-description">This is a stunning parallax section.</p>
      </div>
      <div class="overlay">
        <h2 class="protected-title">Protected Route Content</h2>
        <p class="protected-description">This content is only visible to authenticated users.</p>
      </div>
    </div>
  </template>

<style scoped>
.parallax-container {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.parallax {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/home/pacman/Documents/WORKSPACE/login-template-vue/src/assets/waves.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: translate3d(0, 0, 0);
  z-index: -1;
}

.parallax-title {
  color: #ffffff;
  font-size: 3rem;
  text-align: center;
  margin-top: 30vh;
}

.parallax-description {
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;
}

.overlay {
  position: relative;
  z-index: 1;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: #ffffff;
}

.protected-title {
  color: #ffffff;
  font-size: 2rem;
  text-align: center;
}

.protected-description {
  color: #ffffff;
  font-size: 1.2rem;
  text-align: center;
  margin-top: 2rem;
}
</style>