<template>
  <div class="text-center m-5">
    <div class="row mt-4">
      <div class="col-4"></div>
      <div class="col-4">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="輸入股票代號查詢" v-model="stockId" @keyup.enter="query">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" @click="query">查詢</button>
          </div>
        </div>
        <span>(常用查詢代號: 0050 2330 2886)</span>
      </div>
      <div v-show="loading" class="spinner-border" role="status"></div>
      <div class="col-4"></div>
    </div>
    <div class="row mt-5">
      <div class="col-2" v-for="(stock, idx) in arr" :key="idx">
        <div class="card bg-light mb-3">
          <div class="card-header d-flex justify-content-between">{{ stock.id }}
            <span class="btn-close" aria-label="Close" style="cursor: pointer" @click="clear(idx)"></span>
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
import axios from "axios";

export default {
  name: "StockPrice",
  data() {
    return {
      loading: false,
      stockId: "",
      arr: [],
    }
  },
  methods: {
    query() {
      const check = this.checkRegex();
      if (!check) {
        alert("無效的股票代號");
        return;
      }
      this.loading = true;
      const url = `http://192.168.93.100:7500/stockPrice/getSingle?stockId=${this.stockId}`;
      axios.get(url)
          .then(response => {
            const {stockId, stockName, closePrice} = response.data;
            this.arr.push({
              id: stockId,
              name: stockName,
              price: closePrice.substring(0, closePrice.length - 2),
            });
          })
          .catch(() => {
            alert("查詢失敗");
          })
          .finally(() => {
            this.loading = false;
          });
    },
    clear(idx) {
      this.arr.splice(idx, 1);
    },
    checkRegex() {
      const regex = /^\d{4}[0-9a-zA-Z]{0,3}$/;
      return regex.test(this.stockId);
    },
  }
};
</script>
