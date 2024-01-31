<script>
export default {
    data() {
        return {
        hoverCard: false,
        };
    },
    props: {
        card: Object,
        index: Number,
    },
    methods: {
        getImagePath(imgPath) {
        return new URL(imgPath, import.meta.url).href;
        },
        cardOnOff() {
        this.hoverCard = !this.hoverCard;
        },
    },
};
</script>

<template>
    <div class="card" @mouseenter="cardOnOff()" @mouseleave="cardOnOff()">
        
        <div class="box-img">
            <img
                :src="getImagePath(`../../../public/${card.img}`)"
                alt="foto che rappresenta uno dei corsi di questo sito"
            />
      
            <div class="tag text-uppercase" v-show="card.free"><span class="ps-2">free</span></div>
       
        </div>

        <div class="box-info">

            <div class="cost">
                <span class="fs-3">{{ card.cost1 }}</span>
                <span>{{ card.cost2 }}</span>
            </div>

            <h4 :class="{ hover: hoverCard }">{{ card.title }}</h4>
        <!-- icone con testo -->
        <span class="lessons">
            <i class="fa-regular fa-file-lines"></i>
            {{ card.lessons }}
        </span>
        <span class="students">
            <i class="fa-regular fa-user"></i>
            {{ card.students }}
        </span>
        <!-- /icone con testo -->
        </div>
        <!-- /info -->
    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

.card {
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  cursor: pointer;
  border: none;
  &:hover {
    -webkit-box-shadow: 0px 0px 75px -30px rgba(0, 0, 0, 0.55);
-moz-box-shadow: 0px 0px 75px -30px rgba(0, 0, 0, 0.55);
box-shadow: 0px 0px 75px -30px rgba(0, 0, 0, 0.55);

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

    .cost{
        span {
        color: $overGreen;
        }
    }


    h4 {
      font-size: 20px;
      line-height: 1.5;
      margin-top: 15px;
      margin-bottom: 25px;
      padding: 5px 0;
      &.hover {
        color: $overGreen;
      }
    }
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
</style>