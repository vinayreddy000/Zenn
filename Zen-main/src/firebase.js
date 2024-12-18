import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { firebaseConfig } from '../firebase.config';
import { collection, doc, getDoc, query } from '@firebase/firestore'
import { getDocs, setDoc, updateDoc, where , deleteDoc} from 'firebase/firestore'
import { getCurrentUser, useFirestore} from 'vuefire';
import { ref } from 'vue';
// ... other firebase imports
/* const firebaseConfig = {
  apiKey: import.meta.env.apiKey,
  authDomain: import.meta.env.authDomain,
  projectId: import.meta.env.projectId,
  storageBucket: import.meta.env.storageBucket,
  messagingSenderId: import.meta.env.messagingSenderId,
  appId: import.meta.env.appId
}; */

export const firebaseApp = initializeApp(firebaseConfig)



import { getStartOfToday, epochDays } from '@/helpers/utils/date'
import { get } from 'firebase/database';



export async function getLogForToday() {
  const db=useFirestore();
  const user=await getCurrentUser();
  const url= `/zen-users/${user?.uid}/activities`
  const collectionRef = collection(db, url);
  const q=query(collectionRef,where('date','==',getStartOfToday()))
  const colDocs=await getDocs(q);
  let allData=[];
  colDocs.forEach((doc)=>{
    if(doc.data().taskStatus=='PENDING'){
    let activity={
      ActiveMood: doc.data().ActiveMood,
          ActiveTask: doc.data().ActiveTask,
          ActiveReward: doc.data().ActiveReward,
          taskStatus: doc.data().taskStatus,
          docId: doc.id,
    }
    allData.push(activity)
  }
 });
 console.log(allData)
 return allData;
}


export async function updateLog(docId,mssg){
     const db=useFirestore();
     const user=await getCurrentUser();
     const url=`/zen-users/${user?.uid}/activities/${docId}`
     const docRef= doc(db,url)
     await updateDoc(docRef,{
          taskStatus: mssg
     })
}




export async function addLogEntryForToday(entry) {

  console.log(entry)
  const db=useFirestore();
  const user=await getCurrentUser();

  const url= `/zen-users/${user?.uid}/activities`
  const docRef=doc(collection(db, url));
  const activity={
    date: getStartOfToday(),
    createdOn: Date.now(),
    ...entry,
  }
  console.log(url)
  await setDoc(docRef, activity, { merge: true })
  
}

export async function streakIncrement(){
    const db=useFirestore();
    const user=await getCurrentUser();
    const today=getStartOfToday();
    const url=`zen-users/${user?.uid}/stats/streak`;
    const docRef=doc(db,url);
    const docu=await getDoc(docRef);
    if(docu.data()){
      const streak=docu.data()['streak'];
      if(today-docu.data()['Date'] === epochDays(1)){
        await updateDoc(docRef,{
          streak: streak+1,
          Date: today
        })
      }
      if(today-docu.data()['Date']>epochDays(1)){
        await updateDoc(docRef,{
          streak: 1,
          Date: today
        })
      }
    }
    else{
      await setDoc(docRef,{
        streak: 1,
        Date: today
      })
    }
    
}


export async function getStreakCount() {
    const db=useFirestore();
    const user=await getCurrentUser();
    const today=getStartOfToday();
    const url=`zen-users/${user?.uid}/stats/streak`;
    const docRef=doc(db,url);
    var streak=null;
    const docu=await getDoc(docRef);
    if(docu.data()){
       if(today-docu.data()['Date']>epochDays(1)){
        streak=0;
       }
       else{
        streak=docu.data().streak;
       }
    }
    else{
      streak=0;
    }
    return streak;
}

export async function getpast7days(){
  const db=useFirestore()
  const user=await getCurrentUser()
  const url= `/zen-users/${user?.uid}/activities`
  const colRef=collection(db,url)
  let pastData=[]
  const q=query(colRef,where('date','>=',getStartOfToday()-epochDays(7)))
  const pastDocs=await getDocs(q);
  pastDocs.forEach((doc)=>{
    console.log(doc.data())
    if(doc.data().taskStatus=='PENDING'){
          let activity={
          ActiveMood: doc.data().ActiveMood,
          ActiveTask: doc.data().ActiveTask,
          ActiveReward: doc.data().ActiveReward,
          taskStatus: 'NOT REPORTED',
          docId: doc.id,
          date: doc.data().date,
          createdOn: doc.data().createdOn,
          }
          pastData.push(activity);
    }
    else{
        let activity={
        ActiveMood: doc.data().ActiveMood,
        ActiveTask: doc.data().ActiveTask,
        ActiveReward: doc.data().ActiveReward,
        taskStatus: doc.data().taskStatus,
        docId: doc.id,
        date: doc.data().date,
        createdOn: doc.data().createdOn,
        }
    pastData.push(activity);
    } 
})
  return pastData;
}

export async function deleteLog(docId){
  const db=useFirestore();
  const user=await getCurrentUser();
  const url=`/zen-users/${user?.uid}/activities/${docId}`;
  const docRef= doc(db,url);
  await deleteDoc(docRef);
}

