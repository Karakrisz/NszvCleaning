<script setup>
import { fetchPosts, truncateContent } from '~/utils/js/utils'

const itemsPost = await fetchPosts()
const latestPosts = itemsPost.value?.slice(-3) || []

import { useNuxtApp } from '#app'
const nuxtApp = useNuxtApp()

const form = ref({
  name: '',
  email: '',
  phonenumber: '',
  message: '',
})

const isSent = ref(false)

const sendEmail = async () => {
  try {
    await nuxtApp.$mail.send({
      from: 'info@nszvtakaritas.hu',
      to: 'nszvtakaritas@gmail.com',
      subject: `Új üzenetet küldött - ${form.value.name}`,
      html: `
        <p><strong>Name:</strong> ${form.value.name}</p>
        <p><strong>Email:</strong> ${form.value.email}</p>
        <p><strong>Phone Number:</strong> ${form.value.phonenumber}</p>
        <p><strong>Message:</strong></p>
        <p>${form.value.message}</p>
      `,
    })
    isSent.value = true
  } catch (error) {
    console.error('Error sending email:', error)
    alert('Failed to send email.')
  }
}
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

  <section class="split-section__container__crown" id="szolgaltatasok">
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
  <section class="split-section about_section" id="rolunk">
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
  <section class="disinfection">
    <h2 class="disinfection__title">Fertőtlenítésben is otthon vagyunk!</h2>

    <div class="disinfection__cards">
      <!-- Ozone disinfection card -->
      <div class="disinfection-card">
        <div class="disinfection-card__icon-wrapper">
          <span class="disinfection-card__icon">
            <img
              src="/img/ozon.svg"
              alt="NSZV takarítás"
              class="isinfection-card__icon__img"
            />
          </span>
          <h3 class="disinfection-card__title">Ózonos fertőtlenítés</h3>
        </div>
        <div class="disinfection-card__tag">VEGYSZERMENTES TISZTASÁG</div>
        <p class="disinfection-card__description">
          Az ózon rendkívül hatékony fertőtlenítő, amely vegyszermentesen
          pusztítja el a vírusokat, baktériumokat, penészgombákat és kellemetlen
          szagokat. Mivel gáz halmazállapotú, minden apró résbe és felületre
          eljut, így teljes körű tisztaságot biztosít. Különösen ajánlott
          allergiásoknak, irodákba, autókba vagy olyan helyiségekbe, ahol fontos
          a friss levegő és a higiénia.
        </p>
        <p class="disinfection-card__cta">
          Szeretnéd friss és tiszta levegővel megtölteni a teret? Kérj ózonos
          fertőtlenítést tőlünk!
        </p>
        <div class="disinfection-card__link-box">
          <NuxtLink to="/ajanlatkeres" class="disinfection-card__button"
            >Ajánlatkérés</NuxtLink
          >
        </div>
      </div>

      <!-- Cold fog disinfection card -->
      <div class="disinfection-card">
        <div class="disinfection-card__icon-wrapper">
          <span class="disinfection-card__icon">
            <img
              src="/img/hideg.svg"
              alt="NSZV takarítás"
              class="isinfection-card__icon__img"
            />
          </span>
          <h3 class="disinfection-card__title">Hidegködös fertőtlenítés</h3>
        </div>
        <div class="disinfection-card__tag">HOSSZAN TARTÓ VÉDELEM</div>
        <p class="disinfection-card__description">
          A hidegködös eljárás során egy speciális fertőtlenítő folyadékot
          mikroszkopikus cseppekké alakítunk, amelyek lebegve beborítanak minden
          felületet. Ez az eljárás nemcsak azonnali fertőtlenítést biztosít,
          hanem egy védőréteget is képez, amely segít megakadályozni a kórokozók
          újbóli megtelepedését. Ideális nagyobb helyiségek, óvodák, éttermek
          vagy egészségügyi intézmények fertőtlenítésére.
        </p>
        <p class="disinfection-card__cta">
          Hosszú távú védelemre van szükséged? Próbáld ki a hidegködös
          fertőtlenítést!
        </p>
        <div class="disinfection-card__link-box">
          <NuxtLink to="/ajanlatkeres" class="disinfection-card__button"
            >Ajánlatkérés</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>
  <section class="contact-form">
    <div class="contact-form__container">
      <h5 class="contact-form__title">Tegyük együtt tisztábbá a világot!</h5>
      <p class="contact-form__description">
        Keressen minket még ma, és kérjen személyre szabott ajánlatot!
      </p>
      <form @submit.prevent="sendEmail" class="contact-form__form">
        <div class="contact-form__input-group">
          <input
            v-model="form.name"
            type="text"
            class="contact-form__input"
            placeholder="Név"
            required
          />
        </div>
        <div class="contact-form__input-group">
          <input
            v-model="form.email"
            type="email"
            class="contact-form__input"
            placeholder="Email cím"
            required
          />
        </div>
        <div class="contact-form__input-group">
          <input
            v-model="form.phonenumber"
            type="tel"
            class="contact-form__input"
            placeholder="Telefonszám"
            required
          />
        </div>
        <div class="contact-form__input-group">
          <input
            v-model="form.message"
            type="text"
            class="contact-form__input"
            placeholder="Takarítás típusa"
            required
          />
        </div>
        <div class="contact-form__input-group">
          <div v-if="!isSent" class="contact-form__input-group-checkbox">
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
          <div v-if="isSent" class="confirmation-message">
            <p class="confirmation-message__p text-color text-center">
              Köszönjük az üzenetét, hamarosan felvesszük Önnel a kapcsolatot.
            </p>
          </div>
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
