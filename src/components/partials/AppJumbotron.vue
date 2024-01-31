<script>
import Sidemenu from "./AppMainSidemenu.vue"
    

export default {
    data() {
        return {
            showBackToTopButton: false,
            lastScrollPosition: 0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    components: {
        Sidemenu,
    },

    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
            handleScroll() {
        const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
            if (currentScrollPosition < this.lastScrollPosition) {

                this.showBackToTopButton = true;
            } else {

                this.showBackToTopButton = false;
            }
            this.lastScrollPosition = currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        }
  


    }
}
</script>

<template>

    <section class="text-center text-white d-flex align-items-center justify-content-center">
            <div class="mx-auto">
                <h2 class="fw-bold">Commence Business</h2>
                <h1 class="fw-lighter pb-2">Distant Mentoring Program</h1>
                <div>
                    <button class="btn btn-light px-5 py-3">
                        Download free guidebook <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
                <Sidemenu/>
                <button class="back-to-top d-flex justify-content-center align-items-center" @click="scrollToTop" v-show="showBackToTopButton"><i class="bi bi-arrow-up fs-3 pb-1"></i></button>
            </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

section {
    background-image: url(../../../public/home-3-hero-bg.jpg);
    background-size: cover;
    height: 700px;

    div{
        position: relative;
    

    h1{
        font-size: 4em;
    }

    button {        
        font-size: 15px;
        font-weight: 700;
        color: $hoverGreen;
        &:hover {
            background-color: $hoverGreen;
            transition: ease-in-out 0.3s;
            color: white;
        }

    }

    }

    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background-color: $hoverGreen;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        z-index: 2;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55);
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.55);
        position: fixed;
    }
        
}

</style>