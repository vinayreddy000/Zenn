<template>
    <div class="streakContainer">
        <div class="contentStr">
     <h2 class="streakHead">Streaks</h2>
     <div v-if="streak===0" class="noStreak">
        <p>No ongoing streak.</p>
        <p>Start completing today's task to start a streak.</p>
     </div>
     <div v-else-if="streak>0" class="streak">
        <div class="stars">
        <div v-for="i in Math.min(streak,10)">
            <img src="@/assets/icons/star.png" height="30" width="30"/>
        </div>
        </div>
        <p>You are on a {{ streak }} day streak.</p>
     </div>
     <div v-else class="load">
        <Vue3Lottie :animation-data="emptys" :height="250" :width="250" :loop="false"/>
     </div>
     </div>
    </div>
</template>

<style>
.streakContainer{
    min-height: 190px;
    width:100%;
    border-radius: 8px;
    background-color: white;
    border: solid 1px #07838575;
    margin-top: 30px;
    color: #333333;
}
.contentStr{
    width: 100%;
    margin: 20px;
}
.streakHead{
    font-weight: 600;
    font-size: 1.3rem;
}
.noStreak{
    margin-top: 40px;
    font-weight: 600;
    font-size: 1.2rem;
}
.streak{
    margin-top: 30px;
    font-weight: 600;
    font-size: 1.2rem;
}
.stars{
    width: 100%;
    display: flex;
}
.stars img{
    margin: 5px;
}
.load{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>

<script>
  import * as fb from '@/firebase'
  import empty from '@/assets/animations/empty.json'
  import { Vue3Lottie } from 'vue3-lottie'
  export default{
    data(){
        return{
            streak: -1,
            emptys: empty
        }
    },
    async mounted() {
        this.streak=await fb.getStreakCount()
    },
    components:{
        Vue3Lottie
    }
  }
</script>