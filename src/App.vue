<template>
  <div>
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/shared/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>
