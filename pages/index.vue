<template>

  <header class="header">
<div class="header__text-box">
                <h1 class="heading-primary">
                    <span class="heading-primary--sub">The Portfolio of</span>
                    <span class="heading-primary--main">Craig</span>
                    <span class="heading-primary--main">Hector</span>
                    <span class="heading-primary--sub">Web Developer</span>
                </h1>

                
            </div>
            </header>


</template>


<style  lang="scss">





.header {
    height: 100Vh;

    
       
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.8),
        rgba($color-primary-dark, 0.8)),
    url(../assets/images/bg.jpg);
    background-size: cover;
    background-position: top;
    position: relative;
    

  

    @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
            only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
            only screen and (min-width: 125em) {
        background-image: linear-gradient(
            to right bottom,
            rgba($color-primary-light, 0.8),
            rgba($color-primary-dark, 0.8));
    }

  

  
    
    &__text-box {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
}

</style>