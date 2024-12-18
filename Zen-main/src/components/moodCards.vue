<script setup>
import moods from '@/helpers/data/mood'
import { Vue3Lottie } from 'vue3-lottie';
import {ref} from 'vue'
</script>
<script>

var activeMood=ref(0); 
function activeMoodSelect(m){
     activeMood.value=m
}
console.log(activeMood.value)
export { activeMood } ;
</script>

<template>
 <div class="moods">
    <div class="cardis">
        <div v-for="(mood,moodIndex) in moods" class="moodCard" :key="mood.name" :class="{'active': moodIndex===activeMood}" @click="activeMoodSelect(moodIndex)">
             <h2 >{{ mood.name}}</h2>
            <Vue3Lottie :animationData="mood.animationData" :height="200" :width="200" :noMargin="true" class="Lottie"/>
         </div>
        </div> 
    </div>  
</template> 

<style>
.moodCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:16%;
    height:270px;
    background-color: white;
    margin-right: 1%;
    border-radius: 8px;
    color: #4e4d4d;
    border: solid 1px #0f9fa1;
    font-weight: 800;
    font-size: 0.6rem;
    cursor: pointer;
}
.cardis{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 1%;
}
.moods{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.ask{
    font-weight: 700;
    font-size: 1rem;
    color: #4e4d4d;
    padding-bottom: 40px;
}
.active{
    background-color: #23acae;
}
@media (max-width: 800px){
    .cardis{
    flex-direction: column;
    }
    .moodCard{
        width: 80%;
        height: 70px;
        margin:10px 0;
        flex-direction: row-reverse;
        align-items: center;
        justify-content:flex-end;
        padding-left: 20px;
    }
    .Lottie{
        height: 50px;
        width: 50px;
    }
    .moodCard h2{
        margin-left: 30px;
    }
   
}
</style>