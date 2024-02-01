<script >
    export default{
        data() {
            return {
                cardsData: [
                    {
                    img: "finance-course-thumbnail-04-480x298.jpg",
                    cost1: "$0",
                    cost2: ".00",
                    title: "Personal Finance: Financial Securuty Thinking & Principles",
                    lessons: "2 Lessons",
                    students: "299 Students ",
                    free: true,
                    },
                    {
                    img: "course-02-480x298.jpg",
                    cost1: "$40",
                    cost2: ".00",
                    title: "Learning to Write as a Professional Author",
                    lessons: "20 Lessons",
                    students: "77 Students ",
                    free: false,
                    },
                    {
                    img: "stock-full-hd-03-480x298.jpg",
                    cost1: "$0",
                    cost2: ".00",
                    title: "Customer-centric Info-Tech Strategies",
                    lessons: "24 Lessons",
                    students: "956 Students ",
                    free: true,
                    },                   
                ],
                
        };
    },
    methods: {
        getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
        },
    },
}
</script>

<template>
    <section class="bg-container">
        <div class="container">
            <h2 class="text-center">
                Recent Courses
            </h2>
            <!--qui ciclati le card-->
            <div class="row">
                <div v-for="elem in cardsData" class="card col-4  ">
                
                <div class="box-img">
                    <img
                        :src="getImagePath(`/${elem.img}`)"
                        alt="foto che rappresenta uno dei corsi di questo sito"
                    />
            
                    <div class="tag text-uppercase" v-show="elem.free"><span class="ps-2">free</span></div>
            
                </div>

                <div class="box-info">

                    <div class="cost">
                        <span class="fs-3">{{ elem.cost1 }}</span>
                        <span>{{ elem.cost2 }}</span>
                    </div>

                    <h4 :class="{ hover: hoverCard }">{{ elem.title }}</h4>

                    <div class="card-stats">
                        <span class="lessons">
                            <i class="fa-regular fa-file-lines"></i>
                            {{ elem.lessons }}
                        </span>
                        <span class="students">
                            <i class="fa-regular fa-user"></i>
                            {{ elem.students }}
                        </span>
                    </div>


                </div>
        
            </div>
            </div>
            
        </div>
    </section>
    
</template>


<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;
@use "../../assets/scss/partials/MySecondaryReset.scss" as*;

.card {
    border-radius: 5px;
    overflow: hidden;
    background-color: white;
    min-height: 450px;
    cursor: pointer;
    border: none;
        &:hover {
        -webkit-box-shadow: 0px 0px 60px -30px rgba(0, 0, 0, 0.50);
        -moz-box-shadow: 0px 0px 60px -30px rgba(0, 0, 0, 0.50);
        box-shadow: 0px 0px 60px -30px rgba(0, 0, 0, 0.50);

    }
    .box-img {
        position: relative;
        .tag {
            position: absolute;
            top: 0;
            right: 0;
            color: white;
            background-color: orangered;
            border: none;
            padding: 3px 20px;
            font-size: 20px;
            font-weight: 600;
            opacity: 0.5;
            &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 0;
                height: 0;
                border-left: 20px solid white;
                border-top: 18px solid transparent;
                border-bottom: 20px solid transparent;
            }

        }
    }

    img {
        width: 100%;
        display: block;
        &:hover {
            transform: scale(1.1);
            transition: ease-out 1s;
        }
    }
    .box-info {
        padding: 25px;
        align-items: stretch;
        position: relative;

        .cost{
            span {
            color: $hoverGreen;
            }
        }


        h4 {
            font-size: 20px;
            line-height: 1.5;
            margin-top: 15px;
            margin-bottom: 25px;
            padding: 5px 0;
            &.hover {
                color: $hoverGreen;
            }
        }

        .card-stats {
            color: $darkGrey;
            .lessons {
            margin-right: 25px;
            font-size: 15px;
                & > * {
                    margin-right: 7px;
                }
            }
            .students {
            font-size: 13px;
                & > * {
                    margin-right: 7px;
                }
                }
            .cost {
            font-weight: bold;
                & :first-child {
                    font-size: 20px;
                }
                & :last-child {
                    font-size: 14px;
                }
            }

        }

    }
}

.bg-container {
    background-image: linear-gradient(white, $bgContainer);


    h4 {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 2px;
        margin-bottom: 20px;

    }
    h2 {

        font-size: 50px;
        margin-bottom: 50px;
        span {
            font-weight: 400;
            color: $hoverGreen;
        }
    }

    

    p {
        margin: 0 auto;    
        width: 50%;
        line-height: 1.5;
        color: $darkGrey;
        font-size: 20px;
        a {
            border-bottom: 1px solid lightgray;
            padding-bottom: 2px;
            font-weight: 600;
            color: black;

            &:hover{
                border-bottom: 1px solid black;
                transition: ease-in-out 0.8s;
            }
        }
    }

    img {
        width: 100%;
        
        
    }
}
</style>

