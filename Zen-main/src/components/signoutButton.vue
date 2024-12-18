<script setup>
import { getAuth, signOut } from 'firebase/auth'
import { useRoute, useRouter } from 'vue-router'
import { useCurrentUser } from 'vuefire'
import {ref} from 'vue'
const user = useCurrentUser()
const router = useRouter()
const route = useRoute()

async function googleSignOut() {
  try {
    const auth = getAuth()
    await signOut(auth)
    router.push('/signin')
  }
  catch (error) {
    console.log(error)
  }
}


</script>


<template>
 <div class="signOut">
    <p type="button" class="signoutButton"  @click="googleSignOut"><img src="@/assets/icons/signout.png" height="20px" width="20px">Sign Out</p>
    </div>

    
</template>

<style>
.signoutButton{
    font-size: 0.9rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
img{
    margin-right: 10px;
}
</style>

