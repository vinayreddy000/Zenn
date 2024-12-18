<script setup>
import tasks from '@/helpers/data/task'
import moods from '@/helpers/data/mood'
import rewards from '@/helpers/data/reward'
import {activeTask}  from './taskCards.vue';
import {activeMood} from './moodCards.vue';
import {activeReward} from './rewardCards.vue';
import * as fb from '@/firebase';
import { getCurrentUser, useFirestore } from 'vuefire'
import { useRouter } from 'vue-router';

import { getAuth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

const auth=getAuth();
const firestore=new Firestore();
const router=useRouter();
async function finishClicked(moodInd,taskInd,rewardInd){
    const entry={
          ActiveMood: moodInd,
          ActiveTask: taskInd,
          ActiveReward: rewardInd,
          taskStatus: 'PENDING',
     } 
    console.log(entry);
    console.log(" "+taskInd+" "+moodInd+" "+rewardInd)
    fb.addLogEntryForToday(entry);
    await
    router.push('/')
}
</script>

<template>
<div class="finishTips">
    <ul>
        <li v-for="desc in tasks[activeTask].description">{{desc}}</li>
    </ul>
    <button class="ready" @click="finishClicked(activeMood,activeTask,activeReward)">Accept<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></button>
</div>
</template>

<style>
.finishTips{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 270px;
    font-weight: 700;
    color: #4e4d4d;
    padding-left:20px
}
.ready{
    background:#06bbbe;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    width: 130px;
    height: 45px;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1rem;
    margin-right: 20px;
}
.ready svg{
    fill: white;
    margin-left: 10px;
}
.ready:hover{
    background: #0a8f91;
}
</style>