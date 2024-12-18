<script setup>
import welcome from '@/assets/animations/welcome.json';
import signinButton from '@/components/signinButton.vue';
import wave from '@/components/wave.vue'
import { getCurrentUser } from 'vuefire';
import { useRouter } from 'vue-router'
const router= useRouter();

</script>


<template>
    <div class="container-sg">
    <div class="nav-sg">
        <h2 class="logo-sg">zen</h2>
    </div>
    <div class="main-sg">
    <div class="left-sg">
        <h2 class="welcomeText-sg">
     <p class="black-sg">
        Feel life again 
     </p>
     <p class="blue-sg">from a new perspective</p>
     </h2>
     <p class="caption-sg">Take actionable steps to obtain positive impact on your mental health.</p>
    <signinButton/>
    </div>
    <div class="right-sg">
    <Vue3Lottie :animationData="welcome" :height="500" :width="500" :noMargin="true"/>
    </div>
    </div>
    <div class="footer-sg">
    <wave/>
    </div>
    </div>
    
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;800&display=swap');
.container-sg{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    overflow: hidden;
}
.blue-sg{
    color: #036567;
}
.welcomeText-sg{
    font-size: 8vb;
    font-weight:800;
    line-height: 1;
}
body{
    font-family:'Poppins', sans-serif;
    font-weight: 200;
}
.nav-sg{
    padding-left: 5%;
    padding-top: 1%;
}
.logo-sg{
   font-weight: 600;
}
.caption-sg{
    padding-top: 10px;
    padding-bottom: 20px;
    font-weight: 600;
    font-size: 3vb;
    color: #555555;
}
.main-sg{
    width:100%;
    height:auto;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 200px;
}
.left-sg, .right-sg{
    box-sizing: border-box;
    width:50%;
}
.left-sg{
    padding-top: 100px;
    padding-left: 150px;
}
@media (max-width: 768px) {
    .left-sg {
        width: 100%;
       padding-right: 30px;
       padding-left: 30px;
       padding-top: 60px;
       padding-bottom: 0;
    }
    .right-sg{
        width: 100%;
        padding-top: 0;
        display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
    }
    .welcomeText-sg{
        font-size: 6vb;
    }
    .signinButton-sg{
        margin-left: 30%;
    }
    .caption-sg{
        font-weight: 400;
        font-size: 2.5vb;
    }

}


</style>