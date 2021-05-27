<template>
<div>
  <section class="home">
    <div class="home-banner">
      <div class="titel">
        <h1>Vesterhavsgruppen</h1>
        <h2>De blå spejdere i Esbjerg</h2>
        <div id="call-to-action" class="btn">Prøv spejd</div>
      </div>
      <div class="banner-image-div">
        <div class="home-banner-image">
          <img src="../assets/startsside-vektor.png" />
        </div>
      </div>
    </div>
  </section>

  <section class="afdelinger">
    <div class="afdelinger-titel">
      <div><h1>Afdelinger</h1></div>
      <div><p>Allerede medlem?</p></div>
      <div><p>Vælg din afdeling og se dit program</p></div>
    </div>

    <div class="bagground-leavs leavs-left">
      <img src="../assets/leavs-left.png" alt="" />
    </div>

    <div class="badges-container">
      <img
        class="lower-margin"
        src="../assets/badges/web-badges1.png"
        alt="mikro spejder ulvene"
      />
      <img
        class="upper-margin"
        src="../assets/badges/web-badges2.png"
        alt="mini spejder leoparderne"
      />
      <img
        class="lower-margin"
        src="../assets/badges/web-badges3.png"
        alt="junior spejder tigerne"
      />
      <img
        class="upper-margin"
        src="../assets/badges/web-badges4.png"
        alt="trop spejder bjørnene"
      />
      <img
        class="lower-margin"
        src="../assets/badges/web-badges5.png"
        alt="klan spejder løverne"
      />
    </div>

    <div class="bagground-leavs leavs-right">
      <img src="../assets/leavs-right.png" alt="leavs" />
    </div>
  </section>

  <section class="aktuelt">
    <div class="aktuelt-img-div">
      <div class="aktuelt-img img">
        <img src="../assets/art.2.png" alt="" />
      </div>
    </div>
    <div class="aktuelt-text">
      <h1>Aktuelt</h1>
      <p>Velkommen til 2021.</p>
      <p>
        2020 har været et mærkeligt år, hvor vi har måttet ændre planer for
        rigtig mange af vores aktiviteter. På nær et par måneder i foråret har
        vi kunnet holde vores ugentlige spejdermøder, men det er ikke blevet til
        ret mange ture og lejre.
      </p>
      <br />
      <p>
        Vi håber at 2021 bliver bedre, i hvert fald når vi kommer over vintner,
        hvor vi stadig må regne med at leve med rimelig skrappe restriktioner.
      </p>
      <br />
      <p>
        Da vi stadig er påvirket af Coronavirus vil vi gerne vide, hvor mange
        der deltager i møderne, så hvis du gerne vil prøve at være spejder, vil
        vi gerne have besked inden du kommer. Du kan enten skrive en mail til
        adressen overfor eller ringe til vores gruppeleder på tlf. 40 29 26 71..
      </p>
    </div>
  </section>

  <section class="mQde"></section>

  <section class="gallery">
    <div class="gallery-titel">
      <h1>Galleri</h1>
    </div>
    <div class="gallery-image-container">
      <div class="gallery-image-div">
        <img src="../assets/first-pic.png" alt="" />
      </div>

      <div class="gallery-image-div">
        <img src="../assets/second-pic.png" alt="" />
      </div>

      <div class="gallery-image-div">
        <img src="../assets/third-pic.png" alt="" />
      </div>
    </div>

    <div class="btn-div">
      <div class="call-to-action btn">See mere</div>
    </div>
  </section>

  <section class="ok-sponsor">
    <div class="sponser-image-div">
      <div class="ok-sponser-image">
        <img src="../assets/ok_logo.png" alt="" />
      </div>
    </div>
    <div class="ok-sponser-text">
      <h1>Vores sponsoraftale</h1>
      <p>
        Vesterhavsgruppen har en sponsoraftale med OK som indebærer, at OK
        støtter os økonomiskhver gang nogen bestiller et OK-kort gennem os og
        hver gang man tanker benzin eller diesel på et kort, der er tilknyttet
        vores aftale.
      </p>
      <br />
      <p>
        Hvis du er interesseret i at støtte os på denne måde, kan du skrive til
        inge.thisgaard@mail.dk eller tale med en leder til vores spejdermøder.
      </p>
    </div>
  </section>

  <section class="maps">
    <div class="googlemap">
      <div class="maps-titel">
        <h1>Vores lokation</h1>
        <h2>find hurtigt frem til os via mappen</h2>
      </div>
      <div>
        <iframe
          v-if="dark == false || dark == null"
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.0403699158423!2d8.446289515919961!3d55.47939418048115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
              .1!3m3!1m2!1s0x464b20d8442ed02d%3A0x2a118d81eb2fdc8c!2sBakkevej%2014%2C%206700%20Esbjerg!5e0!3m2!1sda!2sdk!4v1621855267443!5m2!1sda!2sdk"
          width="100%"
          height="250px"
          allowfullscreen=""
          loading="lazy"
        >
        </iframe>

        <iframe
          v-else
          class="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.0403699158423!2d8.446289515919961!3d55.47939418048115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
              .1!3m3!1m2!1s0x464b20d8442ed02d%3A0x2a118d81eb2fdc8c!2sBakkevej%2014%2C%206700%20Esbjerg!5e0!3m2!1sda!2sdk!4v1621855267443!5m2!1sda!2sdk"
          width="100%"
          height="250px"
          style="filter: invert(90%)"
          allowfullscreen=""
          loading="lazy"
        >
        </iframe>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
// Stuff for CRUD

//import PostListUsers from '@/components/PostListUsers.vue' -- removed <PostListUsers />

export default {
  name: "Home",
  components: {
    //PostListUsers
  },
  props: ["dark"],
};
</script>

<style lang="scss" scoped>
@import "../css/pages/_home.scss";
@import "../css/layouts/_global.scss";
</style>
