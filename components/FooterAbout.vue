<template>
    <div class="footer-widget">
        <div class="footer-widget__logo mb-30 footer-logo">
            <nuxt-link to="/">
                <img :src="footerAbout.logo" class="footer-logo" alt="logo">
            </nuxt-link>
        </div>
        <ul class="footer-widget__list">
            <li>{{ footerAbout.address }}</li>
            <li>
                <a href="mailto:contact@mitech.com" class="hover-style-link">{{ footerAbout.email }}</a>
            </li>
            <li>
                <a href="tel:123344556" class="hover-style-link text-black font-weight--bold">{{ footerAbout.telephone }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['footerAbout']
    };
</script>

<style scoped>

.footer-logo {
    max-width: 90%;
}
</style>