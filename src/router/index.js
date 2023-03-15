import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: {
            path: "/Structure",
        },
    },
    {
        path: "*",
        redirect: {
            path: "/Structure",
        },
    },
    {
        path: "/Structure",
        component: () => import("@/components/project/Structure.vue"),
        meta: {
            title: "Structure"
        },
    },
    {
        path: "/StockPrice",
        component: () => import("@/components/project/StockPrice.vue"),
        meta: {
            title: "StockPrice"
        },
    },
    {
        path: "/FlowChart",
        component: () => import("@/components/project/FlowChart.vue"),
        meta: {
            title: "FlowChart"
        },
    },
    {
        path: "/SourceCode",
        component: () => import("@/components/project/SourceCode.vue"),
        meta: {
            title: "SourceCode"
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.VUE_APP_BASE_URL,
    routes,
});

router.afterEach((to) => {
    document.title = to.meta.title || "VueTwoDemo";
})

export default router;
