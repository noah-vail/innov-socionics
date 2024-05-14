<template>
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
        <div
          class="text-center"
          style="margin-left: 13rem; margin-bottom: 1.5rem"
        >
          <div
            class="heading-primary--main text-h3 text-center q-mt-md roboto-bold-italic"
          >
            Login
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
    <q-form
      ref="myForm"
      class="q-gutter-md form"
      @submit="login"
      @reset="resetFields"
    >
      <div class="form__group">
        <label class="form__label roboto-regular">Email</label>
        <q-input
          style="margin: 0 auto"
          class="form__input"
          outlined
          placeholder="enter email address"
          id="email"
          v-model="state.email"
          :rules="[isRequired, isValidEmail]"
        />
      </div>
      <div class="form__group">
        <label class="form__label roboto-regular">Password</label>
        <q-input
          style="margin: 0 auto"
          class="form__input"
          outlined
          placeholder="enter password"
          id="password"
          type="password"
          v-model="state.password"
          :rules="[isRequired]"
        />
      </div>

      <div class="form__group u-center-text" style="margin-bottom: 1rem">
        <q-btn
          class="btn text-white"
          style="background-color: #0d85a0; margin-right: 1rem"
          label="Login"
          type="submit"
        />
        <q-btn
          class="btn text-white"
          style="background-color: #711c09"
          label="Reset"
          type="reset"
        />
      </div>
    </q-form>
  </q-card>
  <router-view></router-view>

  <q-page-sticky class="sticky-auth" position="top-right" :offset="[25, -62]">
    <q-fab
      vertical-actions-align="right"
      unelevated
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
      <!-- details -->
      <q-fab-action
        class="sticky-menu__details"
        icon="bi-palette2"
        label="Proj. Details"
        v-close-popup
        to="/projectdetails"
      >
      </q-fab-action>
      <!-- dichots -->
      <q-fab-action
        class="sticky-menu__dichotomies"
        icon="bi-brilliance"
        label="Dichotomies"
        v-close-popup
        to="/dichotomies"
      >
      </q-fab-action>
      <!-- quadra -->
      <q-fab-action
        class="sticky-menu__quadra"
        icon="fa-solid fa-person-dots-from-line"
        label="Quadra"
        v-close-popup
        to="/quadra"
      >
      </q-fab-action>
      <!-- register -->
      <q-fab-action
        class="sticky-auth__register"
        icon="fa-solid fa-gear"
        label="Register"
        v-close-popup
        to="/register"
      >
      </q-fab-action>
    </q-fab>
  </q-page-sticky>
</template>

<script>
import { reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/firebase";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    let state = reactive({
      status: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });

    const isValidEmail = (val) => {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid Email";
    };

    const isRequired = (val) => {
      return !!val || "field is required";
    };

    const login = () => {
      state.status = "logging into server";
      signInWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log("Error Code: ", errorCode);
          console.log("Error Message: ", errorMessage);
        });
    };

    const resetFields = () => {
      state.firstname = "";
      state.lastname = "";
      state.email = "";
      state.password = "";
      state.status = "";
    };

    return {
      state,
      login,
      isValidEmail,
      isRequired,
      resetFields,
    };
  },
};
</script>
