<script>
import * as fb from '@/firebase';
import tasks from '@/helpers/data/task';
import empty from '@/assets/animations/empty.json';
import moods from '@/helpers/data/mood';
import rewards from '@/helpers/data/reward';
import {getShortDateString} from '@/helpers/utils/date'
export default{
    data(){
        return{
            pastData:[],
            emptyAnimation: empty
        };
    },
    async mounted(){
          this.pastData=await fb.getpast7days();
    },
    methods:{
        mood(i){
            return moods[i].name;
        },
        task(i){
            return tasks[i].name;
        },
        reward(i){
            return rewards[i].name;
        },
        dates(i){
            return getShortDateString(i);
        },
        backgroundC(i){
            if(i=='COMPLETED'){
                return ['#d1f8db','#03543f'];
            }
            else if(i=='NOT REPORTED'){
                return ['#fac9ad','#843305'];
            }
            else{
                return ['#f4b3b3','#881616 '];
            }
        },
        async deleteLog(ind){
            fb.deleteLog(this.pastData[ind].docId);
            this.pastData=await fb.getpast7days();
        },
        goStart(){
            this.$router.push('/start');
        }
    }

}


</script>
<template>
    <div class="pastContainer">
       <h2>Past 7 Days</h2> 
      <div v-if="pastData.length==0" class="emptyQ" id="emp">
        <Vue3Lottie :animationData="emptyAnimation" :height="300" :width="300" :loop="false"/>
          <p class="null">Its empty here.</p>
          <p class="emotions">Add your emotions.</p>
          <button class="startBtn" @click="goStart">Start<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
        </button>
    </div>
    <div v-else>
        <table class="tables">
            <tr class="heads">
                <th>DATE</th>
                <th>TASK</th>
                <th>STATUS</th>
                <th>REWARD</th>
                <th>ACTION</th>
            </tr>
            <tr v-for="(doc,index) in pastData" :key="index" class="datas">
               <td class="dateM"><p class="dark">{{ dates(doc.date) }}</p><p class="sub">{{ mood(doc.ActiveMood) }}</p></td>
               <td class="taskM"><p class="dark">{{task(doc.ActiveTask)}}</p><p class="sub">20 mins</p></td>
               <td><p class="stat" :style="{background:backgroundC(doc.taskStatus)[0], color:backgroundC(doc.taskStatus)[1]}">{{ doc.taskStatus }}</p></td>
               <td class="activee"> {{ reward(doc.ActiveReward) }} </td>
               <td class="delete" @click="deleteLog(index)"><p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="delete"><path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path></svg> 
               </p></td>
            </tr>
        </table>
    </div>
    </div>
</template>

<style>
.pastContainer{
    min-height: 150px;
    width:100%;
    border-radius: 8px;
    background-color: white;
    border: solid 1px #07838575;
    margin-top: 30px;
    margin-bottom: 50px;
    overflow-x: scroll;
}
.pastContainer h2{
    padding-top: 20px;
    padding-left: 20px;
    font-weight: 600;
    font-size: 1.3rem;
}
.tables{
    width: 680px;
    margin: 20px;
}
td,th{
    border-bottom: 1px solid #71b6a3db;
    padding:20px 0;
    width:150px;
}
table{
    border-collapse: collapse;
    text-align: left;
}
.delete svg{
    height: 25px;
    width: 25px;
    cursor: pointer;
    fill:#5a5a5a;
}
.delete svg:hover{
    fill: #1f1f1f;
}
.delete{
    padding-left: 10px;
}
.dark{
    font-weight: 600;
    font-size: 1rem;
}
th{
    font-size: 0.8rem;
    color:#333333;
}
.sub{
    font-size: 0.9rem;
    font-weight: 300;
}
.activee{
    font-weight: 600;
    font-size: 0.92rem;
}
.stat{
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 600;
    width: 108px;
    border-radius: 15px;
}
#emp{
    margin-bottom: 40px;
}
</style>