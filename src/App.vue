
<template>
  <MainPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from './views/MainPage/MainPage.vue';

export default defineComponent({
  name: 'main-page',
  components: {MainPage},
  setup() {
    return {
    }
  }
}
)
</script>