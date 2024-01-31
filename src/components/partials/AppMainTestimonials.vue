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
            <div class="content px-5 d-flex">

                <div class="box-info px-5">
                    <h4 class="text-uppercase">testimonials</h4>
                    <h2>Why Do Peole <span>*Hearts*</span> Us?</h2>
                    <p>
                        Seeking for verbals of our service quality? Find them here.
                        Everything is transparent and straightforward for your sense of
                        justification.
                    </p>
                    
                    <a href="#">
                        <span class="fw-bold">View All <i class="fa-solid fa-arrow-right-long"></i></span> 
                    </a>
                </div>

                <div class="box-person">

                    <h3>
                        Professional team of specialists and passionate mentors at reach
                    </h3>
                    <p>
                        I need to get a certification for English proficiency and MaxCoach
                        is the best choice. Their tutor are smart and professional when
                        dealing with students.
                    </p>

                    <div class="person d-flex">
                        <div class="person-img">
                            <img
                                src="/testimonial-avata-01.jpg"
                                alt="impiegato"
                            />
                        </div>
                        <div class="person-info d-flex">
                            <h4 class="text-uppercase">Madley pondor</h4>
                            <h5>/ IT specialist</h5>
                        </div>
                    </div>

                    <div class="testimonial-top">
                        <h3>The MaxCoach team works really hard to ensure high level of quality</h3>
                        <p>I am happy with their arrangement of lesson and subject. They have smart tutor and they are professional when dealing with students.</p>
                    </div>

                    <div class="testimonial-bottom">
                        <div class="person d-flex">
                            <div class="person-img">
                                <img
                                src="/testimonial-avata-02.jpg"
                                alt="impiegato"
                                />
                            </div>
                            <div class="person-info d-flex">
                                <h4 class="text-uppercase">mina hollace</h4>
                                <h5>/ Freelancer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

section {
  padding-top: 120px;
  padding-bottom: 30px;

    .content {
        margin: 0 auto;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        margin-bottom: 100px;
        .box-info {
            width: 40%;
            position: relative;
            h4 {
                font-size: 14px;
                margin-bottom: 15px;
                color: $darkGrey;
                letter-spacing: 2px;
            }
            h2 {
                font-size: 50px;
                margin-bottom: 20px;
                line-height: 1.3;
                font-weight: 600;
                span {
                    font-weight: 400;
                    color: $hoverGreen;
                }
            }
            p {
                margin-bottom: 20px;
                color: $darkGrey;

            }
            
            a {
                color: black;
                border-bottom: 1px solid lightgray;
                padding-bottom: 2px;
                font-weight: 600;

                &:hover{
                    border-bottom: 1px solid black;
                    transition: ease-in-out 0.8s;
                }
            }

        }
        .box-person {
            position: relative;
            width: 55%;
            padding: 40px;
            background-color: white;
            box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
            rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
            h3 {
                font-size: 20px;
                line-height: 1.5;
                margin-bottom: 20px;
            }
            p {
                color: $darkGrey;
                font-size: 18px;
                line-height: 1.5;
                margin-bottom: 25px;
            }
            .person-img {
                width: 70px;
                height: 70px;
                overflow: hidden;
                border-radius: 50%;
                margin-right: 20px;
                img {
                    width: 100%;
                }
            }
            .person-info {
                flex-direction: column;
                justify-content: center;
                h4 {
                    font-size: 16px;
                    margin-bottom: 15px;
                }
                h5 {
                    font-size: 15px;
                    color: #9c9c9c;
                }
            }

            .testimonial-top {
                position: absolute;
                top: -95px;
                z-index: -1;
                box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
                rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
                padding: 25px;
                width: 75%;
                left: 12.5%;
                filter: opacity(0.5);
                h3 {
                    font-size: 13px;
                    margin-bottom: 10px;
                }
                p {
                    font-size: 12px;
                }
            }

            .testimonial-bottom {
                position: absolute;
                bottom: -75px;
                z-index: -1;
                box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
                            rgba(17, 17, 26, 0.1) 0px 16px 56px, 
                            rgba(17, 17, 26, 0.1) 0px 24px 80px;
                padding: 25px;
                width: 75%;
                left: 12.5%;
                filter: opacity(0.5);
                .person-img {
                    width: 50px;
                    height: 50px;
                    overflow: hidden;
                    border-radius: 50%;
                    margin-right: 20px;
                    img {
                    width: 100%;
                    }
                }
                h4 {
                    font-size: 12px;
                    margin-bottom: 8px;
                }
                h5 {
                    font-size: 11px;
                }
            }
        }
    }
}

</style>