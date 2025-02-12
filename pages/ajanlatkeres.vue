<script setup>
useHead({
  title: 'Ajánlatkérés',
})

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
  <section class="contact-form contact-form--subpage-format">
    <div
      class="contact-form__container contact-form__container--subpage-format"
    >
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
</template>
