<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse show">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <div v-for="(item, itemIndex) in routesArr" :key="itemIndex">
            <!--無children-->
            <li v-if="item.children.length === 0" class="me-2">
              <router-link
                class="nav-link"
                active-class="active"
                style="color: white"
                :to="item.path"
                >{{ item.label }}</router-link
              >
            </li>
            <!--有children-->
            <li v-else class="nav-item dropdown me-2">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                :style="`color: ${isChild(item.children)}`"
                >{{ item.label }}</a
              >
              <ul class="dropdown-menu">
                <li
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                >
                  <router-link
                    class="dropdown-item"
                    active-class="active"
                    :to="child.path"
                    >{{ child.label }}</router-link
                  >
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
        { label: "架構圖", path: "/Structure", children: [] },
        { label: "功能頁", path: "/StockPrice", children: [] },
        { label: "流程圖", path: "/FlowChart", children: [] },
        { label: "程式碼", path: "/SourceCode", children: [] },
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
