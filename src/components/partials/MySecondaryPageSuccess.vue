<script >
    export default{
        data() {
            return {
                
        };
        methods: {

        };
    },
}
</script>

<template>
    <!-- motiveted -->
    <section class="my-5">
            <div class="container">
                <div class="row d-flex align-items-center ">
                    <div class="col-4">
                        <h3>
                            I learned one thing about online education is that <span class="testoEv">highly motivated individuals</span> always find a way to tackle the challenge in the most creative and flexible way.
                        </h3>
                    </div>
                    <div class="col-8">
                        <p>
                            At MaxCoach, we put ourselves in learners shoes to understand what they want and need, to build handy options for their education and guide them to a better version of themselves. We do the hard work to pave the ways for innovative higher education with advanced delivery modalities.
                        </p>
                        <p>
                            From high school students, tertiary pupils, graduates or post-graduate learners, learners of any levels can easily find a suitable online program for themselves. It’s now convenient than the past to take an online course for  improving the degree, becoming working professionals or pursuing a better job with valid certification… MaxCoach offers a wide range of online options for students around the globe.  
                        </p>
                    </div>
                </div>
                
            </div>
            
        </section>
        <!-- success story img -->
        <section>
            <div class="container">
                <div class="row imgRad mb-5">
                    <div class="col-8">
                        <img src="/success-story-image-01.jpg" alt="">
                    </div>
                    <div class="col-4">
                        <img src="/success-story-image-02.jpg" alt="">
                    </div>
                </div>
            </div>
        </section>
</template>


<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;
@use "../../assets/scss/partials/MySecondaryReset.scss" as*;

.imgRad img{
        border-radius: 10px;
        
    }
.testoEv{
    color: $hoverGreen;
}
</style>

