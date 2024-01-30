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
    <!-- immagine -->
    <div class="box-img">
      <img
        :src="getImagePath(`../../../public/${card.img}`)"
        alt="foto che rappresenta uno dei corsi di questo sito"
      />
      <!-- tag free -->
      <div class="tag upper" v-show="card.free">free</div>
      <!-- /tag free -->
    </div>
    <!-- /immagine -->
    <!-- info -->
    <div class="box-info">
      <!-- costo del corso -->
      <div class="cost">
        <span>{{ card.cost1 }}</span>
        <span>{{ card.cost2 }}</span>
      </div>
      <!-- /costo del corso -->
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
  .box-img {
    position: relative;
    .tag {
      position: absolute;
      top: 0;
      right: 0;
      color: white;
      padding: 0px 10px;
      font-size: 14px;
      height: 24px;
      line-height: 24px;
      &::after {
        content: "";
        border-left: 14px solid transparent;
        display: block;
        position: absolute;
        top: 0px;
        left: -12px;
      }
    }
  }
  img {
    width: 100%;
    display: block;
  }
  .box-info {
    padding: 25px;

    .cost{
        span {
        color: $overGreen;
        }
    }


    h4 {
      font-size: 16px;
      line-height: 1.5;
      margin-top: 15px;
      margin-bottom: 25px;
      &.hover {
        color: $overGreen;
      }
    }
    .lessons {
      margin-right: 25px;
      font-size: 13px;
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