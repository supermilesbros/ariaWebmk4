<template>
    <div class="contact-us-area service-contact-bg section-space--ptb_100" :style="{ backgroundImage: `url('/images/bg/mitech-home-services-contact-bg.png')` }">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-4">
                    <div class="contact-info sytle-one service-contact text-left">
                        <div class="contact-info-title-wrap text-center">
                            <h3 class="heading text-white mb-10">4.9/5.0</h3>
                            <div class="ht-star-rating lg-style">
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                            </div>
                            <p class="sub-text">by 700+ customers for 3200+ clients</p>
                        </div>

                        <div class="contact-list-item">
                            <a href="tel:190068668" class="single-contact-list">
                                <div class="content-wrap">
                                    <div class="content">
                                        <div class="icon">
                                            <span class="fa fa-phone"></span>
                                        </div>
                                        <div class="main-content">
                                            <h6 class="heading">Call for advice now!</h6>
                                            <div class="text">1900 68668</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                            <a href="mailto:hello@mitech.com" class="single-contact-list">
                                <div class="content-wrap">
                                    <div class="content">
                                        <div class="icon">
                                            <span class="far fa-envelope"></span>
                                        </div>
                                        <div class="main-content">
                                            <h6 class="heading">Say hello</h6>
                                            <div class="text">hello@mitech.com</div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>

                <div class="col-lg-7 ms-auto">
                    <div class="contact-form-service-wrap">
                        <div class="contact-title text-center section-space--mb_40">
                            <h3 class="mb-10">Need a hand?</h3>
                            <p class="text">Reach out to the world’s most reliable IT services.</p>
                        </div>
                        <form id="contact-form">
                            <div class="contact-form__two">
                                <div class="contact-input">
                                    <div class="contact-inner">
                                        <input name="con_name" type="text" placeholder="Name *">
                                    </div>
                                    <div class="contact-inner">
                                        <input name="con_email" type="email" placeholder="Email *">
                                    </div>
                                </div>
                                <div class="contact-select">
                                    <div class="form-item contact-inner">
                                        <span class="inquiry">
                                            <select name="inquiry" class="select-item">
                                                <option value="Your inquiry about">Your inquiry about</option>
                                                <option value="General Information Request">General Information Request</option>
                                                <option value="Partner Relations">Partner Relations</option>
                                                <option value="Careers">Careers</option>
                                                <option value="Software Licencing">Software Licencing</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                                <div class="contact-inner contact-message">
                                    <textarea name="con_message" placeholder="Please describe what you need."></textarea>
                                </div>
                                <div class="submit-btn text-center">
                                    <button class="ht-btn ht-btn-md" type="submit">Send message</button>
                                    <p class="form-messege"></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
