<script setup>
import Navbar from '@/components/Navbar.vue';
import streaks from '@/components/streaks.vue';
import past from '@/components/past.vue';
import wave from '@/components/wave.vue';
import { useCurrentUser } from 'vuefire'
import { getAuth, signOut } from 'firebase/auth'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
const user = useCurrentUser()
const router = useRouter()
window.scrollTo(0,0)
</script>

<template>
    <div class="containerP">
    <Navbar/>
    <div class="mainP">
        <div class="profileP">
            <img :src="user?.photoURL || '/no-man.webp'" >
            <p class="nameP">{{ user?.displayName }}</p>
        </div>
          <streaks/>
          <past/>
    </div>
    <wave/>
    </div>
</template>

<style>
.containerP{
    overflow: hidden;
}
.mainP{
    width:50%;
    margin:0 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 200px;
    margin-top: 30px;
}
.profileP img{
  width: 130px;
  border-radius: 50%;
  border: solid 8px #039799;
}
.profileP{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
}
.profileP p{
    font-size: 1.5rem;
    padding-top: 10px;
}
@media (max-width: 768px) {
    .mainP{
        width:90%;
        margin-left:5%;
        margin-right: 5%;
    }
}
</style>