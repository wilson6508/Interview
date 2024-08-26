import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    // resume
    {
        path: "/",
        redirect: {
            path: "/springboot/MyBatis",
        },
    },
    {
        path: "*",
        redirect: {
            path: "/springboot/MyBatis",
        },
    },
    {
        path: "/resume/GanttChart",
        component: () => import("@/views/resume/GanttChart.vue"),
        meta: {
            title: "GanttChart"
        },
    },
    // springboot
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
        path: "/linux/ConExp",
        component: () => import("@/views/linux/ConExp.vue"),
        meta: {
            title: "ConExp"
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
        path: "/linux/Envsubst",
        component: () => import("@/views/linux/Envsubst.vue"),
        meta: {
            title: "Envsubst"
        },
    },
    {
        path: "/linux/FileDir",
        component: () => import("@/views/linux/FileDir.vue"),
        meta: {
            title: "FileDir"
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
