<template>
  <div>
    <input type="text" v-model="apiUrl" />
    <button @click="test">OK</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SourceCode",
  data() {
    return {
      apiUrl: "",
    }
  },
  methods: {
    test() {
      console.log(this.apiUrl);
      axios.get(this.apiUrl)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
};
</script>
