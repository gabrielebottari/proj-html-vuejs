<script >
    export default{
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
                ],
                
        };
    },
    props: {
        card: Object,
    },
}
</script>

<template>
    <section>
        <div class="container">
            <h2 class="text-center">
                Recent Courses
            </h2>
            <!--qui ciclati le card-->
        </div>
    </section>
    
</template>


<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;
@use "../../assets/scss/partials/MySecondaryReset.scss" as*;
</style>

