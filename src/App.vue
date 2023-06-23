
<template>
  <MainPage />
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainPage from './views/MainPage/MainPage.vue';
import AuthenticatingPage from './components/AuthenticatingPage/AuthenticatingPage.vue';
export default defineComponent({
  name: 'authenticating-page',
  components: { AuthenticatingPage },
  setup() {
    return {
    }
  }
}
)
</script>