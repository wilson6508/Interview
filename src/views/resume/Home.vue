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
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-header">自我介紹</div>
          <div class="card-body">
            <p class="card-text">包含工作經驗、學歷以及一些證照。</p>
            <a class="btn btn-success" @click="goToPage('/resume/Self')">查看自我介紹</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToPage(path) {
      this.$router.push(path);
    }
  }
};
</script>
