<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPage',
});
</script>

<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
