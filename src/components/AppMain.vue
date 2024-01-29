<script>
import Jumbotron from "./partials/AppJumbotron.vue";
import MainEverything from "./partials/AppMainEverything.vue";
import MainSatisfaction from "./partials/AppMainSatisfaction.vue";
import MainWork from "./partials/AppMainWork.vue";

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
    </main>
</template>

<style lang="scss" scoped>
</style>