<script>
import Jumbotron from "./partials/AppJumbotron.vue";
import MainEverything from "./partials/AppMainEverything.vue";
import MainSatisfaction from "./partials/AppMainSatisfaction.vue";

export default {
    data() {
        return {

        };
    },
    components: {
    Jumbotron,
    MainEverything,
    MainSatisfaction,

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
    </main>
</template>

<style lang="scss" scoped>
</style>