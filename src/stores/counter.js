import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCurrentUser, useFirestore } from 'vuefire'
import { collection, doc, getDoc, query, onSnapshot } from '@firebase/firestore'
import { getDocs, setDoc, updateDoc, where } from 'firebase/firestore'
import { getStartOfToday, epochDays } from '@/helpers/utils/date'

let activitiesCollectionRef;
let activitiesCollectionQuery;
let getActivitiesSnapshot=false;

export const useStoreActivities= defineStore('storeActivities',{
  state:()=>({
    activities: [],
    activitiesLoaded: false
  }),
  actions:{
    init(){
      this.getActivities();
    },
    async getActivities(){
      const user=await getCurrentUser();
      const db=useFirestore();
      const url= `/zen-users/${user?.uid}/activities`
      activitiesCollectionRef=doc(collection(db, url));
      activitiesCollectionQuery=query(activitiesCollectionRef,where('date','==',getStartOfToday()));
      getActivitiesSnapshot=onSnapshot(
        activitiesCollectionQuery,
        (querySnapshot) => {
            let articles = [];
            querySnapshot.forEach((doc) => {
                let article = {
                    id: doc.id,
                    moodId:doc.data().ActiveMood,
                    taskId:doc.data().ActiveTask,
                    rewardId: doc.data().ActiveReward,
                    taskStatus: doc.data().taskStatus,
                };
                articles.push(article);
            });
            this.articles = articles;
            this.articlesLoaded = true;
        },
        (error) => {
            console.log('error.message', error.message);
        }
    );
    },
  }
})

