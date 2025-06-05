// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/style.scss", "swiper/css"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/scss/_variables.scss";'
                },
            },
        },
    }
})
