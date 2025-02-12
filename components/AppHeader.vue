<script setup>
onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const targetId = this.getAttribute('href')?.substring(1)
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        targetElement?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })
})

const leftLinks = [
  { name: 'Kezdőlap', path: '/' },
  { name: 'Szolgáltatások', path: '#szolgaltatasok' },
  { name: 'Referenciák', path: '#rolunk' },
]

const rightLinks = [
  { name: 'Rólunk', path: '#rolunk' },
  { name: 'Kapcsolat', path: '/ajanlatkeres' },
  { name: 'Ajánlatkérés', path: '/ajanlatkeres' },
]

const isMenuOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="header-content">
      <!-- Desktop menü -->
      <nav class="desktop-menu">
        <ul class="left-menu">
          <li v-for="link in leftLinks" :key="link.path">
            <NuxtLink class="text-color-w" :to="link.path">{{
              link.name
            }}</NuxtLink>
          </li>
        </ul>

        <div class="logo-box">
          <NuxtLink to="/">
            <NuxtImg
              class="logo-box__img"
              src="/img/header/menu-logo.svg"
              alt="NSZV takarítás"
              height="100%"
            />
          </NuxtLink>
        </div>

        <ul class="right-menu">
          <li v-for="link in rightLinks" :key="link.path">
            <NuxtLink
              :class="[
                'text-color-w',
                link.name === 'Ajánlatkérés' ? 'cta-button' : '',
              ]"
              :to="link.path"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Mobil menü gomb -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="hamburger"
        :class="{ open: isMenuOpen }"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>

      <!-- Mobil menü -->
      <nav :class="['mobile-menu', { active: isMenuOpen }]">
        <ul>
          <li
            v-for="(link, index) in [...leftLinks, ...rightLinks]"
            :key="link.path"
            :style="{ '--i': index }"
          >
            <NuxtLink
              :to="link.path"
              @click="isMenuOpen = false"
              :class="link.name === 'Ajánlatkérés' ? 'cta-button' : ''"
            >
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.cta-button {
  border-radius: 2em;
  animation: pulse 1s infinite;
  transform-origin: center;
  display: inline-block;
  background: linear-gradient(
    91deg,
    #d69c47 -83.45%,
    #ffe68f -28.24%,
    #e8bc66 -9.84%,
    #d69c47 6.27%,
    #ecc675 38.47%,
    #ffeb9e 70.68%,
    #977943 102.88%,
    #603d13 121.29%,
    #7a5118 128.19%,
    #8c5e1c 135.09%,
    #d69c47 146.59%
  );
  color: #0e0e0e;
  font-weight: 600;
  padding: 0.7em 2em;
}

.cta-button:hover {
  animation-play-state: paused;
}

.desktop-menu {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.left-menu,
.right-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
}

.logo-box {
  flex-shrink: 0;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 4.3em;
  height: 3.7em;
  border: none;
  cursor: pointer;
  padding: 0.7em;
  background-color: #ffea9b;
  z-index: 1000;
}

.bar {
  height: 0.23em;
  width: 100%;
  background-color: #000;
  transition: all 0.3s ease;
}

.hamburger.open .bar:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.open .bar:nth-child(2) {
  opacity: 0;
}

.hamburger.open .bar:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 1199px) {
  .desktop-menu {
    display: none;
  }

  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 60%;
    height: 100%;
    background: #ffea9b;
    padding: 1rem;
    transition: right 0.3s ease-in-out;
    z-index: 999;
  }

  .mobile-menu.active {
    right: 0;
  }

  .mobile-menu ul {
    list-style: none;
    padding: 2rem 1rem;
    margin: 0;
  }

  .mobile-menu li {
    padding: 1rem 0;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.3s ease-in-out;
    transition-delay: calc(0.1s * var(--i));
  }

  .mobile-menu.active li {
    opacity: 1;
    transform: translateX(0);
  }

  .mobile-menu a {
    color: #000;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
  }
}

@media (min-width: 1199px) {
  .hamburger {
    display: none;
  }

  .mobile-menu {
    display: none;
  }
}
</style>
