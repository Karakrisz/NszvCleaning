<script setup>
const leftLinks = [
  { name: 'Galéria', path: '/' },
  { name: 'Szolgáltatások', path: '/szolgaltatasok' },
  { name: 'Referenciák', path: '/dokumentumok' },
]

const rightLinks = [
  { name: 'Rólunk', path: '/dokumentumok' },
  { name: 'Kapcsolat', path: '/kapcsolat' },
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
            <NuxtLink class="text-color-w" :to="link.path">{{ link.name }}</NuxtLink>
          </li>
        </ul>

        <div class="logo-box">
          <NuxtLink to="/">
            <NuxtImg
              class="logo-box__img"
              src="/img/header/menu-logo.svg"
              alt="The King of Cleaning"
              height="100%"
            />
          </NuxtLink>
        </div>

        <ul class="right-menu">
          <li v-for="link in rightLinks" :key="link.path">
            <NuxtLink class="text-color-w" :to="link.path">{{ link.name }}</NuxtLink>
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
            <NuxtLink :to="link.path" @click="isMenuOpen = false">
              {{ link.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
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
  background-color: #001647;
  z-index: 1000;
}

.bar {
  height: 0.23em;
  width: 100%;
  background-color: #fff;
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


@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  
  .mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 60%;
    height: 100%;
    background: #001647;
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
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
  }
}


@media (min-width: 769px) {
  .hamburger {
    display: none;
  }
  
  .mobile-menu {
    display: none;
  }
}
</style>