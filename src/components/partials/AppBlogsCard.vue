<script>
export default {
  data() {
    return {

    };
  },
  props: {
    card: Object,
  },
  methods: {
    getImagePath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },

  },
};
</script>

<template>
    <div class="card">

        <div class="box-img">
        <img
            :src="getImagePath(`/${card.img}`)"
            alt="foto che fornisce un'idea sul blog corrente"
        />
        </div>

        <div class="box-info px-3">

            <div class="role text-uppercase fs-6">
                {{ card.role }}
            </div>
        
            <h4>{{ card.title }}</h4>
        
            <div class="card-stats">
                <span class="date">
                    <i class="fa-regular fa-calendar"></i>
                    {{ card.date }}
                </span>

                <span class="views">
                    <i class="fa-solid fa-eye"></i>
                    {{ card.views }}
                </span>
            </div>
    
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

.card {
    border: none;
    width: calc(100% / 3);
    background-color: $bgContainer;
    min-height: 300px;
    align-items: stretch;
    cursor: pointer;
    .box-img {
        border-radius: 5px;
        overflow: hidden;
        img {
            width: 100%;
            display: block;
                &:hover {
            transform: scale(1.1);
            transition: ease-out 1s;
            }
        }
    }
    .box-info {
        padding: 25px 0;
        background-color: $bgContainer;
        min-height: 310px;

        .role {
            color: $darkGrey;
            font-weight: 400;
        }

        h4 {
        font-size: 25px;
        line-height: 1.5;
        margin-top: 15px;
        margin-bottom: 20px;
        min-height: 115px;
            &:hover {
                color: $hoverGreen;
            }
        }

        .card-stats {
            color: $darkGrey;
            .date {
                margin-right: 25px;
                font-size: 13px;
                color: $darkGrey;

                & > * {
                    margin-right: 7px;
                }
            }
            .views {
            font-size: 13px;
            color: $darkGrey;

                & > * {
                    margin-right: 7px;
                }
            }
            .role {
            font-size: 13px;
            }
        }
    }
}
</style>