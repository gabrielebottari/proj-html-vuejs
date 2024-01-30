<script>
export default {
    data() {
        return {
            isMenuVisible: false, // Stato per tracciare la visibilità del menu

            imgsData: [
            {
            img: "home-01-preview.jpg",
            title: "Max Coach Education",
            },
            {
            img: "home-02-preview.jpg",
            title: "Corse Portal",
            },
            {
            img: "home-03-preview.jpg",
            title: "Distant Learning",
            },
            {
            img: "home-04-preview.jpg",
            title: "Multimedia Pedagogy",
            },
            {
            img: "home-05-preview.jpg",
            title: "Modern Schooling",
            },
            {
            img: "home-06-preview.jpg",
            title: "Personal Finance",
            },
            {
            img: "home-artist-preview.jpg",
            title: "Artist",
            },
            {
            img: "home-business-preview.jpg",
            title: "Business",
            },
            {
            img: "home-gym-coaching-preview.jpg",
            title: "Gym Coaching",
            },
            {
            img: "home-health-coaching-preview.jpg",
            title: "Health Coaching",
            },
            {
            img: "home-kitchen-coach-preview.jpg",
            title: "Kitchen Coach",
            },
            {
            img: "home-motivation-preview.jpg",
            title: "Motivation",
            },
            {
            img: "landing-preview.jpg",
            title: "Landing Page",
            },
            {
            img: "rtl-demo-preview.jpg",
            title: "RTL DEMO",
            },          
        ],
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible; // Inverti lo stato del menu
        }
    }
}
</script>

<template>

    <ul class="d-flex right-menu" :class="{ 'menu-shifted': isMenuVisible }">

        <li data-tooltip="Select Demo" @click="toggleMenu"><i class="fa-solid fa-ruler"></i></li>
        <li data-tooltip="Support Channel" href="#"><i class="fa-regular fa-life-ring"></i></li>
        <li data-tooltip="Documentation" href="#"><i class="fa-regular fa-address-book"></i></li>
        <li data-tooltip="Purchase Maxcoach" href="#"><i class="bi bi-cart3"></i></li>

    </ul>

    <div class="side-menu px-3" :class="{ 'visible': isMenuVisible }">
        <h5 class="text-center text-uppercase py-5 px-3">MAXCOACH - ONLINE LEARNING AND EDUCATION WORDPRESS THEME</h5>
        <button class="btn mb-3"> <i class="bi bi-cart3"></i> Buy Now</button>

        <div class="img-box row">
            <div class="col-6 img-container p-2 rounded-2" v-for="(img, index) in imgsData" :key="index" :data-title="img.title">
                <img :src="`../../../public/${img.img}`" :alt="img.title">
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

ul {
  flex-direction: column;
  background-color: white;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  list-style-type: none;
  width: 40px;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);

  li {
    width: 20px;
    padding: 10px;
    text-align: center;
    cursor: pointer;

    &:hover::after {
      content: attr(data-tooltip);
      position: absolute;
      right: 100%;
      transform: translateY(-80%);
      background-color: black;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      white-space: nowrap;
      font-size: 0.8em;
      z-index: 1;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    
    }

    i{
        color:black;
    }
  }
}

.right-menu {
        position: fixed;
        right: 0;
        top: 20%;
        transition: transform 0.5s ease;

        &.menu-shifted {
            transform: translateX(-320px);
        }
    }

.side-menu {
    position: fixed;
    right: -320px; 
    top: 0;
    bottom: 0;
    width: 320px;
    height: 100%;
    background-color: white;
    transition: right 0.5s ease;
    z-index: 2;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    overflow-y: auto;

    &.visible {
        right: 0;
    }

    &::-webkit-scrollbar {
        display: none;
    }

    h5{
        color: $darkGrey;
    }

    button {
    padding: 15px 30px;
    color: white;
    background-color: $overGreen;
    cursor: pointer;
    font-weight: bold;

    &:hover {
        background-color: $overPurple;
        transition: ease-in-out 0.3s;
        color: white;
        }
    
    }

    .img-container {
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px); // Solleva l'immagine di 5px
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Aggiunge una box-shadow

            &::after {
            content: attr(data-title); // Usa il titolo dell'immagine per il contenuto
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%) translateY(-100%); // Centra sopra l'immagine
            background-color: black; // Sostituisci con il colore desiderato
            color: white;
            padding: 5px 10px;
            border-radius: 5px;
            white-space: nowrap;
            font-size: 0.8em;
            z-index: 1;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            transition: ease-in-out 0.5s;
            
        }
    }

}
}

</style>