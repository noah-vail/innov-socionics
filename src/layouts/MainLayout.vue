<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-item clickable v-close-popup to="/">
          <q-avatar
            style="
              padding-top: 3px;
              margin-bottom: 7px;
              width: 3rem;
              height: 3rem;
            "
            size="xl"
            round
          >
            <img src="../assets/img/Black Hole Front View.png" />
          </q-avatar>
        </q-item>
        <q-toolbar-title class="u-center-text roboto-medium"></q-toolbar-title>
        <!-- HAMBURGER -->
        <q-page-sticky
          class="sticky-menu"
          position="top-right"
          :offset="[25, -62]"
        >
          <q-fab
            unelevated
            vertical-actions-align="right"
            label-position="right"
            icon="fa-solid fa-bars"
            color="primary"
            direction="down"
          >
            <!-- home -->
            <q-fab-action
              elevated
              class="shadow-3 sticky-auth__home"
              label="Home"
              icon="fa-solid fa-house"
              v-close-popup
              to="/"
              style="font-size: 1rem"
            >
            </q-fab-action>
            <!-- details -->
            <q-fab-action
              elevated
              class="shadow-3 sticky-menu__details"
              label="Proj. Detail"
              icon="bi-palette2"
              v-close-popup
              to="/projectdetails"
              style="font-size: 1rem"
            >
            </q-fab-action>
            <!-- quiz -->
            <q-fab-action
              elevated
              class="shadow-3 sticky-menu__quiz"
              label="Quiz"
              icon="fa-solid fa-cubes-stacked"
              v-close-popup
              to="/quiz"
              style="font-size: 1rem"
            >
            </q-fab-action>
            <!-- sociotypes -->
            <q-fab-action
              elevated
              class="shadow-3 sticky-menu__types"
              label="Sociotype"
              icon="fa-solid fa-users"
              v-close-popup
              to="/personalities"
              style="font-size: 1rem"
            >
            </q-fab-action>
            <!-- key terms -->
            <q-fab-action
              elevated
              class="shadow-3 sticky-menu__terms"
              label="Key Terms"
              icon="fa-solid fa-book"
              v-close-popup
              to="/terms"
              style="font-size: 1rem"
            >
            </q-fab-action>
            <!-- dichots -->
            <q-fab-action
              elevated
              class="shadow-3 sticky-menu__dichotomies"
              label="Dichotomy"
              icon="bi-brilliance"
              v-close-popup
              to="/dichotomies"
              style="font-size: 1rem"
            >
            </q-fab-action>
            <!-- quadra -->
            <q-fab-action
              elevated
              class="shadow-3 sticky-menu__quadra"
              label="Quadra"
              icon="fa-solid fa-person-dots-from-line"
              v-close-popup
              to="/quadra"
              style="font-size: 1rem"
            >
            </q-fab-action>

            <!-- quadra -->
            <!-- <q-fab-action
              elevated
              class="shadow-9 sticky-menu__quadra"
              label="Test Comps"
              icon="fa-solid fa-person-dots-from-line"
              v-close-popup
              to="/test"
              style="font-size: 1rem"
            >
            </q-fab-action> -->
          </q-fab>
        </q-page-sticky>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-subtitle2 u-center-text">
            Noah Vail - Wandering Panda &copy;{{ new Date().getFullYear() }}
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { reactive, onMounted, ref } from "vue";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "src/firebase";

export default {
  setup() {
    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          state.loggedIn = true;
        }
      });
    });

    const goToTop = () => {
      window.scrollTo(0, 0);
    };

    let state = reactive({
      loggedIn: false,
    });

    return {
      state,
      goToTop,
    };
  },
};
</script>
