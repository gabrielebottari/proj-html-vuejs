<script>
export default {
    data() {
        return {
            stats: [
                {
                number: "3.092+",
                text: "enrolled learners",
                },
                {
                number: "1.926",
                text: "finished sessions",
                },
                {
                number: "100%",
                text: "satisfaction rate",
                },
            ],

        };
    },
    methods: {

    }
}
</script>

<template>

    <div class="bg-container">

        <section class="container">

            <div class="row">

                <div class="col-4 text-center" v-for="stat in stats">
                    <h3 class="fw-bold py-2">{{ stat.number }}</h3>
                    <h6 class="text-uppercase">{{ stat.text }}</h6>
                </div>


            </div>

        </section>

    </div>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

    .bg-container {

            h3 {
            color: $overGreen;
            font-size: 3em;
        }

        h6 {
            color: $darkGrey;
        }
    }

</style>