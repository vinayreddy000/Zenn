<script setup>
import Navbar from '@/components/Navbar.vue';
import wave from '@/components/wave.vue';
import { ref } from 'vue';
import { useCurrentUser} from 'vuefire';
import {deleteUser} from 'firebase/auth'
import { useRoute, useRouter } from 'vue-router'
import { getAuth } from 'firebase/auth';
const user=useCurrentUser();
const auth=getAuth().currentUser;
const router=useRouter();
var mode=ref("light");
var del=ref(false);
function deleteAcc(){
    del.value=true;
}
async function deleteAccount(){
        auth.delete().then(()=>{
        router.push('/signin');
     })
     .catch((error)=>{
        alert("Failed to delete the account.")
     });
}
</script>

<template>
<div class="containerS">
<Navbar/>
<div class="settings">
 <div class="leftbar">

<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>
<p class="Account">Account</p>
 </div>
 <div class="rightbar">
  <div class="acc"> 
   <p>Delete Account </p>
   <p id="sub">Delete your profile, along with your authentication associations. This includes applications permissions (Google), all contents you have such as rewards, tasks, emotions lists or synced settings.</p>
   <div class="userDetails">
        <p>{{ user.displayName }}</p>
        <p>{{ user.email }}</p>
    </div>
   <button class="deleteS" @click="deleteAcc">Delete</button>
   <Transition>
   <div v-if="del" class="del">
    <p class="delPass">All your progress and data in zen will be deleted and cannot be undone.Are you sure? ( Login again if deletion of the account failed)</p>
    <div class="buts">
    <p class="confirm" @click="deleteAccount">Confirm</p>
    <p class="cancel" @click="del=false">Cancel</p>
    </div>
   </div>
   </Transition>
  </div>
 </div>
</div>
<div class="footerS">
<wave/>
</div>
</div>
</template>

<style>
.containerS{
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.settings{
    margin-top: 120px;
    padding-bottom: 330px;
    margin-left: 10%;
    margin-right: 10%;
    width:80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.rightbar{
    width: 70%;
    min-height: 200px;
    background: white;
    border: 1px solid #07838575;
    padding-top:20px;
    padding-left:20px;
    padding-bottom:20px;
    border-radius: 10px;
}
.leftbar{
    width: 10%;
    height: 200px;
    padding-top: 20px;
    font-weight: 700;
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 20px;
    color:#08696a;
}
.acc p{
 font-weight: 700;
 font-size: 1.2rem;
}
#sub{
    font-weight: 300;
    font-size: 0.9rem;
    color: #4a4a4a;
}
.userDetails{
    margin:20px 0;
}
.userDetails p{
   font-weight: 250;
   font-size: 0.8rem;
}

.del{
    margin-top: 25px;
}
.del p {
    font-weight: 300;
    font-size: 0.9rem;
}
.deleteS{
    color: #952020;
    background: #fed5d5;
    border: none;
    width:90px;
    height: 45px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
}
.buts{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content:baseline;
}
.confirm{
    margin-top: 10px;
    font-family:monospace;
    color: #fa7676;
    font-weight: lighter;
    font-size: 0.8rem;
    border-bottom: solid 1px #949494;
    padding-bottom: 5px;
    width: 75px;
    cursor: pointer;
    background: transparent;
    margin-right: 20px;
    width:auto;
}
.confirm:hover{
    border-bottom: #fa7676 solid 1px;
}
.cancel{
    margin-top: 10px;
    color: #03543f;
    font-family:monospace;
    font-weight: lighter;
    font-size: 0.8rem;
    border-bottom: solid 1px #949494;
    padding-bottom: 5px;
    width: 75px;
    cursor: pointer;
    background: transparent;
    margin-right: 20px;
    width: auto;
}
.cancel:hover{
    border-bottom: #03543f solid 1px;
}
.delete:hover{
    background: #f9b5b5;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}
.leftbar svg{
    height: 25px;
    width: 30px;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@media (max-width: 768px) {
    .settings{
        flex-direction: column;
        margin-left:20% ;
        margin-right: 20%;
        padding-bottom: 250px;
    }
    .leftbar{
        height: auto;
        margin-left: 10px;
        margin-bottom: 10px;
        width:80%;
        justify-content: start;
    }
    .rightbar{
        width:80%
    }
}
</style>