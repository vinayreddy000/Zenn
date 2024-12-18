<script setup>
import wave from '@/components/wave.vue';
import Today from '@/components/Today.vue';
import { useCurrentUser } from 'vuefire';
import Navbar from '@/components/Navbar.vue';
import {useRoute, useRouter } from 'vue-router';

const router=useRouter()
async function goStart(){
  router.push('/start')
}
const user= useCurrentUser();

function greetings(){
    var today = new Date()
    var curHr = today.getHours()

    if (curHr < 12) {
      return 'Good morning'
    } else if (curHr < 18) {
      return 'Good afternoon'
    } else {
      return 'Good evening'
    }
}
</script>


<template>
    <div class="containerh">
    <Navbar/>
    <div class="middleh">
    <div class="hih">
        <div class="welcomeUser">
        <p class="userHi">{{ greetings() }} {{ user.displayName }},</p>
        <p class="userh">How are you feeling today?</p>
        <button class="startBtn" @click="goStart">Start <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
        </button>
        </div>
    </div>
    <div class="mainh">
    <Today/>
    </div>
    </div>
    <div class="footerh">
    <wave/>
    </div>
    </div>
    
</template>


<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;650;700;800&display=swap');
body{
    font-family:'Poppins', sans-serif;
    font-weight: 200;
}
.containerh{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
}

.hih{
    width:60%;
    min-height: 230px;
    margin-left: 20%;
    margin-right: 20%;
    border-radius: 8px;
    border: dashed 2px #07838575;
    margin-bottom: 30px;
    margin-top:  50px;
}
.mainh{
    width: 60%;
    margin:0% 20%;
    border: solid 1px #07838575;
    border-radius: 8px;
    height:auto;
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    min-height: 500px;
}
.middleh{
    padding-bottom: 200px;
    margin-top: 50px;
}
@media (max-width: 768px) {
    .hih,.mainh{
        width:90%;
        margin-left:5%;
        margin-right: 5%;
    }
}
.welcomeUser{
    width: 90%;
    height:100%;
    margin: 5% 5%;
    display: flex;
    flex-direction: column;
    font-weight: 650;
    font-size: 1.6rem;
    color: #202020;
}
.startBtn{
    background-color: #05a7aa;
    border: none;
    margin-top:30px;
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
}
.startBtn svg{
    fill: white;
    margin-left: 10px;
}
.startBtn:hover{
    background-color: #09a0a2;
}
.footerh{
    margin-top: 100px;
}



</style>