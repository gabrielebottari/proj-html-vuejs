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
    <section class="startWriting">
            <div class="container ">
                <div>
                    <h1 class="text-center p-5 ">
                        Start writing your own success story with a good<br> beginning from MaxCoach's help
                    </h1>
                </div>
            </div>
        </section>
        <!-- serie di immmagini -->
        <section class="gallery">
            <!-- prima riga gallery -->
            <div class="row gx-0 mb-2">
                <div class="col-3 ">
                    <img src="../../public/img/start-here-gallery-image-01.jpg" alt="">
                    <div class="descriptionGallery d-flex flex-column justify-content-center ">
                        <h3>
                            lonnie marks
                        </h3>
                        <p>
                            tutor
                        </p>
                    </div>
                </div>
                
                <div class="col-4 px-2">
                    <img src="../../public/img/start-here-gallery-image-02.jpg" alt="">
                    <div class="descriptionGallery d-flex flex-column justify-content-center ">
                        <h3>
                            Britney Salker
                        </h3>
                        <p>
                            Educator
                        </p>
                    </div>
                </div>
                <div class="col-3 pe-2">
                    <img src="../../public/img/start-here-gallery-image-03.jpg" alt="">
                    <div class="descriptionGallery d-flex flex-column justify-content-center ">
                        <h3>
                            Bronnies Wallz
                        </h3>
                        <p>
                            Alumnis
                        </p>
                    </div>
                </div>
                <div class="col-2">
                    <img src="../../public/img/start-here-gallery-image-04.jpg" alt="">
                    <div class="descriptionGallery d-flex flex-column justify-content-center ">
                        <h3>
                            Mia Paulo
                        </h3>
                        <p>
                            Writer
                        </p>
                    </div>
                </div>
            </div>
            <!-- seconda riga gallery -->
            <div class="row gx-0  mb-2">
                
                <div class="col-3">
                    <img src="../../public/img/start-here-gallery-image-05.jpg" alt="">
                    <div class="descriptionGallery d-flex flex-column justify-content-center ">
                        <h3>
                            Lina Esthers
                        </h3>
                        <p>
                            Author
                        </p>
                    </div>
                </div>
                <div class="col-3 px-2">
                    <img src="../../public/img/start-here-gallery-image-06.jpg" alt="">
                    <div class="descriptionGallery d-flex flex-column justify-content-center ">
                        <h3>
                            Lorean McPhils
                        </h3>
                        <p>
                            Designer
                        </p>
                    </div>
                </div>
                <div class="col-2">
                    <img src="../../public/img/start-here-gallery-image-07.jpg" alt="">
                    <div class="descriptionGallery d-flex flex-column justify-content-center ">
                        <h3>
                            Anna Muray
                        </h3>
                        <p>
                            Writer
                        </p>
                    </div>
                </div>
            </div>
        </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;
@use '../assets/scss/partials/reset.scss' as *;
.startWriting{
        background-color: #f8f8f8;
    }
.gallery img{
        object-fit: cover;
    }
    
    
    
    .gallery{
        .row{
            div{
                position: relative;
                >img{
                    &:hover{
                        
                    }
                }
                .descriptionGallery{
                    background-color: rgba($color: #000000, $alpha: 0.5);
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    text-align: center;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0;
                    &:hover{
                        color: white;
                        opacity: 1;
                    }
                }
            }
            
        }
    }
    
</style>

