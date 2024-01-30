<script>
import Sidemenu from "./AppMainSidemenu.vue"
    

export default {
    data() {
        return {

        };
    },
    components: {
        Sidemenu,
    },

    methods: {

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
        color: $overGreen;
        &:hover {
            background-color: $overGreen;
            transition: ease-in-out 0.3s;
            color: white;
        }

    }

    }
    

}

</style>