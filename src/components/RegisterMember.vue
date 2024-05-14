<template>
  <q-card
    class="shadow-3"
    style="
      margin-left: 8rem;
      margin-right: 8rem;
      margin-top: 2rem;
      margin-bottom: 2rem;
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
            Register
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
    <div class="text-title2 text-center text-positive text-bold">
      {{ state.status }}
    </div>
    <q-form
      ref="myForm"
      class="q-gutter-sm"
      greedy
      @submit="register"
      @reset="resetFields"
    >
      <div class="row" style="margin-left: 12rem; margin-right: 12rem">
        <div class="col">
          <div style="margin-right: 2rem">
            <label
              class="roboto-medium"
              style="font-size: 1.3rem; margin-left: -0.6rem"
              >First Name</label
            >
            <q-input
              class="roboto-regular-italic"
              style="padding-top: 0.7rem; font-size: 1.1rem"
              outlined
              placeholder="enter first name"
              id="firstname"
              v-model="state.firstname"
              :rules="[isRequired]"
            />
          </div>
        </div>
        <div class="col">
          <div style="margin-left: 2rem">
            <label
              class="roboto-medium"
              style="font-size: 1.3rem; margin-left: -0.6rem"
              >Last Name</label
            >
            <q-input
              class="roboto-regular-italic"
              style="padding-top: 0.7rem; font-size: 1.1rem"
              outlined
              placeholder="enter last name"
              id="lastname"
              v-model="state.lastname"
              :rules="[isRequired]"
            />
          </div>
        </div>
      </div>

      <div class="form__group">
        <label class="form__label roboto-medium">Email</label>
        <q-input
          style="margin: 0 auto"
          class="form__input roboto-regular-italic"
          outlined
          placeholder="enter email"
          id="email"
          v-model="state.email"
          :rules="[isRequired, isValidEmail]"
        />
      </div>

      <div class="form__group">
        <label class="form__label roboto-medium">Password</label>
        <q-input
          style="margin: 0 auto"
          class="form__input"
          outlined
          plcaeholder="enter password"
          id="password"
          type="password"
          v-model="state.password"
          :rules="[isRequired]"
          autocomplete="on"
        />
      </div>

      <div class="form__radio-group u-center-text">
        <q-btn
          class="btn text-white"
          style="background-color: #0d85a0; margin-right: 1rem"
          label="Register"
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
      <!-- details -->
      <q-fab-action
        class="sticky-menu__details"
        label="Proj. Details"
        icon="bi-palette2"
        v-close-popup
        to="/projectdetails"
      >
      </q-fab-action>
      <!-- dichots -->
      <q-fab-action
        class="sticky-menu__dichotomies"
        label="Dichotomies"
        icon="bi-brilliance"
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
import { onMounted, reactive, ref } from "vue";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth } from "src/firebase";
import { db } from "src/firebase";

export default {
  setup() {
    const memberCollectionRef = collection(db, "Members");

    let state = reactive({
      status: "",
      members: [],
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      fullname: "",
    });

    const isValidEmail = (val) => {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "Invalid Email";
    };

    const isRequired = (val) => {
      return !!val || "field is required";
    };

    const register = async () => {
      state.status = "registering with server";
      state.fullname = state.firstname + " " + state.lastname;
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode);
          console.log(errorMessage);
        });

      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "Members"), {
        firstName: state.firstname,
        lastName: state.lastname,
        email: state.email,
        date: Date.now().toString(),
      });

      // navigate to login page for sign in
      router.push("/login");
    };

    const resetFields = () => {
      state.firstname = "";
      state.lastname = "";
      state.password = "";
      state.status = "";
    };

    return {
      state,
      register,
      isValidEmail,
      isRequired,
      resetFields,
    };
  },
};
</script>
