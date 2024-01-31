<script>
export default {
    data() {
        return {
            stats: [
                {
                number: "3092",
                text: "enrolled learners",
                },
                {
                number: "1926",
                text: "finished sessions",
                },
                {
                number: "100",
                text: "satisfaction rate",
                },
            ],
            animatedNumbers: [],

        };
    },
    methods: {
        animateNumber(finalNumber, index) {
            let currentNumber = 0;
            const increment = finalNumber / 100; // Regola per la velocità dell'animazione

            const interval = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= finalNumber) {
                    currentNumber = finalNumber;
                    clearInterval(interval);
                }
                
                this.animatedNumbers[index] = Math.floor(currentNumber);
            }, 10);
        }

    },
    mounted() {
        this.stats.forEach((stat, index) => {
            this.animatedNumbers.push(0); // Inizializza a zero
            this.animateNumber(parseInt(stat.number), index);
        });
    
    }
}
</script>

<template>

    <div class="bg-container py-3">
        <section class="container">
            <div class="row">
                <div class="col-4 text-center" v-for="(stat, index) in stats" :key="index">
                    <h3 class="fw-bold py-2">
                        {{ animatedNumbers[index] }}
                        <span v-if="index === 0">+</span>
                        <span v-if="index === 2">%</span>
                    </h3>
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
        position: relative;
        margin-bottom: 50px;

        h3 {
            color: $hoverGreen;
            font-size: 3em;
        }

        h6 {
            color: $darkGrey;
        }
    }

</style>