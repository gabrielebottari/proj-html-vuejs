<script>
import MyAppHeader from "../../src/components/partials/MyAppHeader.vue";
import MySecondaryPageCourses from "../../src/components/partials/MySecondaryPageCourses.vue";
import MySecondaryPageDiffMethods from "../../src/components/partials/MySecondaryPageDiffMethots.vue";
import MySecondaryPageGallery from "../../src/components/partials/MySecondaryPageGallery.vue";
import MySecondaryPageSuccess from "../../src/components/partials/MySecondaryPageSuccess.vue";
import MySecondaryPageYT from "../../src/components/partials/MySecondaryPageYT.vue";

export default {
    data() {
        return {

        };
    },
    components: {
        MyAppHeader,
        MySecondaryPageCourses,
        MySecondaryPageDiffMethods,
        MySecondaryPageGallery,
        MySecondaryPageSuccess,
        MySecondaryPageYT,
    },
    methods: {

    }
}
</script>

<template>
    <main>
        <MyAppHeader></MyAppHeader>
        <MySecondaryPageYT></MySecondaryPageYT>
        <MySecondaryPageSuccess></MySecondaryPageSuccess>
        <MySecondaryPageDiffMethods></MySecondaryPageDiffMethods>
        <MySecondaryPageCourses></MySecondaryPageCourses> 
        <MySecondaryPageGallery></MySecondaryPageGallery>
    </main>
</template>

<style lang="scss" scoped>
</style>