<template>
<div>
  <div class="wasteland"></div>
<div class="glass"></div>
</div>
</template>




<style>

 


.wasteland {
  animation:zoomIn 10s linear infinite alternate;
  background-image:url();
  filter: opacity(60%) grayscale(100%);
  background-size:cover;
  height:100vh;
  position:fixed;
  width:100vw;
}

.glass {
  animation:zoomIn 10s linear infinite alternate-reverse;
  background-image:url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/71829/5791996587_7b192ffbf7_o.jpg);
  background-size:cover;
  height:100vh;
  opacity:.3;
  position:fixed;
  width:100vw;
}

@keyframes zoomIn {
  0% {
    transform:scale(1);
  }
  100% {
    transform:scale(1.5);
  }
}

</style>