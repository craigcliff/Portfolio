<template>
  <!--<div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">Portfolio</a>
        <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
          <nuxt-link class="navbar-item" to="/projects">Projects</nuxt-link>
          <nuxt-link class="navbar-item" to="/contact">Contact</nuxt-link>
        </div>
      </div>
    </nav>
  </div> -->

     <div class="navigation">
            <input type="checkbox" class="navigation__checkbox" id="nav-check" v-model="checked">

            <label for="nav-check" class="navigation__button"   >
                <span class="navigation__icon">&nbsp;</span>
            </label>

        
           
            <div class="navigation__background"  >&nbsp;</div>
   
   
                   
 
   

            <nav  class="navigation__nav"  >
                <ul  class="navigation__list" @click="toggleShow"  >

                 
                  <li class="navigation__item"><nuxt-link class="navigation__link"  to="/">Home</nuxt-link></li>
                  <li class="navigation__item"><nuxt-link class="navigation__link"  to="/about">About</nuxt-link></li>
                  <li class="navigation__item"><nuxt-link class="navigation__link" to="/projects">Projects</nuxt-link></li>
                  <li class="navigation__item"><nuxt-link class="navigation__link"  to="/contact">Contact</nuxt-link></li>
                   
    
                    </ul>
            </nav>
        </div>
</template>

<script>

export default{
  data () {
    return {
      checked: false
    }
  },

  methods:{

    toggleShow() {
      this.checked = !this.checked;
    }
    
  }


  }

</script>

<style lang="scss">




.navigation {
    &__checkbox {
        display: none;
    }

    &__button {
        background-color: $color-white;
        height: 5rem;
        width: 5rem;
        position: fixed;
        
        border-radius: 50%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba($color-black, .1);
        text-align: center;
        cursor: pointer;

        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
       

        @include respond(tab-port) {
            top: 90%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        @include respond(phone) {
            top: 90%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    &__background {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        position: fixed;
        
        background-image: radial-gradient($color-secondary-light, $color-secondary-dark);
        z-index: 1000;
        transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);


        @include respond(tab-port) {
            top: 90%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        @include respond(phone) {
            top: 90%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

    &__nav {
        height: 100vh;
        position: fixed;
        top: -10%;
        left: 0;
        z-index: 1500;

        opacity: 0;
        width: 0;
        transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &__list {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        list-style: none;
        text-align: center;
        width: 100%;
    }

    &__item {
        margin: 1rem;
    }

    &__link {
        &:link,
        &:visited {
            display: inline-block;
            font-family: 'Sofia';
            font-size: 6rem;
            font-weight: 900;
            padding: 1rem 2rem;
            color: $color-white;
            text-decoration: none;
            text-transform: uppercase;
            
            
        }
        
        &:hover,
        &:active {
        
            color: $color-primary;
            
        }
    }


    //FUNCTIONALITY
    &__checkbox:checked ~ &__background {
        transform: scale(80);
    }

    &__checkbox:checked ~ &__nav {
        opacity: 1;
        width: 100%;
    }


    //ICON
    &__icon {
        position: relative;
        margin-top: 2.5rem;

        &,
        &::before,
        &::after {
            width: 2.5rem;
            height: 2px;
            background-color: $color-grey-dark-3;
            display: inline-block;
        }

        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }

        &::before { top: -.8rem; }
        &::after { top: .8rem; }
    }

    &__button:hover &__icon::before {
        top: -1rem;
    }

    &__button:hover &__icon::after {
        top: 1rem;
    }

    &__checkbox:checked + &__button &__icon {
        background-color: transparent;
    }

    &__checkbox:checked + &__button &__icon::before {
        top: 0;
        transform: rotate(135deg);
        
    }

    &__checkbox:checked + &__button &__icon::after {
        top: 0;
        transform: rotate(-135deg);
        
       

    }
    &__checkbox:checked + &__button::after {
        
    }
}





</style>