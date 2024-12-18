<script setup>
import tasks from '@/helpers/data/task'
import { Vue3Lottie } from 'vue3-lottie';
import {ref} from 'vue'
</script>
<script>

var activeTask=ref(0); 
function activeTaskSelect(m){
     activeTask.value=m
}
console.log(tasks[activeTask.value])
export { activeTask } ;
</script>

<template>
 <div class="tasks">
    <div class="cardis">
        <div v-for="(task,taskIndex) in tasks" class="taskCard" :key="task.name" :class="{'active': taskIndex===activeTask}" @click="activeTaskSelect(taskIndex)">
             <h2 >{{ task.name}}</h2>
            <Vue3Lottie :animationData="task.animationData" :height="200" :width="200" class="Lottie" :noMargin="true"/>
         </div>
        </div> 
    </div>  
</template> 

<style>
.taskCard{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:16%;
    height:270px;
    background-color: white;
    margin-right:1%;
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
.tasks{
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
    .taskCard{
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
    .taskCard h2{
        margin-left: 30px;
    }
}
</style>