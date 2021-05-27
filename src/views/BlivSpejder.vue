<template>
<div>
  <section class="blivSpejd">
    <div class="blivSpejd-banner">
      <div class="banner-image-div">
        <div class="home-banner-image">
          <img
            v-if="dark == false || dark == null"
            src="../assets/Bliv-spejder-light.png"
          />
          <img v-else src="../assets/Bliv-spejder.png" />
        </div>
      </div>
        <div class="titel">
          <h1>Vil du blive spejder?</h1>
          <h2>Det er vi glad for at høre</h2>
          <h2>Velkommen i gruppen!</h2>
        </div>
    </div>
  </section>

  <section class="Kontakt">
    <div>
      <h1>Hvis du vil være spejder i Vesterhavsgruppen</h1>
      <h2>Kontakte en af vores gruppeledere</h2>
      <p>Helen eller Steffen</p>
      <p>På telefon: 21 67 73 57 / 40 29 26 71</p>
      <p>eller på mail: kontakt@vesterhavsgruppen.dk</p>
      <br />
      <p>
        -Besøge os på Bakkevej 14 når den afdeling, der passer til din alder,
        holder møde.
      </p>
    </div>
    <div class="kontakt-logo-img">
      <img
        v-if="dark == false || dark == null"
        src="../assets/VG-logo.png"
        alt=""
      />
      <img v-else src="../assets/lightlogo.png" alt="vesterhavsgruppen logo" />
    </div>
  </section>

  <section class="spejderen">
    <div class="spejderen-img">
      <img src="../assets/IMG_3985.png" />
    </div>
    <div class="spejderen-text">
      <p>
        Spejderen får den første mødedag udleveret "Velkommen til DDS" pjecen
        samt et indmeldelseskort.
      </p>
      <p>
        Når nye spejdere starter i gruppen får de en lille prøvetid på optil 3
        uger, hvorefter spejderen skal indmeldes i gruppen,
        indmeldelses-blanketten skal afleveres til spejderlederen.
      </p>
      <br />
      <p>
        Ved indmeldelse får den nye spejder udleveret en T-shirt med gruppens
        logo, rabatkort til spejder sport, tørklæde i gruppens farver og en
        arbejdsstofbog. <br />Når de får deres 1. uniform udleveres
        divisionsmærke, Vesterhavsgruppen mærke.
      </p>
      <br />
      <p>
        Arbejdsstof-bogen som er en praktisk bog om udstyr, uniformer, knob og
        besnørringer, grundregler og værdier, pakkeliste til diverse tur-typer
        m.m.
      </p>
    </div>
  </section>

  <section class="Tilmelding">
    <div class="Tilmelding-betaling">
      <p><strong>Betaling</strong></p>
      <p>
        Gruppen har en valgt kasserer og kontingent o.l. betales via giro eller
        bank.
      </p>
      <p>- Indmeldelsesgebyret dækker bog, T-shirt og tørklæde.</p>
      <p>- Kontingent betales halvårlig i januar og august.</p>
      <p>- Betaling for ture, sker direkte til afdelingernes lederne.</p>
      <br />
      <p>
        Er du interesseret i at læse mere om Det Danske Spejderkorps så kig på
        korpsets hjemmeside, www.dds.dk
      </p>
      <br />
      <p>
        Der er også flere oplysninger på de øvrige sider - vi glæder os til at
        se dig i Vesterhavsgruppen.
      </p>
      <br />
      <p>
        Er du interesseret i at læse mere om Det Danske Spejderkorps så kig på
        korpsets hjemmeside, www.dds.dk
      </p>
    </div>
    <div class="Tilmelding-blanket">
      <p>
        Der er også flere oplysninger på de øvrige sider - vi glæder os til at
        se dig i Vesterhavsgruppen.
      </p>
      <br />
      <p>
        Du kan finde en online tilmeldingsblanket ved at trykke på knappen her:
      </p>
      <div class="btn-div">
        <div class="call-to-action btn">Tilmelding</div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
export default {
  props: ["dark"],
};
</script>

<style lang="scss" scoped>
@import "../css/pages/_blivSpejd.scss";
@import "../css/layouts/_global.scss";
</style>