import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    // resume
    {
        path: "/",
        redirect: {
            path: "/resume/Home",
        },
    },
    {
        path: "*",
        redirect: {
            path: "/resume/Home",
        },
    },
    {
        path: "/resume/GanttChart",
        component: () => import("@/views/resume/GanttChart.vue"),
        meta: {
            title: "GanttChart"
        },
    },
    {
        path: "/resume/Home",
        component: () => import("@/views/resume/Home.vue"),
        meta: {
            title: "Home"
        },
    },
    {
        path: "/resume/Self",
        component: () => import("@/views/resume/Self.vue"),
        meta: {
            title: "Self"
        },
    },
    // springboot
    {
        path: "/springboot/Api",
        component: () => import("@/views/springboot/Api.vue"),
        meta: {
            title: "Api"
        },
    },
    {
        path: "/springboot/Log",
        component: () => import("@/views/springboot/Log.vue"),
        meta: {
            title: "Log"
        },
    },
    {
        path: "/springboot/MyBatis",
        component: () => import("@/views/springboot/MyBatis.vue"),
        meta: {
            title: "MyBatis"
        },
    },
    {
        path: "/springboot/MyBatisPlus",
        component: () => import("@/views/springboot/MyBatisPlus.vue"),
        meta: {
            title: "MyBatisPlus"
        },
    },
    // linux
    {
        path: "/linux/Awk",
        component: () => import("@/views/linux/Awk.vue"),
        meta: {
            title: "Awk"
        },
    },
    {
        path: "/linux/Cut",
        component: () => import("@/views/linux/Cut.vue"),
        meta: {
            title: "Cut"
        },
    },
    {
        path: "/linux/Deployment",
        component: () => import("@/views/linux/Deployment.vue"),
        meta: {
            title: "Deployment"
        },
    },
    {
        path: "/linux/Sed",
        component: () => import("@/views/linux/Sed.vue"),
        meta: {
            title: "Sed"
        },
    },
    {
        path: "/linux/SshAgent",
        component: () => import("@/views/linux/SshAgent.vue"),
        meta: {
            title: "SshAgent"
        },
    },
    // nginx
    {
        path: "/nginx/Command",
        component: () => import("@/views/nginx/Command.vue"),
        meta: {
            title: "Command"
        },
    },
    {
        path: "/nginx/Download",
        component: () => import("@/views/nginx/Download.vue"),
        meta: {
            title: "Download"
        },
    },
    {
        path: "/nginx/ReverseProxy",
        component: () => import("@/views/nginx/ReverseProxy.vue"),
        meta: {
            title: "ReverseProxy"
        },
    },
    // redis
    {
        path: "/redis/BitMap",
        component: () => import("@/views/redis/BitMap.vue"),
        meta: {
            title: "BitMap"
        },
    },
    {
        path: "/redis/String",
        component: () => import("@/views/redis/String.vue"),
        meta: {
            title: "String"
        },
    },
    // docker
    {
        path: "/docker/Flow",
        component: () => import("@/views/docker/Flow.vue"),
        meta: {
            title: "Flow"
        },
    },
    {
        path: "/docker/Dockerfile",
        component: () => import("@/views/docker/Dockerfile.vue"),
        meta: {
            title: "Dockerfile"
        },
    },
    {
        path: "/docker/Compose",
        component: () => import("@/views/docker/Compose.vue"),
        meta: {
            title: "Compose"
        },
    },
    // gitlab
    {
        path: "/gitlab/Preparatory",
        component: () => import("@/views/gitlab/Preparatory.vue"),
        meta: {
            title: "Preparatory"
        },
    },
    {
        path: "/gitlab/Rules",
        component: () => import("@/views/gitlab/Rules.vue"),
        meta: {
            title: "Rules"
        },
    },
    {
        path: "/gitlab/Override1",
        component: () => import("@/views/gitlab/Override1.vue"),
        meta: {
            title: "Override1"
        },
    },
    {
        path: "/gitlab/Override2",
        component: () => import("@/views/gitlab/Override2.vue"),
        meta: {
            title: "Override2"
        },
    },
    // eland
    {
        path: "/eland/Jsch",
        component: () => import("@/views/eland/Jsch.vue"),
        meta: {
            title: "Jsch"
        },
    },
    {
        path: "/eland/Scp",
        component: () => import("@/views/eland/Scp.vue"),
        meta: {
            title: "Scp"
        },
    },
    // qa
    {
        path: "/qa/ShrinkDb",
        component: () => import("@/views/qa/ShrinkDb.vue"),
        meta: {
            title: "ShrinkDb"
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.VUE_APP_BASE_URL,
    routes,
});

router.afterEach((to) => {
    document.title = to.meta.title || "Interview";
})

export default router;
