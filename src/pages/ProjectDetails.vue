<template>
  <q-page class="proj-details">
    <q-carousel
      v-model="panel"
      transition-prev="scale"
      transition-next="scale"
      arrows
      animated
      control-color="white"
      height="680px"
      style="background-color: #092a71; border-radius: 15px"
      class="shadow-1 rounded-borders roboto-light pages-sub-head--anim2"
    >
      <q-carousel-slide class="column no-wrap flex-center" name="outline">
        <q-card-section>
          <div class="proj-details__card--heading">
            <div class="roboto-bold-italic heading-secondary2 text-white umbs">
              Project Details
            </div>
          </div>
          <div class="proj-details__card--outline display-box">
            <i
              class="bi-globe2"
              style="font-size: 3rem; padding-bottom: 1rem"
            ></i>
            <div class="heading-details u-center-text roboto-regular">
              Socionics
            </div>
            <div>
              <div
                class="roboto-regular-italic subHead-details heading-secondary--fromtop"
                style="padding-top: 0.5rem; padding-bottom: 0.5rem"
              >
                Purpose
              </div>
              <p class="paragraph roboto-light">
                This is
                <a> <strong class="text-accent">some text</strong></a>
              </p>
              <div
                class="roboto-regular-italic subHead-details heading-secondary--frombottom"
                style="padding-bottom: 0.5rem"
              >
                Functionality
              </div>
              <p class="roboto-light paragraph">
                For <strong>members</strong> this is a website where you can
                <strong class="text-accent">learn Socionics</strong> and
                <a><strong class="text-accent">discover</strong></a> your
                <a><strong class="text-accent">sociotype</strong></a>
              </p>
              <p class="roboto-light paragraph">
                For <strong>non-members</strong> this is website that explains
                the
                <a>
                  <strong class="text-accent">fundamental concepts</strong></a
                >
                of socionics and provides a base foundation of
                <strong class="text-accent">understanding</strong>.
              </p>
            </div>
          </div>
        </q-card-section>
      </q-carousel-slide>

      <q-carousel-slide class="column no-wrap flex-center" name="build">
        <div class="proj-details__card--head">
          <div
            class="roboto-bold-italic heading-secondary2 u-center-text text-white umbt"
          >
            Build Stack
          </div>
        </div>
        <div class="row">
          <q-card-section class="col">
            <div class="proj-details__card--build display-box">
              <div>
                <i
                  class="fa-solid fa-desktop"
                  style="font-size: 3rem; padding-bottom: 1rem"
                ></i>
              </div>
              <div class="heading-details roboto-regular">Client</div>
              <div>
                <div>
                  <div
                    class="roboto-regular-italic subHead-details heading-secondary--frombottom"
                    style="padding-top: 0.5rem; padding-bottom: 0.5rem"
                  >
                    Vue.js
                  </div>
                  <p class="roboto-light paragraph">
                    Version
                    <a> <strong class="text-accent">^ 3.4.18</strong></a>
                  </p>
                </div>
                <div>
                  <div
                    class="roboto-regular-italic subHead-details heading-secondary--frombottom"
                    style="padding-bottom: 0.5rem"
                  >
                    Quasar
                  </div>
                  <p class="roboto-light paragraph">
                    Version
                    <a> <strong class="text-accent">^ 2.8.0</strong></a>
                  </p>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col">
            <div class="proj-details__card--build display-box">
              <div>
                <i
                  class="fa-solid fa-server"
                  style="font-size: 3rem; padding-bottom: 1rem"
                ></i>
              </div>
              <div
                class="heading-details roboto-regular heading-proj-details--sub u-center-text"
              >
                Server
              </div>
              <div>
                <div
                  class="roboto-regular-italic subHead-details heading-secondary--frombottom"
                  style="padding-top: 0.5rem; padding-bottom: 0.5rem"
                >
                  Firebase
                </div>
                <div>
                  <p class="roboto-regular-italic">
                    <strong class="text-accent">Firestore</strong>
                  </p>
                  <p class="roboto-light paragraph">Data Storage / Retrieval</p>
                </div>
                <div>
                  <p class="roboto-regular-italic">
                    <strong class="text-accent"> Authentication </strong> &
                    <strong class="text-accent">Authorization</strong>
                  </p>
                  <p class="roboto-light paragraph">
                    Secure login / registration
                  </p>
                </div>
              </div>
            </div>
          </q-card-section>
        </div>
      </q-carousel-slide>
      <q-carousel-slide class="column no-wrap flex-center" name="contact">
        <div class="proj-details__card--head">
          <div
            class="roboto-bold-italic heading-secondary2 u-center-text text-white umbs"
          >
            Conact Info
          </div>
        </div>
        <div class="build-card__build-stack">
          <div class="row">
            <q-card-section class="col">
              <div class="display-box">
                <i
                  class="bi-envelope-exclamation-fill"
                  style="font-size: 3rem; padding-bottom: 1rem"
                ></i>
                <div class="roboto-regular heading-details u-center-text">
                  Email
                </div>
                <div>
                  <p class="roboto-regular-italic subHead-details-sub">
                    n.c.vail21@gmail.com
                  </p>
                </div>
              </div>
            </q-card-section>
            <q-card-section class="col">
              <div class="proj-details__card--socials display-box">
                <i
                  class="pi pi-github"
                  style="font-size: 3rem; padding-bottom: 1rem"
                ></i>
                <div class="roboto-regular heading-details u-center-text">
                  GitHub
                </div>
                <div>
                  <p class="roboto-regular-italic subHead-details-sub">
                    noah-vail
                  </p>
                </div>
              </div>
            </q-card-section>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <!-- PROFILE STICKY -->
    <q-page-sticky
      class="sticky-profile"
      position="top-right"
      :offset="[85, -63]"
    >
      <q-fab
        class="bg-primary sticky-profile__fab"
        unelevated
        icon="fa-solid fa-user"
        direction="left"
      >
        <q-fab-action
          label="Profile"
          class="sticky-profile__profile"
          v-close-popup
          to="/profile"
        >
          <i class="bi bi-person-fill" style="font-size: 1.5rem"></i>
        </q-fab-action>
        <q-fab-action
          label="Login"
          class="sticky-profile__login"
          v-close-popup
          to="/login"
        >
          <i class="bi bi-shield-lock-fill" style="font-size: 1.5rem"></i>
        </q-fab-action>
        <q-fab-action
          label="Logout"
          class="sticky-profile__logout"
          v-close-popup
          to="/logout"
        >
          <i class="bi bi-shield-slash-fill" style="font-size: 1.5rem"></i>
        </q-fab-action>
      </q-fab>
    </q-page-sticky>
  </q-page>
</template>

<style>
@import "primeicons/primeicons.css";
</style>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      panel: ref("outline"),
    };
  },
};
</script>
