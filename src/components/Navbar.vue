<script setup>
import {ref} from 'vue';
import { useCurrentUser } from 'vuefire'
import { getAuth, signOut } from 'firebase/auth'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import signoutButton from './signoutButton.vue';


const user = useCurrentUser()
const router = useRouter()
const route = useRoute()

async function goProfile(){
    router.push('/profile')
}
async function goHome(){
    router.push('/')
}
async function goSettings(){
    router.push('/settings')
}
const active = ref(false);

const toggle =()=> {
        active.value = !active.value
        console.log(active.value)
      }
window.addEventListener('click',function(event){
    if (!event.target.closest('.menus')&& !event.target.closest('.more')) {
        active.value = false;
}})
</script>

<template >
     <div class="navh">
        <div class="rightNav">
        <button class="logoh" @click="goHome">
            <h2>zen</h2>
        </button>
        </div>
        <div class="leftNav">
                <button id="profile" @click="goProfile">
                <img :src="user?.photoURL || '/no-man.webp'" >
                </button>  
            <div class="more" @click="toggle" >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="menus"  v-if="active" >
                <ul>
                    <li @click="goSettings" ><img src="@/assets/icons/settings.png" height="20px" width="20px">Settings</li>
                    <li><signoutButton/></li>
                </ul>
            </div>
        </div>
    </div>
   
</template>

<style>
.navh{
    width: 100%;
    height: 10%;
    padding:0 9%;
    padding-top: 1%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    backdrop-filter:blur(10px);
}
li img{
    margin-right: 10px;
}
.logoh{
   font-weight: 600;
   font-size: 1.2rem;
   background: transparent;
   border: none;
   cursor: pointer;
   margin-bottom: 10px;
}
.logoh h2{
    color:  #03595a;
}
#profile img{
    border-radius: 50%;
    width: 25px;
    cursor: pointer;
}
#profile{
    background: transparent;
    border: none;
    margin-right: 40px;
}
.leftNav{
 display: flex;
 flex-direction: row;
 align-items:baseline;
 width: 90px;
}
.more span{
  width: 4px;
  height: 4px;
  margin: 3px;
  background: #03595a;
  border-radius: 50%;
  display: block;

}
.more:hover{
    cursor: pointer;
}

.menus{
    position: absolute;
    margin-top: 40px;
    width:130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
    height: 100px;
    font-weight: 600;
    font-size: 0.9rem;
    box-shadow: 0 4px 4px #fffefe30, 0 4px 4px #3939393b;
    border-radius: 8px;
    color: #4e4d4d;
}
.menus li{
    list-style: none;
    width:120px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
}
.menus li:hover{
    cursor: pointer;
    background-color: #d5e6fc;
    border-radius: 5px;
}

</style>

