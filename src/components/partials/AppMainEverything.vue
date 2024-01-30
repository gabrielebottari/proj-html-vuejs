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
        <section class="container">
            <div class="content d-flex py-5">

                    <div class="info py-5 ps-2 pe-5">
                        <h4 class="text-uppercase">Everything in <span class="fw-bold">Maxcoach</span></h4>
                        <h2>Learn about our<span> Work Culture</span> at MaxCoach</h2>
                        <p class="py-4">
                            Spend some time to visit our website or head office and discover our current courses, 
                            enrollment procedure, and registration deadline. We're opening new classes every beginning of each month. 
                        </p>

                        <div>
                            <button class="btn">
                                Have questions? <span class="fw-bold">Get Free Guide <i class="fa-solid fa-arrow-right-long"></i></span> 
                            </button>
                        </div>

                    </div>

                    <div class="box-img">

                        <img class="on-right" src="../../../public/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg" alt="Everything on Max Coach"/>
                        <img class="on-left" src="../../../public/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="Everything on Max Coach"/>

                        <div class="outer-circle">
                            <div class="inner-circle">
                            </div>
                        </div>

                        <img class="bottom-left" src="../../../public/maxcoach-shape-08.png" alt="shape8">
                        <img class="top-right" src="../../../public/maxcoach-shape-07-150x150.png" alt="shape7">
                        <img class="bottom-right" src="../../../public/maxcoach-shape-02.png" alt="shape2">
                    </div>

            </div>
        </section>
    </div>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

    .bg-container {


            .content {

    height: 700px;
    .info {
        width: 40%;
        
        h4 {
            color: $darkGrey;
        }

        h2 {
            font-size: 3em;
            span {
                color: $overGreen;
            }
        }

        button {
            span {
                color: $overGreen;
                padding-bottom: 3px;
                border-bottom: 1px solid lightgray;

                &:hover{
                    border-bottom: 1px solid $overGreen;
                    transition: ease-in-out 0.8s;
                }
            }
        }
    }

    .box-img{
        position: relative;
        width: 60%;
        .on-right {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
        }

        .on-left {
            position: absolute;
            bottom: 130px;
            left: 50px;
        }
        img {
            display: block;
            border-radius: 5px;
        }

        .bottom-left {
            z-index: -1;
            position: absolute;
            bottom: 100px;
            left: 0;
        }

        .bottom-right {
            position: absolute;
            bottom: 70px;
            right: 60px;
            z-index: -1;

        }

        .top-right {
            z-index: -1;
            position: absolute;
            top: 20px;
            right: 130px;
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
            top: 20px;
            left: 20px;

                .inner-circle {
                width: 60px; /* Diameter of the inner circle (hollow part) */
                height: 60px; /* Same as width for perfect circle */
                background-color: white; /* Match to surrounding background for hollow effect */
                border-radius: 50%; /* Makes the div a circle */
                }
            }
    }

    }
}


</style>