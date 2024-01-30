<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>

    <div class="bg-container">
        <section class="container py-3">

            <div class="content d-flex p-5">
                <!-- parte sinistra con foto -->
                <div class="box-img">
                    <img src="../../../public/stock-full-hd-11-670x450.jpg" alt="About-us"/>
                    <!-- logo youtube-->
                    <div class="yt">
                        <img src="../../../public/icon-youtube-play.png" alt="How we work"/>
                    </div>

                    <img class="mid-left" src="../../../public/maxcoach-shape-05-150x150.png" alt="shape8">
                    <img class="bottom-right" src="../../../public/maxcoach-shape-07-150x150.png" alt="shape7">
                    <img class="top-left" src="../../../public/svg-0.svg" alt="svg0">
                    
                    <div class="outer-circle">
                        <div class="inner-circle"></div>
                    </div>
                </div>
                    <!-- /parte sinistra con foto -->

                    <!-- parte destra con la info -->
                <div class="info">
                    <h4 class="text-uppercase">how we work</h4>
                    <h2>Upgrade Your Skills <span>Upgrade Your Life</span></h2>
                    <p class="py-2">
                        Opening up more opportunities in front of you to get the ticket to
                        more enjoyable door in life. Getting equipped with new skills for
                        new sets of insights into your carrer. MaxCoach accompany learners
                        in every stage of learning.
                    </p>
                    <div class="py-3">
                        <button class="btn p-0">
                            <span class="fw-bold">Download free guidebook <i class="fa-solid fa-arrow-right-long"></i></span> 
                        </button>
                    </div>
                </div>
                    <!-- /parte destra con le info -->
            </div>
            
        </section>
    </div>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

.bg-container {


    .container {
        height: 700px;

        .content{

            .info {
                width: 45%;
                padding: 50px 80px;
                h4 {
                    color: $darkGrey;
                    font-size: 0.9rem;
                }

                h2 {

                    font-size: 2.5em;
                    font-weight: 600;
                    span {
                        color: $overGreen;
                        font-weight: 400;
                    }
                }

                button {
                    span {
                        padding-bottom: 3px;
                        border-bottom: 1px solid lightgray;

                        &:hover{
                            border-bottom: 1px solid black;
                            transition: ease-in-out 0.8s;
                        }
                    }
                }

            }


            .box-img {
            position: relative;
            width: 55%;
                > img {
                width: 100%;
                display: block;
                border-radius: 5px;
                }
                // logo youtube
                .yt {
                width: 100px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                }

                
                .top-left {
                    z-index: -1;
                    position: absolute;
                    width: 180px;
                    top: -50px;
                    left: -100px;
                    filter: invert(100%) 
                            sepia(11%) 
                            saturate(425%) 
                            hue-rotate(206deg) 
                            brightness(113%) 
                            contrast(89%);
                    
                }

                .bottom-right {
                    width: 180px;
                    position: absolute;
                    bottom: -50px;
                    right: -50px;
                    z-index: -1;

                }

                .mid-left {
                    z-index: -1;
                    position: absolute;
                    top: 60px;
                    left: -80px;
                    width: 150px;
                }

                .outer-circle {
                    width: 80px; /* Diameter of the outer circle */
                    height: 80px; /* Same as width for perfect circle */
                    border-radius: 50%; /* Makes the div a circle */
                    background-color: orangered; /* Color of the outer circle */
                    opacity: 0.4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    top: -510px;
                    left: 660px;

                        .inner-circle {
                        width: 60px; /* Diameter of the inner circle (hollow part) */
                        height: 60px; /* Same as width for perfect circle */
                        background-color: $bgContainer; /* Match to surrounding background for hollow effect */
                        border-radius: 50%; /* Makes the div a circle */
                        }
                }
            }

        }
    }
}


</style>