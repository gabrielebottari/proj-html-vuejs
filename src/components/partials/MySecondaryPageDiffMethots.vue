<script >
    export default{
        data() {
            return {
                arrowText:
                [
                    {
                        text:'What are the reasons for learners to choose distant learning (e-learning) over the traditional method?',
                        checkedText:
                        [
                            {
                                textChecked:'FLEXIBILITY – Work, family, degree—it’s all possible.'
                            },
                            {
                                textChecked:'Convenience – Study on your time schedule, no commute, stackable programs lead to certificates and degrees.'
                            },
                            {
                                textChecked:'Proven Modality – More than 5 million students take one or more distance education courses each year.'
                            },

                        ],
                    },
                    {
                        text:'What makes MaxCoach different from others? Is that the equipment or the tutor?',
                        checkedText:
                        [
                            {
                                textChecked:'New Relationships and Networking Opportunities – Learn alongside students who offer diverse levels of experience and perspective. Students enroll from all corners of the world contributing to a rich classroom environment.'
                            },
                        ],
                    },
                    {
                        text:'Which kind of opportunities is opened up to me when I take the lead?',
                        checkedText:
                        [
                            {
                                textChecked:'Career Advancement and Entrepreneurial Opportunities – Advance your career with additional credentials or degrees. Quality of Instruction – University of Illinois faculty are among the most accomplished scholars in the world. Academic Excellence – Online degree seekers earn the same degree as U of I campus-based degree seeking students.'
                                
                            },
                        ],
                    },
                ],
        };
        methods: {

        };
    },
}
</script>

<template>
    <!-- different method -->
    <section>
            <div class="container">
                
                    <div v-for="(elem, i) in arrowText" :key="i" class="row method">
                        <div class="col-4 d-flex ">
                            <div>
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </div>
                            <h5>
                                {{ elem.text }}
                            </h5>
                        </div>
                        <div class="col-8 ">
                            <div v-for="(index, j) in elem.checkedText" :key="j" >
                                
                                
                                    <p>
                                        <span v-if="index == elem.checkedText[0]">
                                            <i class="fa-solid fa-check"></i>
                                        </span>
                                        
                                        {{ index.textChecked }}
                                        
                                    </p>
                                
                            </div>
                        </div>
                        
                        <hr>
                    </div>
                
            </div>
        </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
@use '../assets/scss/partials/reset.scss' as *;
.method{
        height: 300px;
        
    } 
.method{
    height: 300px;
        
}   
    
</style>

