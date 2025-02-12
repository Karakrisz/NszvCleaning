<script setup lang="ts">
import { fetchPosts, truncateContent } from '~/utils/js/utils'

const itemsPost = await fetchPosts()
const latestPosts = itemsPost.value?.slice(-3) || []
</script>

<template>
  <section class="split-section__top">
    <div class="split-section__inside">
      <div class="split-section__top__imgBox text-center">
        <img
          src="/img/header/bg.svg"
          alt="NSZV takarítás"
          class="split-section__top__imgBox__img"
        />
      </div>
      <div class="split-section__container__top d-flex">
        <div class="split-section__image__top">
          <img
            src="/img/blocks/top-btn.svg"
            alt="NSZV takarítás"
            class="split-section__image-content__top"
          />
        </div>
        <div class="split-section__text_top">
          <h1 class="split-section__title__top">
            Foglaljon prémium takarítót egy gombnyomással
          </h1>
          <p class="split-section__description__top">
            Bízza ránk otthona vagy irodája tisztaságát! Professzionális
            csapatunk garantálja a makulátlan eredményt, legyen szó mindennapi
            takarításról vagy különleges igényekről.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="split-section__container__crown">
    <div class="services d-flex">
      <div class="services__item services__item--office">
        <div class="services__icon services__icon--crown"></div>
        <h2 class="services__title">Iroda takarítás</h2>
        <p class="services__description">
          Professzionális irodatakarítás, amely biztosítja a kellemes
          munkakörnyezetet. A csapatunk garantálja, hogy Ön az üzletvitelre
          koncentrálhasson.
        </p>
        <h3 class="services__list-item">Irodaházak alapos takarítása</h3>
        <h3 class="services__list-item">
          Film stúdiók higiénikus tisztántartása
        </h3>
        <p class="services__button-container">
          <NuxtLink to="/ajanlatkeres" class="services__button">
            Érdekel
          </NuxtLink>
        </p>
      </div>

      <div class="services__item services__item--premium">
        <div class="services__icon services__icon--crown"></div>
        <h2 class="services__title">Prémium takarítás</h2>
        <p class="services__description">
          Magas színvonalú, személyre szabott takarítási megoldások az exkluzív
          igények kiszolgálására.
        </p>

        <h3 class="services__list-item">
          Építkezések alatti és <br />átadás előtti mélytisztítás
        </h3>
        <h3 class="services__list-item">Speciális takarítási szolgáltatások</h3>

        <p class="services__button-container">
          <NuxtLink to="/ajanlatkeres" class="services__button">
            Érdekel
          </NuxtLink>
        </p>
      </div>

      <div class="services__item services__item--home">
        <div class="services__icon services__icon--crown"></div>
        <h2 class="services__title">Lakás takarítás</h2>
        <p class="services__description">
          Professzionális lakástakarítás, amely biztosítja a tiszta és rendezett
          munkakörnyezetet. A csapatunk a hatékonyságra és a részletekre
          fókuszál.
        </p>

        <h3 class="services__list-item">Mindennapi <br />lakástakarítás</h3>
        <h3 class="services__list-item">Költözés előtti és utáni takarítás</h3>

        <p class="services__button-container">
          <NuxtLink to="/ajanlatkeres" class="services__button">
            Érdekel
          </NuxtLink>
        </p>
      </div>
    </div>
  </section>
  <section class="split-section about_section">
    <div class="split-section__container d-flex">
      <div class="split-section__image">
        <img
          src="/img/blocks/aboutimg.jpeg"
          alt="NSZV takarítás"
          class="split-section__image-content"
        />
      </div>
      <div class="split-section__text">
        <h4 class="split-section__title">Rólunk</h4>
        <p class="split-section__about_description">
          Az N.Sz.V Cleaning 2021 óta áll ügyfelei szolgálatában, hogy
          otthonaik, irodáik és egyedi igényekkel rendelkező helyszíneik mindig
          tiszták és rendezettek legyenek. Fiatal, dinamikus csapatunk célja,
          hogy professzionális szolgáltatásainkkal időt és energiát takarítsunk
          meg Önnek, miközben garantáljuk a tökéletes tisztaságot.
        </p>

        <p class="split-section__about_description">
          Kínálatunkban megtalálható az irodatakarítás, a lakástakarítás,
          valamint a prémium takarítás egyedi helyszínekre, mint például Airbnb
          lakások vagy építkezések utáni nagytakarítások. Modern eszközeinkkel
          és környezetbarát tisztítószereinkkel nemcsak a hatékonyságra, hanem a
          fenntarthatóságra is kiemelt figyelmet fordítunk.
        </p>

        <p class="split-section__about_description">
          Legyen szó napi rendben tartásról vagy egy egyszeri nagytakarításról,
          az N.Sz.V Cleaning csapata megbízható és rugalmas partner a
          tisztaságban. Bízza ránk a takarítást, és élvezze a rendezett,
          makulátlan környezetet!
        </p>
      </div>
    </div>
  </section>
  <section class="contact-form">
    <div class="contact-form__container">
      <h5 class="contact-form__title">Tegyük együtt tisztábbá a világot!</h5>
      <p class="contact-form__description">
        Keressen minket még ma, és kérjen személyre szabott ajánlatot!
      </p>
      <form class="contact-form__form">
        <div class="contact-form__input-group">
          <input
            type="text"
            class="contact-form__input"
            placeholder="Név"
            required
          />
        </div>
        <div class="contact-form__input-group">
          <input
            type="email"
            class="contact-form__input"
            placeholder="Email cím"
            required
          />
        </div>
        <div class="contact-form__input-group">
          <input
            type="tel"
            class="contact-form__input"
            placeholder="Telefonszám"
            required
          />
        </div>
        <div class="contact-form__input-group">
          <input
            type="text"
            class="contact-form__input"
            placeholder="Takarítás típusa"
            required
          />
        </div>
        <div class="contact-form__input-group">
          <p class="contact-form__input-group-description text-color-w">
            A küldés gombra kattintva elfogadja az Adatvédelmi Tájékoztatót
          </p>
          <button type="submit" class="contact-form__button">
            <span class="contact-form__button-text">Küldés</span>
            <NuxtImg
              class="contact-form__button-icon"
              src="/img/blocks/mail.svg"
              alt="NSZV takarítás"
            />
          </button>
        </div>
      </form>
    </div>
  </section>

  <section class="info-blocks">
    <div class="info-blocks__container">
      <h6 class="info-blocks__titleTop">Blog</h6>
    </div>
    <div class="info-blocks__container d-flex">
      <div
        v-for="post in latestPosts"
        :key="post.slug"
        class="info-blocks__item"
      >
        <NuxtLink
          class="blog-box__link-box__Nuxtlink"
          :to="`/posts/${post.slug}`"
        >
          <div class="info-blocks__image-wrapper">
            <NuxtImg
              :src="`${$config.public.apiBaseUrl}/storage/${post.image}`"
              alt="{{ post.title }}"
              class="info-blocks__image"
            />
          </div>

          <div class="info-blocks__content">
            <h3 class="info-blocks__title">{{ post.title }}</h3>
            <p
              class="info-blocks__text"
              v-html="truncateContent(post.body, 100)"
            />
            <div class="info-blocks__arrow">
              <NuxtImg src="/img/blocks/arrowDown.svg" alt="NSZV takarítás" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
