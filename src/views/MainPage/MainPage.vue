<script lang="ts" src="./MainPage"/>

<template>
  <v-app>
    <v-main>
      <AuthenticatingPage v-if="getStatusLogin === AuthenticationStatus.Authenticating" />
      <RouterView v-else />
    </v-main>
  </v-app>
</template>
