<script>
import Card from "./AppCard.vue";
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
    },
    methods: {
        setCurrentIndex(selectedIndex) {
    // Calculate the starting index of the set of three cards
    this.currentIndex = Math.floor(selectedIndex / 3) * 3;
  },
    },
    computed: {
        visibleCards() {
    const cardsToShow = 3;
    return this.cardsData.slice(this.currentIndex, this.currentIndex + cardsToShow);
  },
},
};
</script>

<template>
  <section>
    <div class="container">
      <h4 class="upper">join maxcoach at best</h4>
      <h2>Latest Online <span>Courses</span></h2>
      <!-- contenitore card -->
      <div class="cards flex">
  <Card
    v-for="(cardData, index) in visibleCards"
    :card="cardData"
    :key="cardData.id"
  />
</div>
      <!-- /contenitore card -->
      <!-- puntini stile slider sotto le card -->
      <div class="thumbs d-flex">
  <button
    v-for="(cardData, index) in cardsData"  
    :key="index"
    type="button"
    @click="setCurrentIndex(index)"
    class="thumb"
  ></button>
</div>
      <!-- /puntini stile slider sotto le card -->
      <!-- testo con link sotto i puntini -->
      <div class="all-courses">
        Control your personal preference settings to get notified about
        appropriate courses.
        <a href="#">
          View all courses
          <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </div>
      <!-- /testo con link sotto i puntini -->
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;


h4 {
  font-size: 14px;

  margin-bottom: 15px;
  font-weight: lighter;
  text-align: center;
}
h2 {

  font-size: 34px;
  text-align: center;
  margin-bottom: 50px;
  span {

    font-weight: lighter;
  }
}

.cards {
  display: flex;
  overflow: hidden; // Hide the overflowed content

  .card {
    flex: 0 0 33.33%; // Each card takes up a third of the container
    // Add other styling as needed
  }
}
.thumbs {
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  .thumb {
    width: 8px;
    height: 8px;
    background-color: #d8d8d8;
    border-radius: 50%;
  }
  .thumb:first-child {
    width: 12px;
    height: 12px;
    background-color: black;
    border-radius: 50%;
  }
}
.all-courses {
  width: 45%;
  margin: 0 auto;
  margin-top: 40px;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
  a {
    border-bottom: 1px solid black;
    padding-bottom: 1px;
    font-weight: bold;
  }
}
section {
  background-image: linear-gradient(white, #f6f6f6);
  position: relative;
  padding-bottom: 80px;
  // onda nella parte bassa della sezione
  &::after {
    content: "";
    width: 100%;
    height: 100px;
    display: block;
    position: absolute;
    background-color: #f6f6f6;
    border-radius: 100%;
    bottom: -50px;
  }
}
</style>