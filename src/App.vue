<template>

  <div id="app" :class="{'theme-dark': dark}">
      <div id="nav">
        <Navigation v-bind:dark="dark" v-on:changeTitle="switchm($event)" />
      </div>
      
          <router-view :dark="dark"/>


      <Footer/>
  </div>

</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    'Navigation' :Navigation,
    'Footer' :Footer,
  },

  data() {

    return {
       dark: false,
   
    }
  },
  //dark mode
  methods: {     
      switchm: function(updatedTitle){
        this.dark = updatedTitle;
      },
    
    
      dMode () {
        this.darkMode = !this.darkMode      
         console.log("dark ", this.darkMode)
      }
  },

  watch: {
    dark () {
    
      localStorage.setItem("dark",this.dark);
    }
  },
  created () {
    this.dark = JSON.parse(localStorage.getItem("dark"));
  },
}
</script>

<style lang="scss">
@import './css/base/_typography.scss';
@import './css/layouts/_global.scss';
#app {
  font-family: Yantramanav;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $primary-opacity;

}


#nav {
  padding-top: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
  }
}
</style>
