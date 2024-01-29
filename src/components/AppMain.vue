<script>
import Jumbotron from "./partials/AppJumbotron.vue";
import MainEverything from "./partials/AppMainEverything.vue";
import MainSatisfaction from "./partials/AppMainSatisfaction.vue";
import MainWork from "./partials/AppMainWork.vue";
import MainCourses from "./partials/AppMainCourses.vue"

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

  },
    methods: {

    }
}
</script>

<template>
    <main>
        <Jumbotron></Jumbotron>
        <MainEverything></MainEverything>
        <MainSatisfaction></MainSatisfaction>
        <MainWork></MainWork>
        <MainCourses></MainCourses>
    </main>
</template>

<style lang="scss" scoped>
</style>