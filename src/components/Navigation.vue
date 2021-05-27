<template>
    <div class="navbar" >
    <div class="logo">
      <router-link to="/">
        <img v-if="dark == false || dark == null"  class="logo-img" src="../assets/VG-logo.png"/>
        <img v-else class="logo-img" src="../assets/lightlogo.png"/>
      </router-link>
    </div>
    <div class="justify">
      <div class="navbar-links">
        <router-link to="/admin">
          <div id="login-mobile" class="log-in-btn">Log In</div>
        </router-link>
        <router-link to="/">Startside</router-link>
        <router-link to="/om-gruppen">Om gruppen</router-link>
        <router-link to="/afdelinger">Afdelinger</router-link>
        <router-link to="/bliv-spejder">Bliv spejder</router-link>
        <router-link to="/praktisk">Praktisk</router-link>
      </div>
    </div>
    <div class="navbar-others">
        <label class="switch">
            <input v-on:click="changeTitle" type="checkbox" v-model="dMode" />
            <span class="slider round"></span>
        </label>

     <router-link to="/admin">
     <div id="login-desktop" class="log-in-btn">Log ind</div>
     </router-link>
      
        <div class="toggel-btn">
            <img v-if="dark == false || dark == null" class="icon toggle-menu" src="../assets/toggel-menu.svg" width="23px" height="23px">
            <img v-else class="icon toggle-menu" src="../assets/toggel-menu-dark-version.svg" width="23px" height="23px">
        </div>
    </div>
  </div>
</template>

<script>
export default {
     props: {
      title: {
        type: Boolean,
        required: false
      },
      dark: {}
    },
  data() {
    return {
      dMode: this.$props.dark
    }
  },
  methods: {
    
        changeTitle() {
          console.log("test")
          this.$emit('changeTitle', this.dMode = !this.dMode );
       
    
      },
    },

  // menu mobile version
   mounted() {
        const burger = document.querySelector('.toggel-btn');
        const nav = document.querySelector('.justify');

        console.log(burger)
        burger.addEventListener('click', () => {
          nav.classList.toggle('show');
          if (nav.matches('.show')) {
            nav.classList.remove("end")
             nav.style.setProperty("display", "flex", "important");
          }
          else {
             nav.classList.add("end")
             setTimeout(() => {
              nav.style
              .setProperty("display", "none", "important");
             }, 1000);
          }
        });

        const navLinks = document.querySelectorAll(".justify a");
        const logo = document.querySelector(".logo");
        navLinks.forEach(n => {
          n.addEventListener("click", () => {
            nav.classList.toggle("show");
              if (nav.classList.toggle("show")) {
              nav.classList.toggle("show");
              nav.style.setProperty("display", "none", "important");
            }
          })
        });
          logo.addEventListener("click", () => {
            nav.classList.toggle("show");
              if (nav.classList.toggle("show")) {
              nav.classList.toggle("show");
              nav.style.setProperty("display", "none", "important");
            }
          });
   }
}
</script>


<style scoped lang="scss">
@import '../css/layouts/_navbar.scss';

</style>