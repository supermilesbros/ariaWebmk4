<template>
    <ul>
        <li class="has-children has-children--multilevel-submenu">
            <nuxt-link to="/about">
                <span>About</span>
            </nuxt-link>
            <ul class="submenu">
                <li>
                    <nuxt-link to="/about">
                        <span>About Us</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contact">
                        <span>Contact Us</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/leadership">
                        <span>Leadership</span>
                    </nuxt-link>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/">
                <span>News</span>
            </nuxt-link>
        </li>
        <li>
            <nuxt-link to="/">
                <span>Carrers</span>
            </nuxt-link>
        </li>
        
    </ul>
</template>