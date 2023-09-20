import Vue from "vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    // resume
    {
        path: "/",
        redirect: {
            path: "/resume/GanttChart",
        },
    },
    {
        path: "*",
        redirect: {
            path: "/resume/GanttChart",
        },
    },
    {
        path: "/resume/GanttChart",
        component: () => import("@/views/resume/GanttChart.vue"),
        meta: {
            title: "GanttChart"
        },
    },
    // linux
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
    // docker
    {
        path: "/docker/Compose",
        component: () => import("@/views/docker/Compose.vue"),
        meta: {
            title: "Compose"
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
