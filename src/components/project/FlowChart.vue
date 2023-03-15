<template>
  <div>
    <input type="text" v-model="stockId" />
    <button @click="test">OK</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FlowChart",
  data() {
    return {
      stockId: "",
    }
  },
  methods: {
    test() {
      const uri = `/stockPrice/getSingle?stockId=${this.stockId}`;
      axios.get('/api' + uri)
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
