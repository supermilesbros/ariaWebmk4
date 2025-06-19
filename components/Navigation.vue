<template>
    <ul>
        <li class="has-children has-children--multilevel-submenu">
            <nuxt-link to="/it-services">
                <span>Patients</span>
            </nuxt-link>
            <ul class="submenu">
                <li>
                    <nuxt-link to="/it-services">
                        <span>IT Services</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/it-solutions">
                        <span>IT Solutions</span>
                    </nuxt-link>
                </li>
            </ul>
        </li>
        <li class="has-children has-children--multilevel-submenu">
            <nuxt-link to="/it-services">
                <span>Providers</span>
            </nuxt-link>
            <ul class="submenu">
                <li>
                    <nuxt-link to="/it-services">
                        <span>IT Services</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/it-solutions">
                        <span>IT Solutions</span>
                    </nuxt-link>
                </li>
            </ul>
        </li>
        <li class="has-children has-children--multilevel-submenu">
            <nuxt-link to="/it-services">
                <span>Organizations</span>
            </nuxt-link>
            <ul class="submenu">
                <li>
                    <nuxt-link to="/it-services">
                        <span>IT Services</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/it-solutions">
                        <span>IT Solutions</span>
                    </nuxt-link>
                </li>
            </ul>
        </li>
        <li>
            <nuxt-link to="/case-studies">
                <span>Biopharma</span>
            </nuxt-link>
        </li>
    </ul>
</template>