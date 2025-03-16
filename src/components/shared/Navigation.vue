<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse show">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <div v-for="(item, itemIndex) in routesArr" :key="itemIndex">
            <!--無children-->
            <li v-if="item.children.length === 0" class="me-2">
              <router-link class="nav-link" active-class="active" style="color: white" :to="item.path">{{ item.label
              }}</router-link>
            </li>
            <!--有children-->
            <li v-else class="nav-item dropdown me-2">
              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" :style="`color: ${isChild(item.children)}`">{{
                item.label }}</a>
              <ul class="dropdown-menu">
                <li v-for="(child, childIndex) in item.children" :key="childIndex">
                  <router-link class="dropdown-item" active-class="active" :to="child.path">{{ child.label
                  }}</router-link>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      routesArr: [
        {
          label: "resume", path: "", children: [
            { label: "GanttChart", path: "/resume/GanttChart" },
            { label: "Home", path: "/resume/Home" },
            { label: "Self", path: "/resume/Self" },
          ]
        },
        {
          label: "springboot", path: "", children: [
            { label: "Api", path: "/springboot/Api" },
            { label: "Log", path: "/springboot/Log" },
            { label: "MyBatis", path: "/springboot/MyBatis" },
            { label: "MyBatisPlus", path: "/springboot/MyBatisPlus" },
          ]
        },
        { 
          label: "linux", path: "", children: [
            { label: "Awk", path: "/linux/Awk" },
            { label: "Cut", path: "/linux/Cut" },
            { label: "Deployment", path: "/linux/Deployment" },
            { label: "Sed", path: "/linux/Sed" },
            { label: "SshAgent", path: "/linux/SshAgent" },
          ]
        },
        {
          label: "nginx", path: "", children: [
            { label: "Command", path: "/nginx/Command" },
            { label: "Download", path: "/nginx/Download" },
            { label: "ReverseProxy", path: "/nginx/ReverseProxy" },
          ]
        },
        {
          label: "redis", path: "", children: [
            { label: "BitMap", path: "/redis/BitMap" },
            { label: "String", path: "/redis/String" },
          ]
        },
        {
          label: "docker", path: "", children: [
            { label: "Dockerfile", path: "/docker/Dockerfile" },
            { label: "Compose", path: "/docker/Compose" },
            { label: "Flow", path: "/docker/Flow" },
          ]
        },
        {
          label: "gitlab", path: "", children: [
            { label: "Preparatory", path: "/gitlab/Preparatory" },
            { label: "Rules", path: "/gitlab/Rules" },
            { label: "Override1", path: "/gitlab/Override1" },
            { label: "Override2", path: "/gitlab/Override2" },
          ]
        },
        {
          label: "第二份工作", path: "", children: [
            { label: "Jsch", path: "/eland/Jsch" },
            { label: "Scp", path: "/eland/Scp" },
          ]
        },
        {
          label: "問題思考", path: "", children: [
            { label: "資料庫瘦身", path: "/qa/ShrinkDb" },
          ]
        },
      ],
    };
  },
  computed: {
    routePath() {
      return this.$route.path;
    },
  },
  methods: {
    isChild(children) {
      const paths = children.map((child) => child.path);
      return paths.includes(this.routePath) ? "yellow" : "white";
    },
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
}

a {
  cursor: pointer;
}

.active {
  color: yellow !important;
  /* background-color: #0d6efd !important; */
}
</style>
