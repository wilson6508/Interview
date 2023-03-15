<template>
  <div class="text-center m-5">
    <div class="row mt-4">
      <div class="col-3"></div>
      <div class="col-6">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="輸入股票代號查詢" @keyup.enter="query">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="query">查詢</button>
          </div>
        </div>
      </div>
      <div v-show="test" class="spinner-border" role="status"></div>
      <div class="col-3">
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-2" v-for="(stock, idx) in arr" :key="idx">
        <div class="card bg-light mb-3">
          <div class="card-header d-flex justify-content-between">{{ stock.id }}
            <button type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ stock.name }}</h5>
            <p class="card-text">前次收盤價: {{ stock.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StockPrice",
  data() {
    return {
      test: true,
      arr: [
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
        {
          id: "2330",
          name: "台積電",
          price: "520.15",
        },
      ],
    }
  },
  methods: {
    query() {
      this.test = !this.test;
      // const str = "請先關閉1個區塊 再進行查詢";
      // alert(str);
    }
  }
};
</script>
