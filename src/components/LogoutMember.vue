<template>
  <q-page>
    <q-card
      class="shadow-3"
      style="
        margin-left: 8rem;
        margin-right: 8rem;
        margin-top: 2rem;
        padding: 1rem;
      "
    >
      <div class="row" style="margin-bottom: 2rem">
        <div class="col">
          <div class="text-center" style="margin-left: 13rem">
            <div
              class="heading-primary--main text-h3 text-center q-mt-md roboto-bold-italic"
            >
              Logout
            </div>
          </div>
        </div>
        <div class="col">
          <div class="text-center">
            <img
              src="../assets/img/galaxy2.png"
              style="
                width: 150px;
                height: 100px;
                border-radius: 50px;
                margin-top: 0.5rem;
              "
            />
          </div>
        </div>
      </div>
      <div
        style="
          font-size: 3rem;
          padding-top: 2rem;
          padding-bottom: 3rem;
          margin-left: 14rem;
        "
        class="text-positive text-bold q-mt-sm"
      >
        Goodbye!
      </div>
    </q-card>
  </q-page>

  <q-page-sticky class="sticky-auth" position="top-right" :offset="[25, -62]">
    <q-fab
      unelevated
      vertical-actions-align="right"
      icon="fa-solid fa-bars"
      color="primary"
      direction="down"
    >
      <!-- home -->
      <q-fab-action
        class="sticky-auth__home"
        label="Home"
        icon="fa-solid fa-house"
        v-close-popup
        to="/"
      >
      </q-fab-action>
      <!-- register -->
      <q-fab-action
        class="sticky-auth__register"
        label="Register"
        icon="fa-solid fa-gear"
        v-close-popup
        to="/register"
      >
      </q-fab-action>
      <!-- login -->
      <q-fab-action
        label="Login"
        class="sticky-auth__login"
        icon="bi-shield-lock-fill"
        v-close-popup
        to="/login"
      >
      </q-fab-action>
    </q-fab>
  </q-page-sticky>
</template>

<script>
import { onMounted } from "vue";
import { signOut } from "firebase/auth";
import { auth } from "src/firebase";
import { LocalStorage } from "quasar";

export default {
  setup() {
    onMounted(() => {
      sessionStorage.clear();
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("MEMBER SUCCESSFULLY SIGNED OUT.");
          LocalStorage.clear();
        })
        .catch((error) => {
          // An error happened.
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log("Error Code: ", errorCode);
          console.log("Error Message: ", errorMessage);
        });
    });
    return {};
  },
};

// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });
</script>
