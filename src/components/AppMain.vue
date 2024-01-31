<script>
import Jumbotron from "./partials/AppJumbotron.vue";
import MainEverything from "./partials/AppMainEverything.vue";
import MainSatisfaction from "./partials/AppMainSatisfaction.vue";
import MainWork from "./partials/AppMainWork.vue";
import MainCourses from "./partials/AppMainCourses.vue";
import MainTestimonials from "./partials/AppMainTestimonials.vue";
import MainTransform from "./partials/AppMainTransform.vue";
import MainBlogs from "./partials/AppMainBlogs.vue";
import MainNewsletter from "./partials/AppMainNewsletter.vue";

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
},
    methods: {

    }
}
</script>

<template>
    <main>
        <RouterView></RouterView>
    </main>
</template>

<style lang="scss" scoped>
</style>