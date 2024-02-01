<script>
import Jumbotron from "../../src/components/partials/AppJumbotron.vue";
import MainEverything from "../../src/components/partials/AppMainEverything.vue";
import MainSatisfaction from "../../src/components/partials/AppMainSatisfaction.vue";
import MainWork from "../../src/components/partials/AppMainWork.vue";
import MainCourses from "../../src/components/partials/AppMainCourses.vue";
import MainTestimonials from "../../src/components/partials/AppMainTestimonials.vue";
import MainTransform from "../../src/components/partials/AppMainTransform.vue";
import MainBlogs from "../../src/components/partials/AppMainBlogs.vue";
import MainNewsletter from "../../src/components/partials/AppMainNewsletter.vue";
import HeaderHomePage from "../../src/components/partials/HeaderHomePage.vue"

export default {
    data() {
        return {

        };
    },
    components: {
    Jumbotron,
    MainEverything,
    MainSatisfaction,
    MainWork,
    MainCourses,
    MainTestimonials,
    MainTransform,
    MainBlogs,
    MainNewsletter,
    HeaderHomePage,
  },
    methods: {

    }
}
</script>

<template>
    <main>
        <HeaderHomePage></HeaderHomePage>
        <Jumbotron></Jumbotron>
        <MainEverything></MainEverything>
        <MainSatisfaction></MainSatisfaction>
        <MainWork></MainWork>
        <MainCourses></MainCourses>
        <MainTestimonials></MainTestimonials>
        <MainTransform></MainTransform>
        <MainBlogs></MainBlogs>
        <MainNewsletter></MainNewsletter>
    </main>
</template>

<style lang="scss" scoped>
</style>