<script setup>
import rewards from '@/helpers/data/reward'
import { Vue3Lottie } from 'vue3-lottie';
import {ref} from 'vue'
</script>
<script>

var activeReward=ref(0); 
function activeRewardSelect(m){
     activeReward.value=m
}
console.log(activeReward.value)
export { activeReward } ;
</script>

<template>
 <div class="rewards">
    <div class="cardis">
        <div v-for="(reward,rewardIndex) in rewards" class="rewardCard" :key="reward.name" :class="{'active': rewardIndex===activeReward}" @click="activeRewardSelect(rewardIndex)">
             <h2 >{{ reward.name}}</h2>
            <Vue3Lottie :animationData="reward.animationData" :height="200" :width="200" class="Lottie" :noMargin="true"/>
         </div>
        </div> 
    </div>  
</template> 

<style>
.rewardCard{
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
.rewards{
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
    background-color: #52d4d7;
}
@media (max-width: 800px){
    .cardis{
    flex-direction: column;
    }
    .rewardCard{
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
    .rewardCard h2{
        margin-left: 30px;
    }
}
</style>