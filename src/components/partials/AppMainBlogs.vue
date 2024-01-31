<script>
import BlogsCard from "./AppBlogsCard.vue"
export default {
    data() {
        return {
            cardsData: [
                {
                img: "home-personal-finance-blog-03-480x325.jpg",
                role: "Business",
                title: "Ten Benefits Of Rentals That May Change Your Prespective",
                date: "Dec 28, 2020",
                views: "3.037 views",
                },
                {
                img: "home-personal-finance-blog-02-480x325.jpg",
                role: "Business",
                title: "10 Things Successful Mompreneurs Do Different",
                date: "Dec 29,2020",
                views: "2.667 views",
                },
                {
                img: "home-personal-finance-blog-01-480x325.jpg",
                role: "Business",
                title: "How Stay Calm from the First Time.",
                date: "Dec 30,2020",
                views: "1.965 views",
                },
            ],

        };
    },
    components: {
    BlogsCard,

    },
    methods: {

    }
}
</script>

<template>

 <section>
    <div class="container px-5">
      <h4 class="text-uppercase">read for more joyment</h4>
      <h2>Latest From <span>Our Blogs</span></h2>
      <!-- container card -->
      <div class="cards d-flex">
        <BlogsCard v-for="cardData in cardsData" :card="cardData" />
      </div>
      <!-- /container card -->
    </div>
  </section>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

h4 {
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: center;
  color: $darkGrey;
  letter-spacing: 2px;
}
h2 {

  font-size: 50px;
  margin-bottom: 20px;
  text-align: center;
  margin-bottom: 60px;
  span {
    color: $overGreen;
    font-weight: 400;
  }
}

.cards {
  gap: 30px;
}
section {
  background-color: #f6f6f6;
  padding: 80px 0;
}
</style>