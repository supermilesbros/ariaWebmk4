<template>
    <div class="header-area">

        <div class="header-top-bar-info bg-gray d-none d-lg-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="top-bar-wrap">
                            <div class="top-bar-left">
                                <div class="top-bar-text"><a href="#" class="font-medium display-inline">Now Hiring:</a> Are you a driven and motivated 1st Line IT Support Engineer?</div>
                            </div>
                            <div class="top-bar-right">
                                <ul class="top-bar-info">
                                    <li class="info-item">
                                        <a href="tel:01228899900" class="info-link">
                                            <i class="info-icon fa fa-phone"></i>
                                            <span class="info-text"><strong>0122 8899900</strong></span>
                                        </a>
                                    </li>
                                    <li class="info-item">
                                        <i class="info-icon fa fa-map-marker-alt"></i>
                                        <span class="info-text">58 Howard Street #2 San Francisco</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="header-bottom-wrap bg-white header-sticky" :class="{'is-sticky': isSticky}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="header position-relative">
                            <!-- brand logo -->
                            <div class="header__logo">
                                <nuxt-link to="/">
                                    <img src="/images/logo/logo-dark.png" class="img-fluid" alt="logo">
                                </nuxt-link>
                            </div>

                            <div class="header-right">

                                <!-- navigation menu -->
                                <div class="header__navigation menu-style-three d-none d-xl-block">
                                    <nav class="navigation-menu">
                                        <Navigation />
                                    </nav>
                                </div>

                                <div class="header-search-form-two">
                                    <div class="search-icon" id="search-overlay-trigger" @click="toggleClass('addClass', 'active')">
                                        <a href="javascript:void(0)">
                                            <i class="fa fa-search"></i>
                                        </a>
                                    </div>
                                </div>

                                <!-- mobile menu -->
                                <div class="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger" @click="mobileToggleClass('addClass', 'active')">
                                    <i></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import HeaderTop from '@/components/HeaderTop';
    import Navigation from '@/components/Navigation';
    export default {
        components: {
            HeaderTop,
            Navigation
        },
        data() {
            return {
                isSticky: false
            }
        },
        methods: {
            // offcanvas mobile menu open
            mobileToggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            toggleClass(addRemoveClass, className) {
                const el = document.querySelector('#search-overlay');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },
    };
</script>