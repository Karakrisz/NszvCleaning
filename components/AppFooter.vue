<script setup>
const footerLinks = [
  { name: 'Adatvédelmi tájékoztató', path: '/adatvedelmi-tajekoztato' },
  { name: 'ÁSZF', path: '/aszf' },
  { name: 'Impresszum', path: '/impresszum' },
  { name: 'Kapcsolat', path: '/kapcsolat' },
  { name: 'Facebook', path: '/', imagePath: '/img/header/facebook.svg' },
]

</script>

<template>
  <!-- <footer>
    <div class="footer-content d-flex">
      <div class="footer-logo">
        <NuxtLink to="/" class="footer-logo__link">
          <NuxtImg
            src="/img/header/logo.svg"
            alt="Biztos Alkuszom"
            class="footer-logo__img"
            height="100%"
          />
        </NuxtLink>
      </div>
      <nav class="footer-nav">
        <ul class="footer-nav__list d-flex">
          <li v-for="link in footerLinks" :key="link.path" class="footer-nav__item">
            <NuxtLink :to="link.path" class="footer-nav__link text-color">
              <template v-if="link.imagePath">
                <NuxtImg
                  :src="link.imagePath"
                  :alt="link.name"
                  class="footer-nav__icon"
                  height="100%"
                />
              </template>
              <template v-else>
                {{ link.name }}
              </template>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer> -->

  <div class="footer">
  <div class="footer__card">
    <div class="footer__info">
      <h2 class="footer__title">N. Sz. V. Cleaning</h2>
      <p class="footer__contact">
        <span class="footer__icon footer__icon--email"></span>
        nszvtakaritas@gmail.com
      </p>
      <p class="footer__contact">
        <span class="footer__icon footer__icon--phone"></span>
        06304382677
      </p>
    </div>
    <div class="footer__brand">
      <img class="footer__brand-text" src="/img/blocks/DSS_Icon.svg" alt="">
    </div>
  </div>
  <nav class="footer__nav">
    <a href="#" class="footer__nav-link">Galéria</a>
    <a href="#" class="footer__nav-link">Szolgáltatások</a>
    <a href="#" class="footer__nav-link">Referenciák</a>
    <a href="#" class="footer__nav-link">Blog</a>
    <a href="#" class="footer__nav-link">Rólunk</a>
    <a href="#" class="footer__nav-link">Kapcsolat</a>
    <a href="#" class="footer__nav-link">Adatvédelmi tájékoztató</a>
  </nav>
</div>

</template>
