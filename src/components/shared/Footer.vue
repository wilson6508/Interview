<template>
  <div class="m-4 text-center">
    <a class="btn btn-success" @click="goToHomePage()">回首頁</a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goToHomePage() {
      this.$router.push("/resume/Home");
    }
  }
}
</script>
