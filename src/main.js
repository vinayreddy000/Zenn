import './assets/main.css';
import { createApp } from 'vue';
import { createPinia} from 'pinia';
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue';
import router from './router';
import Vue3Lottie from 'vue3-lottie'
import { firebaseApp } from './firebase'
const pinia=createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(Vue3Lottie);
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
  
app.mount('#app')
