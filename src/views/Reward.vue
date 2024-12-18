<template>
 <div class="rewardContainer">
    <Navbar/>
    <div class="rewardContent">
        <h2 class="enjoy">Enjoy your reward.</h2>
        <Vue3Lottie :animationData="reward().animationData" :height="300" :width="300"/>
        <h3 class="rewardName">{{ reward().name }}</h3>
        <ul class="rewardDesc">
            <li v-for="desc in reward().description">
                 {{ desc }}
            </li>
        </ul>
        <button class="home" @click="goHome()">Home <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>
    </div>
    <div class="footerR">
    <wave/>
    </div>
 </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import wave from '@/components/wave.vue';
import rewards from '@/helpers/data/reward';
import {Vue3Lottie} from 'vue3-lottie';
import { useRouter , useRoute} from 'vue-router';
const router=useRouter();
const route=useRoute();
export default{
    data(){
        return{
            rewardid: 0,
        };
    },
   mounted(){
    this.rewardid= this.$route.query.id,
    window.scrollTo(0,0)
   },
   methods:{
     reward(){
        return rewards[this.rewardid];
     },
     goHome(){
        this.$router.push('/')
     }
   },
   components:{
      Navbar,
      wave
   }
}
</script>

<style>
.rewardContainer{
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.rewardContent{
    color:#333333;
    padding-top: 80px;
    padding-bottom: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.enjoy{
    font-weight: 700;
    font-size: 1.3rem;
}
.rewardName{
    font-weight: 700;
    font-size: 1.2rem;
}
.rewardDesc{
    width: 300px;
    margin-top: 15px;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.home{
    background-color: #08b6b9;
    border: none;
    margin-top:15px;
    width: 100px;
    height: 45px;
    border-radius: 8px;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    fill: white;
}
.home:hover{
    background-color: #0b9295;
}
</style>