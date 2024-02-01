<script >
    export default{
        data() {
            return {
                adress:
                [
                    {
                        adressLink:'382 NE 191st St # 87394 Miami, FL 33179-3899',
                        href:'#',
                    },
                    {
                        adressLink:'+1 (305) 547-9909 (9am - 5pm EST, Monday - Friday)',
                        href:'#',
                    },
                    {
                        adressLink:'support@maxcoach.com',
                        href:'#',
                    },
                ],
                explore:
                [
                    {
                        exploreLink:'Start here',
                        href:'#',
                    },
                    {
                        exploreLink:'Blog',
                        href:'#',
                    },
                    {
                        exploreLink:'About us',
                        href:'#',
                    },
                    {
                        exploreLink:'Success story',
                        href:'#',
                    },
                    {
                        exploreLink:'Courses',
                        href:'#',
                    },
                    {
                        exploreLink:'Contact us',
                        href:'#',
                    },
                ],
                information:
                [
                    {
                        InformationLink:'Membership',
                        href:'#'
                    },
                    {
                        InformationLink:'Puchase guide',
                        href:'#'
                    },
                    {
                        InformationLink:'Privacy policy',
                        href:'#'
                    },
                    {
                        InformationLink:'Teams of services',
                        href:'#'
                    },
                ],
            };
        },
        methods: {

        }
    }
</script>

<template>
    <footer class="bg_colorFt">
        <section class="container footerTop ">
            <div class="row">
                <div class="col p-4">
                    <h4>
                        Address
                    </h4>
                    <ul>
                        <li v-for="(elem, i) in adress" :key="i">
                            <a :href="elem.href">
                                {{ elem.adressLink }}
                            </a>
                        </li>
                    </ul>
                    <div>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
                <div class="col d-flex p-4">
                    <!-- explore -->
                    <div >
                        <h4 class="col-12">
                            Explore
                        </h4>
                        <ul class="row">
                            <li class="col-5"  v-for="(index,j) in explore" :key="j">
                                <a class="hoverExplore" :href="index.href">
                                    {{ index.exploreLink }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!-- information -->
                    <div class="ps-5">
                        <h4>
                            Information
                        </h4>
                        <ul>
                            <li v-for="(inf, k) in information" :key="k">
                                <a class="hoverInformation" :href="inf.href">
                                    {{ inf.InformationLink }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
            

            
        </section>
        <section class="d-flex justify-content-center align-items-center footerBottom">
            <div>
                © 2020 Maxcoach. All Rights Reserved
            </div>
        </section>
    </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
@use '../assets/scss/partials/reset.scss' as *;
    .bg_colorFt{
        background-color: $bgBlue;
        height: 400px;
        *{
            color: white;
        }
        .footerTop{
            height: 300px;
            ul{
                li{
                    padding-bottom: 10px;
                    
                    a{
                        color: $grey;
                        
                        
                        
                    }
                    .hoverExplore, .hoverInformation{
                        &:hover{
                            color: $hover;
                        }
                    }
                }
            }
            i{
                padding: 10px;
                font-size: 25px;
                &:hover{
                    color: $hover;
                }
            }
        }
        .footerBottom{
            height: 100px;
        }
    }
</style>

