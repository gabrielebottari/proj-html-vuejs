<script>
import Card from "./AppCard.vue";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
import '../../assets/scss/partials/swiper.scss';

export default {

  data() {
    return {
        cardsData: [
            {
            img: "finance-course-thumbnail-04-480x298.jpg",
            cost1: "$0",
            cost2: ".00",
            title: "Personal Finance: Financial Securuty Thinking & Principles",
            lessons: "2 Lessons",
            students: "299 Students ",
            free: true,
            },
            {
            img: "course-02-480x298.jpg",
            cost1: "$40",
            cost2: ".00",
            title: "Learning to Write as a Professional Author",
            lessons: "20 Lessons",
            students: "77 Students ",
            free: false,
            },
            {
            img: "stock-full-hd-03-480x298.jpg",
            cost1: "$0",
            cost2: ".00",
            title: "Customer-centric Info-Tech Strategies",
            lessons: "24 Lessons",
            students: "956 Students ",
            free: true,
            },
            {
            img: "stock-full-hd-04-480x298.jpg",
            cost1: "$19",
            cost2: ".00",
            title: "Open Programming Courses for Everyone: Python",
            lessons: "17 Lessons",
            students: "66 Students ",
            free: false,
            },
            {
            img: "stock-full-hd-06-480x298.jpg",
            cost1: "$26",
            cost2: ".00",
            title: "Academic Listening and Note-Taking",
            lessons: "14 Lessons",
            students: "68 Students ",
            free: false,
            },
            
        ],
        currentIndex: 0,
    };
  },
    components: {
        Card,
        Swiper,
        SwiperSlide,

    },
    setup() {
        return {
            modules: [Pagination],
        };
    },
    methods: {
        setCurrentIndex(selectedIndex) {
            const totalCards = this.cardsData.length;
            this.currentIndex = selectedIndex % totalCards;
        },
    },
    computed: {
        visibleCards() {
            const cardsToShow = 3;
            let cards = [];
            for (let i = 0; i < cardsToShow; i++) {
                let index = (this.currentIndex + i) % this.cardsData.length;
                cards.push(this.cardsData[index]);
            }
            return cards;
        },

    },

};
</script>

<template>
    <section>
        <div class="bg-container">
            <div class="container">
                <h4 class="text-uppercase text-center">join maxcoach at best</h4>
                <h2 class="text-center">Latest Online <span>Courses</span></h2>


                <Swiper :slidesPerView="3"
                    :loop="true" 
                    :breakpoints="{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    }" 
                    :pagination="{ clickable: true }"
                    :modules="modules"
                    :spaceBetween="60"
                    class="mySwiper">
                    <SwiperSlide v-for="(cardData, index) in cardsData" :key="index" class="">
                        <Card :card="cardData" />
                    </SwiperSlide>
                </Swiper>

                    <p class="text-center pt-4">
                        Control your personal preference settings to get notified about
                        appropriate courses.
                        <a href="#">
                            View all courses
                            <i class="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </p>
                
            </div>
            <img src="/svg-1.svg" alt="svg">
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;
@use "../../assets/scss/partials/swiper.scss" as*;

.bg-container {
    background-image: linear-gradient(white, $bgContainer);


    h4 {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 2px;
        margin-bottom: 20px;

    }
    h2 {

        font-size: 50px;
        margin-bottom: 50px;
        span {
            font-weight: 400;
            color: $hoverGreen;
        }
    }

    .mySwiper {

        padding: 0 50px 80px 50px;

            .swiper-wrapper {
                display: flex;
            }

        .swiper-slide {
            display: flex;
            justify-content: center;


            .card {
                height: 450px;
            }
        }
    }

    p {
        margin: 0 auto;    
        width: 50%;
        line-height: 1.5;
        color: $darkGrey;
        font-size: 20px;
        a {
            border-bottom: 1px solid lightgray;
            padding-bottom: 2px;
            font-weight: 600;
            color: black;

            &:hover{
                border-bottom: 1px solid black;
                transition: ease-in-out 0.8s;
            }
        }
    }

    img {
        width: 100%;
        height: 100px;
        filter: invert(98%) sepia(13%) saturate(250%) hue-rotate(244deg) brightness(116%) contrast(100%);
    }
}
</style>