<template>
  <q-page class="profile">
    <q-card class="profile__card pages-sub-head--anim2">
      <div class="profile__card--heading umbt">
        <div class="heading-secondary2 roboto-bold-italic">Member Profile</div>
      </div>
      <div>
        <div class="row">
          <q-card class="col profile__card--name roboto-regular">
            <h4 class="u-center-text" style="padding-bottom: 0.5rem">
              Personal Details
            </h4>
            <q-card-section class="profile__card--name__data">
              <div class="row">
                <div class="col roboto-regular">
                  <div style="font-size: 1.2rem">First Name:</div>
                </div>
                <div class="col roboto-regular">
                  <h5>
                    {{ state.selectedMember.firstName }}
                  </h5>
                </div>
              </div>
              <div class="row">
                <div class="col roboto-regular">
                  <div style="font-size: 1.2rem">Last Name:</div>
                </div>
                <div class="col roboto-regular">
                  <div style="font-size: 1.5rem">
                    {{ state.selectedMember.lastName }}
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col roboto-regular">
                  <div style="font-size: 1.2rem">Email:</div>
                </div>
                <div class="col">
                  <h5>
                    {{ state.selectedMember.email }}
                  </h5>
                </div>
              </div>
            </q-card-section>
          </q-card>
          <q-card class="col profile__card--photo">
            <q-card-section style="margin: 0.5rem">
              <div
                class="text-center"
                style="font-size: 2rem; padding-bottom: 0.5rem"
              >
                Profile Photo
                <q-icon
                  class="absolute all-pointer-events"
                  size="32px"
                  name="info"
                  @click="refresh(state.selectedMember.id)"
                  style="top: 1.4rem; right: 0.8rem; color: #092a71"
                >
                  <q-tooltip
                    class="roboto-regular"
                    transition-show="flip-right"
                    transition-hide="rotate"
                    anchor="top right"
                    self="bottom end"
                    :offset="[10, 10]"
                    style="font-size: 1.1rem"
                    ><strong>Click</strong> to
                    <strong>Change</strong> Image</q-tooltip
                  >
                </q-icon>
              </div>
              <br />
              <div>
                <!-- Member Profile Picture -->
                <q-img
                  :src="state.selectedMember.img"
                  spinner-color="white"
                  style="width: 100%; margin-bottom: 3rem"
                />
              </div>
              <br />
            </q-card-section>
          </q-card>
        </div>
        <div class="row">
          <q-card
            style="
              width: 450px;
              height: 27vh;
              margin-left: 5.5rem;
              margin-top: -12.5rem;
              text-align: left;
              border-radius: 15px;
            "
          >
            <div class="row" style="padding-top: 1rem">
              <div class="col" style="padding-left: 1.5rem">
                <div class="roboto-regular" style="font-size: 1.2rem">
                  Sociotype:
                </div>
              </div>
              <div class="col">
                <strong class="roboto-bold heading-regular">{{
                  state.memType
                }}</strong>
              </div>
            </div>
            <div class="row" style="padding-top: 1rem">
              <div class="col" style="padding-left: 1.5rem">
                <div class="roboto-regular" style="font-size: 1.2rem">
                  Strengths:
                </div>
              </div>
              <div class="col" style="padding-right: 0.5rem">
                <div class="roboto-medium">{{ state.memStrengths }}</div>
              </div>
            </div>
            <div class="row" style="padding-top: 1.2rem; ">
              <div class="col" style="padding-left: 1.5rem">
                <div class="roboto-regular" style="font-size: 1.2rem">
                  Weaknesses:
                </div>
              </div>
              <div class="col" style="padding-right: 0.5rem; ">
                <div class="roboto-medium">
                  {{ state.memWeakness }}
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>

      <div>
        <q-card class="profile__card--bio">
          <h4 class="u-center-text">About Me</h4>
          <q-card-section class="profile__card--bio__data">
            <div
              v-for="entry in state.memEntries"
              :key="entry.id"
              class="card mb-5"
              :class="{ 'has-background-success-light': entry.done }"
              style="width: 60vw; margin: 0 auto"
            >
              <div
                class="row roboto-regular"
                style="
                  margin-top: 1.5rem;
                  margin-bottom: 1.5rem;
                  margin-left: 6rem;
                  margin-right: 6rem;
                  background-color: #f8f7ff;
                  border-radius: 8px;
                "
              >
                <div
                  style="
                    padding-top: 1.6vh;
                    font-size: 1.2rem;
                    margin-left: 2rem;
                  "
                  class="col text-left"
                  :class="{ 'has-text-success line-through': entry.done }"
                >
                  {{ entry.content }}
                </div>
                <div
                  class="col text-right"
                  style="
                    margin-top: 0.5rem;
                    margin-bottom: 0.5rem;
                    margin-right: 2rem;
                  "
                >
                  <q-btn
                    style="border-radius: 50px; font-size: 1.1rem"
                    @click="toggleDone(entry.id)"
                    class="button bg-primary text-white"
                    :class="entry.done ? 'is-success' : 'is-light'"
                  >
                    &check;
                  </q-btn>
                  <q-btn
                    style="
                      margin-left: 1rem;
                      border-radius: 10rem;
                      font-size: 1.1rem;
                    "
                    @click="deleteEntry(entry.id)"
                    class="button bg-secondary text-white"
                  >
                    &cross;
                  </q-btn>
                </div>
              </div>
            </div>
            <div class="text-right">
              <div>
                <q-btn
                  class="shadow-3 text-white btn-types"
                  label="Add New Entry"
                  @click="prompt = true"
                />
              </div>
              <q-dialog v-model="prompt">
                <q-card style="border-radius: 10px">
                  <q-card-section class="text-center">
                    <h3 class="umtt">Personal Detail</h3>
                  </q-card-section>
                  <q-card-section style="margin: 0 auto">
                    <form @submit.prevent="addEntry">
                      <div class="control is-expanded" style="padding: 1rem">
                        <div
                          class="row roboto-regular-italic"
                          style="margin: 0 auto"
                        >
                          <div class="col">
                            <q-input
                              rounded
                              outlined
                              standout
                              color="secondary"
                              style="
                                margin-left: 2.8vw;
                                margin-bottom: 5vh;
                                margin-top: 2vh;
                                width: 20vw;
                                padding: 0.5rem;
                                font-size: 1.1rem;
                              "
                              v-model="newEntryContent"
                              class="input text-secondary"
                              type="text"
                              placeholder="Add Personal Details"
                            />
                          </div>
                          <div class="col">
                            <div class="control">
                              <q-btn
                                style="
                                  background-color: #711c09;
                                  border-radius: 10px;
                                  margin-right: 4vw;
                                  margin-left: 8.5rem;
                                  margin-top: 4vh;
                                  font-size: 1.1rem;
                                "
                                :disabled="!newEntryContent"
                                @click="addEntry"
                                class="button text-white shadow-3"
                              >
                                Add
                              </q-btn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div>
        <q-card-section
          class="profile__card--quizzes roboto-regular"
          style="margin-left: 3rem; margin-right: 3rem"
        >
          <div class="text-center">
            <h4 class="heading-secondary-sub umbt umtt">
              Type History Results
            </h4>
          </div>
          <i
            elevated
            class="fa-solid fa-circle-question text-secondary"
            style="
              padding-left: 1rem;
              font-size: 2rem;
              position: absolute;
              top: 1.2rem;
              right: 14.5vw;
            "
            ><q-tooltip
              transition-show="fade"
              transition-hide="rotate"
              anchor="top middle"
              self="bottom middle"
              :offset="[10, 10]"
              style="font-size: 1.1rem; width: 380px"
            >
              <strong>Click</strong> and <strong>Slide&nbsp;</strong>
              <q-icon
                class="fa-solid fa-left-right"
                color="white"
                style="
                  width: 2rem;
                  height: 2rem;
                  font-size: 1.7rem;
                  padding-left: 0.2rem;
                  padding-right: 0.2rem;
                "
              />
              on the <em>sociotype card</em> to <em>switch results</em>
            </q-tooltip></i
          >

          <br />
          <div>
            <q-tab-panels
              v-model="panel"
              animated
              swipeable
              infinite
              class="profile__card--quizzes__quiz shadow-2 rounded-borders"
              style="background-color: #f8f7ff"
            >
              <q-tab-panel
                style="width: 700px; margin: 0 auto"
                v-for="quiz in state.memberQuizzes"
                :key="quiz.id"
                :name="quiz.type.PersonalityType"
                class="profile__card--quizzes__quiz--tab"
              >
                <div class="profile__card--quizzes__quiz--tab__sub-head">
                  <div class="roboto-light-italic u-center-text">
                    {{ quiz.email }}
                  </div>
                </div>
                <div class="row">
                  <div class="profile__card--quizzes__quiz--tab__col column">
                    <div class="roboto-black-italic u-center-text">ID</div>
                  </div>
                  <div class="profile__card--quizzes__quiz--tab__col column">
                    <div class="roboto-black-italic u-center-text">DATE</div>
                  </div>
                </div>
                <div class="row">
                  <div
                    class="profile__card--quizzes__quiz--tab__col--info column"
                  >
                    <div class="u-center-text">
                      {{ quiz.quizCount }}
                    </div>
                  </div>
                  <div
                    class="profile__card--quizzes__quiz--tab__col--info column"
                  >
                    <div class="u-center-text">
                      {{ quiz.date }}
                    </div>
                  </div>
                </div>
                <div class="u-center-text">
                  <div
                    class="profile__card--quizzes__quiz--tab__heading2 roboto-light-italic"
                  >
                    <div>Sociotype</div>
                  </div>
                  <div class="u-center-text">
                    <div>
                      <div class="profile__card--quizzes__quiz--tab__type">
                        Personality
                        <div>
                          <strong
                            class="heading-regular--sub"
                            style="color: #71095e"
                            >{{ quiz.type.PersonalityType }}</strong
                          >
                          <q-tooltip
                            transition-show="rotate"
                            transition-hide="rotate"
                            anchor="top right"
                            self="center end"
                            :offset="[10, 10]"
                            style="font-size: 1.1rem"
                          >
                            <strong>{{ quiz.type.AlsoKnownAs }}</strong>
                          </q-tooltip>
                        </div>
                      </div>
                      <div class="profile__card--quizzes__quiz--tab__type">
                        Acronym
                        <div>
                          <strong
                            style="
                              color: #092a71;
                              letter-spacing: 0.1rem;
                              font-size: 1.3rem;
                            "
                            >{{ quiz.type.Acronym }}</strong
                          >
                          <q-tooltip
                            transition-show="rotate"
                            transition-hide="rotate"
                            anchor="top middle"
                            self="bottom middle"
                            :offset="[10, 10]"
                            style="font-size: 1.1rem; width: 26vw"
                          >
                            Comprised of the combination of the
                            <strong>Leading</strong> and
                            <strong>Creative</strong> elements within the
                            <em>Ego Block</em>
                          </q-tooltip>
                        </div>
                      </div>
                      <div class="profile__card--quizzes__quiz--tab__type">
                        AKA
                        <div>
                          <strong
                            class="heading-regular--sub"
                            style="color: #092a71"
                            >{{ quiz.type.AKA }}</strong
                          >
                          <q-tooltip
                            transition-show="rotate"
                            transition-hide="rotate"
                            anchor="top middle"
                            self="bottom middle"
                            :offset="[10, 10]"
                            style="font-size: 1.1rem"
                          >
                            <strong>Jungian</strong> <em>MBTI</em> type
                          </q-tooltip>
                        </div>
                      </div>
                      <div
                        class="profile__card--quizzes__quiz--tab__type--last"
                      >
                        Nickname
                        <div>
                          <strong
                            class="heading-regular--sub"
                            style="color: #71095e"
                            >{{ quiz.type.Nickname }}</strong
                          >
                        </div>
                      </div>
                    </div>

                    <q-item
                      class="profile__card--quizzes__quiz--tab__info roboto-regular"
                    >
                      <q-item style="margin: 0 auto">
                        <div style="padding-left: 0.5rem">
                          <div>
                            <div class="roboto-black">EGO</div>
                            <q-tooltip
                              transition-show="fade"
                              transition-hide="rotate"
                              anchor="top middle"
                              self="bottom middle"
                              :offset="[10, 10]"
                              style="font-size: 1.1rem; width: 26vw"
                            >
                              A socially <strong>demonstrative</strong>,
                              <strong>creative block</strong> that forms the
                              core of the ego - the <em>inner "I"</em>
                            </q-tooltip>
                          </div>
                          <q-item-section>
                            <label class="roboto-bold-italic">Leading</label>
                            <div
                              class="roboto-medium specificsEgo"
                              style="letter-spacing: 0.1rem"
                            >
                              {{ quiz.type.Leading }}
                            </div>
                          </q-item-section>
                          <q-item-section style="padding-right: 0.5rem"
                            ><label class="roboto-medium roboto-bold-italic"
                              >Creative</label
                            >
                            <div
                              class="specificsEgo"
                              style="letter-spacing: 0.1rem"
                            >
                              {{ quiz.type.Creative }}
                            </div>
                          </q-item-section>
                        </div>
                        <div style="padding-left: 2rem">
                          <div>
                            <div class="roboto-black">SUPER EGO</div>
                            <q-tooltip
                              transition-show="fade"
                              transition-hide="rotate"
                              anchor="top middle"
                              self="bottom middle"
                              :offset="[10, 10]"
                              style="font-size: 1.1rem; width: 26vw"
                            >
                              Known as the block of
                              <strong>“social control”</strong> and the block of
                              <strong>“social conformism”</strong>. It can be
                              likened to the “social conscience” of an
                              individual: this block’s activity is directed
                              primarily at fulfillment of norms and standards
                              that other people set for the individual.
                            </q-tooltip>
                          </div>
                          <q-item-section>
                            <label class="roboto-bold-italic">Role</label>
                            <div
                              class="roboto-medium specificsSuperEgo"
                              style="letter-spacing: 0.1rem"
                            >
                              {{ quiz.type.Role }}
                            </div>
                          </q-item-section>

                          <q-item-section style="padding-right: 0.5rem">
                            <label class="roboto-bold-italic">Vulnerable</label>
                            <div
                              class="roboto-medium specificsSuperEgo"
                              style="letter-spacing: 0.1rem"
                            >
                              {{ quiz.type.Vulnerable }}
                            </div>
                          </q-item-section>
                        </div>

                        <div style="padding-left: 2rem">
                          <div>
                            <div class="roboto-black">SUPER ID</div>
                            <q-tooltip
                              transition-show="fade"
                              transition-hide="rotate"
                              anchor="top middle"
                              self="bottom middle"
                              :offset="[10, 10]"
                              style="font-size: 1.1rem; width: 26vw"
                            >
                              Sometimes called the
                              <strong>“child” block</strong> in socionics
                              literature, because this is the block of
                              <strong>weak unconscious functions</strong> on
                              which it is difficult to engage in active,
                              conscious, purposeful activity.
                            </q-tooltip>
                          </div>
                          <q-item-section>
                            <label class="roboto-bold-italic">Suggestive</label>
                            <div
                              class="roboto-medium specificsSuperId"
                              style="letter-spacing: 0.1rem"
                            >
                              {{ quiz.type.Suggestive }}
                            </div>
                          </q-item-section>
                          <q-item-section style="padding-right: 0.5rem">
                            <label class="roboto-bold-italic">Mobilizing</label>
                            <div
                              class="roboto-medium specificsSuperId"
                              style="letter-spacing: 0.1rem"
                            >
                              {{ quiz.type.Mobilizing }}
                            </div>
                          </q-item-section>
                        </div>

                        <div style="padding-left: 2rem">
                          <div>
                            <div class="roboto-black">ID</div>
                            <q-tooltip
                              transition-show="flip-right"
                              transition-hide="rotate"
                              anchor="top middle"
                              self="bottom middle"
                              :offset="[10, 10]"
                              style="font-size: 1.1rem; width: 26vw"
                            >
                              <strong>Passive skills</strong> - a person is
                              quite capable on this block, but these skills are
                              directed at <strong>prevention</strong> of
                              <strong>negative moments</strong> and dangerous
                              developments rather that active and conscious
                              self-realization.
                            </q-tooltip>
                          </div>
                          <q-item-section>
                            <label class="roboto-bold-italic">Ignoring</label>
                            <div
                              class="roboto-medium specificsId"
                              style="letter-spacing: 0.1rem"
                            >
                              {{ quiz.type.Ignoring }}
                            </div>
                          </q-item-section>

                          <q-item-section style="padding-right: 0.5rem">
                            <label class="roboto-bold-italic"
                              >Demonstrative</label
                            >
                            <div
                              class="roboto-medium specificsId"
                              style="letter-spacing: 0.1rem"
                            >
                              {{ quiz.type.Demonstrative }}
                            </div>
                          </q-item-section>
                        </div>
                      </q-item>
                    </q-item>
                    <div class="profile__card--quizzes__quiz--tab__summary">
                      <label class="roboto-bold-italic">Summary</label>
                      <div class="roboto-regular" style="padding-top: 1rem">
                        {{ quiz.type.Description }}
                      </div>
                    </div>
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
          </div>
        </q-card-section>
      </div>
    </q-card>
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
        <!-- <q-fab-action
          label="Login"
          class="sticky-profile__login"
          v-close-popup
          to="/login"
        >
          <i class="bi bi-shield-lock-fill" style="font-size: 1.5rem"></i>
        </q-fab-action> -->
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

<script>
import { reactive, onMounted, ref } from "vue";
import { formatDate } from "src/util/apiutil";

import {
  collection,
  onSnapshot,
  query,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "src/firebase";
import { auth } from "src/firebase";

export default {
  setup() {
    const url = ref("");
    const newUrl = ref("");

    const memberCollectionRef = collection(db, "Members");
    const memberCollectionQuery = query(memberCollectionRef);

    const bioCollectionRef = collection(db, "MemberBio");
    const bioCollectionQuery = query(bioCollectionRef, orderBy("date", "desc"));

    const memQuizCollectionRef = collection(db, "MemberQuizResults");
    const memQuizCollectionQuery = query(memQuizCollectionRef);

    // Todo Array Ref
    const entries = ref([]);

    onMounted(() => {
      loadQuizzes();
      loadMember();
      loadEntries();
    });

    let state = reactive({
      status: "",
      email: "",
      user: auth.currentUser,
      members: [],
      selectedMember: [],
      personalities: [],
      PersonalityType: {},
      memberQuizzes: [],
      memberPhoto: "",
      selImgMember: [],
      personalityResults: [],
      memType: "",
      memStrengths: "",
      memWeakness: "",
      memEntries: [],
    });

    const loadQuizzes = () => {
      onSnapshot(memQuizCollectionQuery, (querySnapshot) => {
        const fbMemQuiz = [];
        querySnapshot.forEach((doc) => {
          if (doc.data().email === auth.currentUser.email) {
            const memQuiz = {
              id: doc.id,
              email: doc.data().email,
              results: doc.data().results,
              type: doc.data().type,
              date: doc.data().date,
              quizCount: doc.data().quizCount,
            };
            fbMemQuiz.push(memQuiz);
            state.memType = memQuiz.type.PersonalityType;
            state.memStrengths = memQuiz.type.Strengths;
            state.memWeakness = memQuiz.type.Weaknesses;
          }
        });
        state.memberQuizzes = fbMemQuiz;
      });
    };

    const loadMember = () => {
      try {
        // Get Members from database and match the email of current user
        onSnapshot(memberCollectionQuery, (querySnapshot) => {
          const fbMember = [];
          querySnapshot.forEach((doc) => {
            if (doc.data().email === auth.currentUser.email) {
              const member = {
                id: doc.id,
                firstName: doc.data().firstName,
                lastName: doc.data().lastName,
                email: doc.data().email,
                date: doc.data().date,
                img: doc.data().img,
              };
              fbMember.push(member);
            }
          });
          state.members = fbMember;
          for (let i = 0; i < state.members.length; i++) {
            if (state.members[i].email === auth.currentUser.email) {
              state.selectedMember = state.members[i];
            }
          }
        });
      } catch (error) {
        console.log("Error: ", error);
        state.status = `Error has occurred: ${error.message}`;
      }
    };

    const loadEntries = () => {
      try {
        onSnapshot(bioCollectionQuery, (querySnapshot) => {
          const fbEntries = [];
          querySnapshot.forEach((doc) => {
            if (doc.data().Author === auth.currentUser.email) {
              const entry = {
                id: doc.id,
                content: doc.data().content,
                done: doc.data().done,
                Author: doc.data().Author,
              };
              fbEntries.push(entry);
            }
          });
          // assign loaded entries to the entry state array
          entries.value = fbEntries;
          state.memEntries = fbEntries;
        });
      } catch (error) {
        console.log("Error: ", error);
        state.status = `Error has occurred: ${error.message}`;
      }
    };

    /**
     * Add a ToDo
     */
    const newEntryContent = ref("");
    const addEntry = () => {
      addDoc(bioCollectionRef, {
        content: newEntryContent.value,
        done: false,
        date: Date.now(),
        Author: auth.currentUser.email,
      });
      newEntryContent.value = "";
    };

    /**
     * Delete a ToDo
     */
    const deleteEntry = (id) => {
      deleteDoc(doc(bioCollectionRef, id));
    };

    /**
     * Mark Task Complete
     */
    const toggleDone = (id) => {
      const index = state.entries.findIndex((entry) => entry.id === id);
      //console.log("toggleDone", index);

      // Set the "capital" field of the city 'DC'
      updateDoc(doc(bioCollectionRef, id), {
        done: !entries[index].done,
      });
    };

    return {
      state,
      loadMember,
      url,
      newUrl,
      refresh(id) {
        url.value = state.selectedMember.img;
        newUrl.value = "https://picsum.photos/500/300?t=" + Math.random();
        updateDoc(doc(memberCollectionRef, id), {
          img: newUrl.value,
        });
      },
      panel: ref("LII"),
      formatDate,
      addEntry,
      deleteEntry,
      toggleDone,
      newEntryContent,
      prompt: ref(false),
    };
  },
};
</script>

<!-- <style>
@import "bulma/css/bulma.min.css";

.badass-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}

.title {
  color: white;
}

.line-through {
  text-decoration: line-through;
}
</style> -->
