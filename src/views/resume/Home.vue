<template>
  <div>
    <div class="row m-4">
      <div class="col-4"></div>
      <div class="col-4">
        <div class="card">
          <div class="card-header">&nbsp;</div>
          <div class="card-body">
            <p class="card-text">此網頁是讓面試官了解</p>
            <p class="card-text">我對各項工具的使用和理解</p>
          </div>
        </div>
      </div>
      <div class="col-4"></div>
    </div>
    <div class="row m-4">
      <div class="col-3" v-for="(item, itemIndex) in firstRowArr" :key="itemIndex">
        <div class="card">
          <div class="card-header">{{item.header}}</div>
          <div class="card-body">
            <p class="card-text">{{item.text}}</p>
            <a class="btn btn-success" @click="goToPage(item.path)">查看</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-3" v-for="(item, itemIndex) in firstRowArr" :key="itemIndex">
        <div class="card">
          <div class="card-header">{{item.header}}</div>
          <div class="card-body">
            <p class="card-text">{{item.text}}</p>
            <a class="btn btn-primary" @click="goToPage(item.path)">查看</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-3" v-for="(item, itemIndex) in firstRowArr" :key="itemIndex">
        <div class="card">
          <div class="card-header">{{item.header}}</div>
          <div class="card-body">
            <p class="card-text">{{item.text}}</p>
            <a class="btn btn-secondary" @click="goToPage(item.path)">查看</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      firstRowArr: [
        { header: "自我介紹", text: "包含工作經驗、學歷以及一些證照。", path: "/resume/Self" },
        { header: "簡易自動化部署", text: "包含ShellScript、Docker、Git Hooks。", path: "/linux/Deployment" },
        { header: "下載檔案", text: "包含Nginx、Docker。", path: "/nginx/Download" },
        { header: "一次性密碼", text: "Redis的使用。", path: "/redis/String" },
      ],
      secondRowArr: []
    };
  },
  methods: {
    goToPage(path) {
      this.$router.push(path);
    }
  }
};
</script>
