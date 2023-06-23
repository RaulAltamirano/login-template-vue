<script lang="ts" src="./MainPage"/>

<template>
  <v-app>
    <v-main>
      <AuthenticatingPage v-if="!getCurrentLoginUser" />
      <RouterView v-else />
    </v-main>
  </v-app>
</template>
