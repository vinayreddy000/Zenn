<script>
import * as fb from '@/firebase';
import tasks from '@/helpers/data/task';
import { Vue3Lottie } from 'vue3-lottie';
import { getCurrentUser, useFirestore } from 'vuefire';
import { getAuth } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { ref } from 'vue';
import empty from '@/assets/animations/empty.json'
import { useRoute,useRouter } from 'vue-router';
export default{
    data() {
        return {
            allData: [],
            emptyAnimation: empty
        };
    },
     async mounted() {
        this.allData = await fb.getLogForToday();
    },
    methods: {
        activities() {
            let l = [];
            for (let i = 0; i < this.allData.length; i++) {
                l.push(tasks[this.allData[i].ActiveTask]);
            }
            return l;
        },
        checkEmpty(){
          if(this.allData.length==0){
            return false;
          }
          else return true;
        },
        finished(id){
            const rid=this.allData[id].ActiveReward;
            fb.updateLog(this.allData[id].docId,'COMPLETED')
            fb.streakIncrement();
            this.$router.push(`/reward?id=${rid}`)
        },
        goStart(){
            this.$router.push('/start')
        },
        async cancel(id){
            fb.updateLog(this.allData[id].docId,'CANCELLED')
            this.allData = await fb.getLogForToday();
        }
    },
   
}
</script>

<template>
    <div class="TodayLogs">
      <h3 class="todayObj">Today's objective</h3>
      <div v-if="checkEmpty()">
        <div v-for="(data,index) in activities()" :key="index" class="taskLog">
            <div class="leftTask">
                 <h3 class="taskName">{{  data.name.toUpperCase() }}</h3>
                 <div class="timer"> <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                 </svg> 20 mins  </div>
                 <ul class="taskDescription">
                    <li v-for="desc in data.description">{{ desc }}</li>
                 </ul>
                 <div class="buttons">
                    <a :href="data.how" class="how" >Learn How <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg></a>
                    <a class="done" @click="finished(index)">I'm Done<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg></a>
                 </div>
                 <p class='quote'>{{ data.quote.description }}</p>
                 <p class="author">{{ data.quote.author }}</p>
                 <p class="CancelTask" @click="cancel(index)">Cancel Task</p>
            </div>
            <div class="rightTask">
                <Vue3Lottie :animationData="data.animationData" :height="300" :width="300" />
            </div>
        </div>
        </div>
        <div v-else class="emptyQ">
          <Vue3Lottie :animationData="emptyAnimation" :height="300" :width="300" :loop="false"/>
          <p class="null">Its empty here.</p>
          <p class="emotions">Add your emotions.</p>
          <button class="startBtn" @click="goStart">Start <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg></button>
        </div>
    </div> 
</template>

<style>
.todayObj{
    font-size: 1.3rem;
    font-weight: 700;
    color: #333333;
}
.TodayLogs{
    height: 100%;
    width:100%;
    margin:30px;
    color: #333333;
}
.taskLog{
    display: flex;
    margin: 40px 0;
    width: 100%;
    height: auto;
}
.leftTask{
    display: flex;
    flex-direction: column;
    width:50%;
}
.rightTask{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
}
.taskName{
    font-weight: 600;
    font-size: 1.5rem;
    letter-spacing: 2px;
    padding-bottom: 10px;
}
.timer{
    border-radius: 40px;
    background-color: #fac9ad;
    width: 90px;
    height: 30px;
    font-size: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
    color: #843305;
    justify-content:center;
}
.timer svg{
    height: 25px;
    width: 25px;
    margin-right: 5px;
}
.buttons{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.buttons a{
  width:130px;
  height:40px;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px ;
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
.how{
    background-color: #d0e0f8;
    margin-right: 10px;
    color: #063b89;
}
.how:hover{
    background-color: #bad4fc;
}
.how svg{
    margin-left: 5px;
}
.done{
    background: #d1f8db;
    color: #03543f;
    fill: #03543f;
}
.done:hover{
    background-color: #abeac4;
}
.taskDescription{
    margin-top: 25px;
    margin-left: 17px;
    font-weight: 300;
    line-height: 30px;
}
.quote{
    margin-top: 20px;
    font-style: italic;
    font-size: 0.75rem;
    font-weight: 300;
}
.author{
    font-style: italic;
    font-size: 0.75rem;
    font-weight: 300;
}
@media (max-width: 768px) {
      .taskLog {
        flex-direction: column; 
      }
      .leftTask,.rightTask{
        width: 100%;
      }
    }

.CancelTask{
    margin-top: 20px;
    font-family:monospace;
    color: #fa7676;
    font-weight: lighter;
    font-size: 0.7rem;
    border-bottom: solid 1px #949494;
    padding-bottom: 5px;
    width: 75px;
    cursor: pointer;
}
.CancelTask:hover{
    border-bottom: #fa7676 solid 1px;
}
.emptyQ{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-weight: 600;
   font-size: 1.1rem;
   color: #333333;
}
.emptyQ button{
    margin-top: 10px;
}

</style>
