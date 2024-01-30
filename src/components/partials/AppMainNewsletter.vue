<script>
export default {
    data() {
        return {

        };
    },
    methods: {

    }
}
</script>

<template>

    <section>
        <div class="container">
            <h2>
                Subscribe
                <span>Newsletters</span>
            </h2>
            <p>
                Enter your email address to register our newsletter subscription
                delivered on a regular basis!
            </p>
            <div class="outer-circle">     
                <div class="inner-circle"></div>
            </div>
            <img class="top-right" src="../../../public/maxcoach-shape-09.png" alt="shape9">
            <img class="bottom-right" src="../../../public/maxcoach-shape-02.png" alt="shape2">
            <div class="input-box d-flex">
                <label for="email" class="d-none">Enter your email</label>
                <input type="email" placeholder="Enter your email" id="email"/>
                <button>Subscribe</button>
            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use "../../assets/scss/partials/variables.scss" as *;
@use "../../assets/scss/partials/reset.scss" as*;

section {
  padding: 70px 100px;
  position: relative;

h2 {

  font-size: 50px;
  text-align: center;
  margin-bottom: 20px;
  position: relative;
  font-weight: 600;
  span {
    color: $overGreen;
    font-weight: lighter;
  }
  // campitura quadrata inclinata

}
p {
  color: $darkGrey;
  text-align: center;
  font-size: 20px;
  width: 55%;
  margin: 0 auto;
  line-height: 1.6;


}
.outer-circle {
    width: 50px; 
    height: 50px; 
    border-radius: 50%; 
    background-color: $overGreen; 
    opacity: 0.4;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -50px;
    left: 0px;

    .inner-circle {
        width: 35px; 
        height: 35px; 
        background-color: $bgContainer; 
        border-radius: 50%; 
    }
}
.top-right {
    display: block;
    width: 200px;
    height: 200px;
    position: absolute;
    right: 180px;
    top: 50px;
  }

  // simbolo maxcoach a destra
.bottom-right {
    display: block;
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 50px;
    right: 120px;
  }
.input-box {
  width: 50%;
  margin: 0 auto;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  input {
    border: none;
    outline: none;
    background-color: $bgContainer;
    padding: 15px 20px;
    flex-grow: 1;
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


}
}


</style>