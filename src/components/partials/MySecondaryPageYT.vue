<script >
    export default{
        data() {
            return {
                
        };
        methods: {

        };
    },
}
</script>

<template>
    <section>
            <div class="container">
                <ul class="d-flex ">
                    <li class="p-2">
                        <a href="#">
                            Home
                        </a>
                    </li>
                    <span class="p-2">
                        /
                    </span>
                    <li class="p-2 ">
                        <a href="#">
                            Success Story
                        </a>
                    </li>
                </ul>
            </div>
            <p class="text-center">
                Success story
            </p>
            <h1 class="text-center mb-5 ">
                The biggest turning point in my life:<br> Wonderful choice.
            </h1>
            
        </section>
        <!-- youtube -->
        <section>
            <div class="container">
                <div class="mgBox">
                    <img src="../../public/img/success-story-poster-image.jpg" alt="">
                    <div class="youtube ">
                        <img src="../../public/img/icon-youtube-play.png" alt="youtube"> 
                    </div>
                </div>
                
            </div>
    </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
@use '../assets/scss/partials/reset.scss' as *;
.mgBox{
        height: 700px;
        position: relative;
        overflow: hidden;
        border-radius: 20px;
        img{
            border-radius: 20px;
            transition: transform 1s ease;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
    .youtube{
        position: absolute;
        width: 100px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }
</style>

