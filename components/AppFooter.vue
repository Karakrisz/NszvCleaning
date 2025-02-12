<template>
  <footer>
    <div class="footer">
      <div class="footer__card">
        <div class="footer__info">
          <h2 class="footer__title">N. Sz. V. Cleaning</h2>
          <a class="footer__contact" href="mailto:info@nszvtakaritas.hu">
            <span class="footer__icon footer__icon--email"></span>
            info@nszvtakaritas.hu
          </a>
          <a class="footer__contact" href="tel:+36304382677">
            <span class="footer__icon footer__icon--phone"></span>
            06304382677
          </a>
        </div>
        <div class="footer__brand">
          <img
            class="footer__brand-text"
            src="/img/blocks/DSS_Icon.svg"
            alt="NSZV takarítás"
          />
        </div>
      </div>
      <nav class="footer__nav">
        <NuxtLink to="/" class="footer__nav-link">Kezdőlap</NuxtLink>
        <NuxtLink to="#szolgaltatasok" class="footer__nav-link"
          >Szolgáltatások</NuxtLink
        >
        <NuxtLink to="#rolunk" class="footer__nav-link">Rólunk</NuxtLink>
        <NuxtLink to="/ajanlatkeres" class="footer__nav-link"
          >Ajánlatkérés</NuxtLink
        >
        <NuxtLink to="/adatvedelmi-tajekoztato" class="footer__nav-link"
          >Adatvédelmi tájékoztató</NuxtLink
        >
      </nav>
    </div>
  </footer>
</template>
