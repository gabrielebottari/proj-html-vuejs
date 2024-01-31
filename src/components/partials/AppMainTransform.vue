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

    <section>
        <div class="container">
            <div class="content d-flex">

                <div class="box-img ms-5 ps-1">

                    <img src="/home-3-team-image.png" alt="Everything on Max Coach"/>
                    <img class="top-left" src="/maxcoach-shape-05.png" alt="shape05"/>
                    <img class="bottom-right" src="/maxcoach-shape-07.png" alt="shape07"/>    
                    <img class="mid-left" src="/maxcoach-shape-01.png" alt="" />
                
                    <div class="svg">
                        <img src="/svg-0.svg" alt="svg0" />
                    </div>

                    <div class="outer-circle">
                        <div class="inner-circle"></div>
                    </div>

                </div>

                <div class="box-info pe-4">

                    <h4 class="text-uppercase">Everything in <span>Maxcoach</span></h4>
                    <h2>We're Here To <span>Transform</span> You!</h2>
                    <p class="pe-5">
                        As learnes, people can enjoy great companionship from MaxCoach
                        mentors and educators. We can help you develop and grow at your
                        best.
                    </p>
                    <button class="btn btn-light px-5 py-3">
                        Get Free Guide
                    </button>

                </div>           
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

.content {
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 150px;
    .box-info {
        width: 40%;
        position: relative;
        h4 {
        font-size: 15px;
        color: $darkGrey;
        margin-bottom: 15px;
        font-weight: lighter;
            span {
                font-weight: bold;
            }
        }
        h2 {
        
        font-size: 50px;
        margin-bottom: 20px;
        line-height: 1.3;
            span {
                color: $hoverGreen;
            }
        }
        p {
        
        font-size: 15px;
        line-height: 1.4;
        margin-bottom: 20px;
        }

        button {
            background-color: $hoverGreen;
            color: white;
            font-weight: 600;
            font-size: 0.9em;

            &:hover {
            background-color: $hoverPurple;
            transition: ease-in-out 0.3s;
            color: white;
            }
        }
    }
    .box-img {
        width: 45%;
        position: relative;
        img {
            width: 100%;
            display: block;
            border-radius: 5px;
        }

        .top-left {
            display: block;
            width: 180px;
            height: 180px;
            position: absolute;
            top: 120px;
            left: -40px;
            z-index: -1;
        }

        .bottom-right {
            display: block;
            height: 150px;
            width: 150px;
            position: absolute;
            bottom: 10px;
            right: 100px;
            z-index: -1;
        }

        .mid-left {
            width: 130px;
            position: absolute;
            bottom: 80px;
            left: -200px;
        }

        .svg {
            width: 200px;
            position: absolute;
            top: 10px;
            left: -4vw;
            z-index: -1;
            transform: rotate(45deg);
            img {
                width: 100%;
                display: block;
                filter: invert(56%) sepia(74%) saturate(449%) hue-rotate(121deg) brightness(86%) contrast(86%);
                opacity: 0.5;
            }
        }
        
        .outer-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: orangered;
            opacity: 0.4;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            top: -600px;
            left: 600px;
            .inner-circle {
                width: 60px;
                height: 60px;
                background-color: white;
                border-radius: 50%;
            }
        }
    }
}

</style>