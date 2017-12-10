<template>
   <section class="section-features">
                
                <div class="row">
                 

                    <div class="col-1-of-2">
                        <img src="http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg" alt>
                    </div>

                    <div class="col-1-of-2">
                       <img src="http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg" alt>
                    </div>
                    

                    
                </div>

                <div class="row">
                 

                    <div class="col-1-of-2">
                       <img src="http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg" alt>
                    </div>

                    <div class="col-1-of-2">
                       <img src="http://media.digitalcameraworld.com/files/2012/10/Vertorama_landscape_photography_tips_PHO17.insight02and03.vertorama.jpg" alt>
                    </div>
                    

                    
                </div>
            </section>
</template>

<style lang="scss">
{

.section-features {
    padding: 20rem 0;
    background-image: linear-gradient(
        to right bottom,
        rgba($color-primary-light, 0.8),
        rgba($color-primary-dark, 0.8));
    background-size: cover;
    transform: skewY(-7deg);
    margin-top: -10rem;

    & > * {
        transform: skewY(7deg);
    }

    @include respond(tab-port) {
        padding: 10rem 0;
    }

}

.img {
   width:400px; /*width of your image*/
   height:200px; /*height of your image*/

   margin:0; /* If you want no margin */
   padding:0; /*if your want to padding */
}




}