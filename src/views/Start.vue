<template>
    <div class="containerSt">
        <Navbar/>
        <div class="start">
            <swiper-container :slides-per-view="1" :navigation="true" >
               <swiper-slide> 
                <div class="startNav" > 
                    <h2 class="ask">How was your day?</h2>
                </div>
                <moodCards/> 
              </swiper-slide>
              <swiper-slide>
              <div class="startNav">
                    <h2 class="ask">Choose a fun task.</h2>
                </div>
                <taskCards/>
            </swiper-slide>
            <swiper-slide>
            <div class="startNav">
                <h2 class="ask">Earn a reward</h2>
            </div>
            <rewardCards/>
            </swiper-slide>
            <swiper-slide>
            <div class="startNav">
                <h2 class="ask">Are you ready?</h2>
            </div>
            <finish/>
            </swiper-slide>
            </swiper-container>
        </div> 
        <Wave/>
    </div>
    </template>
    
    <script setup>
    import moodCards,{activeMood} from '@/components/moodCards.vue'
    import Navbar from '@/components/Navbar.vue';
    import Wave from '@/components/wave.vue';
    import taskCards,{activeTask} from '@/components/taskCards.vue';
    import rewardCards,{activeReward} from '@/components/rewardCards.vue';
    import moods from '@/helpers/data/mood';
    import tasks from '@/helpers/data/task';
    import rewards from '@/helpers/data/reward';
    import finish from '@/components/finish.vue';
    import {register} from 'swiper/element/bundle';
    import { useRouter } from 'vue-router';
    import { ref } from 'vue';
    register();
    window.scrollTo(0,0);
    </script>
    
    <style>   
    .start{
        padding-top: 100px;
        margin-top: 0px;
        padding-bottom: 300px;
    }
    
    .containerSt{
        height: 100%;
        width: 100%;
    }
    .startNav{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    swiper-container::part(button-prev){
         height: 20px;
         color: #4e4d4d;
         top:7%;
         left:9%;
    }
    swiper-container::part(button-next){
         height: 20px;
         color: #4e4d4d;
         top:7%;
         right:9%;
         
    }
   
    @media (max-width: 800px){
        swiper-container::part(button-prev){
            top:5%;
        }
        swiper-container::part(button-next){
            top:5%;
        }
    }
    </style>