<template>
  <q-page class="quiz" style="text-align: center">
    <q-card class="quiz__quizCard pages-sub-head--anim">
      <div class="text-center">
        <div
          class="heading-secondary2 roboto-bold-italic umbt"
          style="margin: -20px; padding-top: 3rem"
        >
          Personality Quiz
        </div>
      </div>
      <q-list separator class="quiz__quizCard--list">
        <q-form
          @submit="saveQuiz"
          style="padding-top: 5px; padding-bottom: 2rem"
        >
          <div
            v-for="question in state.quizQuestions"
            :key="question.id"
            style="padding-bottom: 2.5rem"
          >
            <div>
              <p class="roboto-medium" style="padding: 1rem; font-size: 1.3rem">
                <a>{{ question.Number }}. </a>{{ question.Question }}
              </p>
              <q-option-group
                class="quiz__quizCard--list__option-group roboto-light"
                inline
                v-model="question.answer"
                :options="state.options"
                color="secondary"
              />
            </div>
          </div>

          <div class="text-center" style="margin-top: 4vh; margin-bottom: 1vh">
            <q-btn
              outline
              rounded
              color="primary"
              class="btn text-primary"
              label="Submit"
              type="submit"
              style="margin-right: 1rem; width: 12vw"
            />
            <q-btn
              outline
              rounded
              class="btn text-secondary"
              label="CANCEL"
              @click="clearQuiz()"
              style="margin-left: 1rem; width: 12vw"
            />
          </div>
        </q-form>
      </q-list>
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
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  addDoc,
} from "firebase/firestore";
import { db } from "src/firebase";
import { auth } from "src/firebase";

export default {
  setup() {
    const quizResult = ref("");
    const quizCollectionRef = collection(db, "QuizQuestions");
    const quizCollectionQuery = query(
      quizCollectionRef,
      orderBy("Number", "asc")
    );

    const memQuizCollectionRef = collection(db, "MemberQuizResults");
    const memQuizCollectionQuery = query(memQuizCollectionRef);

    const sociotypeCollectionRef = collection(db, "PersonalityType");
    const personalityCollectionQuery = query(sociotypeCollectionRef);

    onMounted(() => {
      loadQuizQuestions();
      loadMemberQuizzes();
    });

    let state = reactive({
      status: "",
      quizQuestionId: "",
      quizQuestions: [],
      quiz: [],
      answers: [],
      options: [
        { label: "Strongly Agree", value: "a" },
        { label: "Somewhat Agree", value: "b" },
        { label: "Somewhat Disagree", value: "c" },
        { label: "Strongly Disagree", value: "d" },
      ],
      sessionStorage,
      user: {},
      memberQuizResult: "",
      memberQuizzes: [],
      quizCount: 1,
      personalities: [],
      memberType: {},
    });

    const loadMemberQuizzes = () => {
      onSnapshot(memQuizCollectionQuery, (querySnapshot) => {
        const fbMemQuiz = [];
        querySnapshot.forEach((doc) => {
          const memQuiz = {
            id: doc.id,
            email: doc.data().email,
            results: doc.data().results,
            type: doc.data().type,
            date: doc.data().date,
            quizCount: doc.data().quizCount,
          };
          fbMemQuiz.push(memQuiz);
          state.quizCount++;
        });
        state.memberQuizzes = fbMemQuiz;
      });

      onSnapshot(personalityCollectionQuery, (querySnapshot) => {
        const fbPersonality = [];
        querySnapshot.forEach((doc) => {
          const personality = {
            id: doc.id,
            PersonalityType: doc.data().PersonalityType,
            Acronym: doc.data().Acronym,
            AlsoKnownAs: doc.data().AlsoKnownAs,
            AKA: doc.data().AKA,
            Nickname: doc.data().Nickname,
            Quadra: doc.data().Quadra,
            Club: doc.data().Club,
            Temperament: doc.data().Temperament,
            RomanceStyle: doc.data().RomanceStyle,
            Leading: doc.data().Leading,
            Creative: doc.data().Creative,
            Role: doc.data().Role,
            Vulnerable: doc.data().Vulnerable,
            Suggestive: doc.data().Suggestive,
            Mobilizing: doc.data().Mobilizing,
            Ignoring: doc.data().Ignoring,
            Demonstrative: doc.data().Demonstrative,
            Description: doc.data().Description,
          };
          fbPersonality.push(personality);
        });
        // assign loaded todos to the todo array ref
        state.personalities = fbPersonality;
      });
    };

    const loadQuizQuestions = () => {
      try {
        state.status = "Loading Quiz Questions ...";

        onSnapshot(quizCollectionQuery, (querySnapshot) => {
          const fbQuiz = [];
          querySnapshot.forEach((doc) => {
            const quizQuestion = {
              id: doc.id,
              Number: doc.data().Number,
              Question: doc.data().Question,
            };
            fbQuiz.push(quizQuestion);
          });
          state.quizQuestions = fbQuiz;

          state.status = `Loaded ${state.quizQuestions.length} Questions`;
        });
      } catch (err) {
        console.log("Error: ", err);
        state.status = `Error has occurred: ${err.message}`;
      }
    };

    const clearQuiz = () => {
      state.quiz = [];
      state.quizQuestions = [];
      state.status = "Answers Cleared";
    };

    const saveQuiz = async () => {
      // Get User from Firebase Auth
      state.user = auth.currentUser;
      try {
        state.status = `Sending quiz answers to server..`;

        for (let i = 0; i < state.quizQuestions.length; i++) {
          state.answers.push({
            questionNumber: state.quizQuestions[i].questionNumber,
            question: state.quizQuestions[i].question,
            answer: state.quizQuestions[i].answer,
          });
        }
        let quiz = JSON.stringify(state.answers);

        /**
         * Determine Personality Type
         */
        let aCount = 0;
        let bCount = 0;
        let cCount = 0;
        let dCount = 0;
        // Count selections
        for (let i = 0; i < state.answers.length; i++) {
          if (state.answers[i].answer === "a") {
            aCount++;
          } else if (state.answers[i].answer === "b") {
            bCount++;
          } else if (state.answers[i].answer === "c") {
            cCount++;
          } else if (state.answers[i].answer === "d") {
            dCount++;
          }
        }

        // determine selection with highest count
        if (aCount > bCount && aCount > cCount && aCount > dCount) {
          //console.log("A Count Highest: ", aCount);
          state.memberQuizResult = "LII";
        } else if (bCount > aCount && bCount > cCount && bCount > dCount) {
          //console.log("B Count Highest: ", bCount);
          state.memberQuizResult = "ILI";
        } else if (cCount > aCount && cCount > bCount && cCount > dCount) {
          //console.log("C Count Highest: ", cCount);
          state.memberQuizResult = "SLI";
        } else if (dCount > aCount && dCount > bCount && dCount > cCount) {
          //console.log("D Count Highest: ", dCount);
          state.memberQuizResult = "LIE";
        }

        const quizDate = new Date();
        const hours = quizDate.getHours();
        const mins = quizDate.getMinutes();
        const sec = quizDate.getSeconds();
        const hms = hours + ":" + mins + ":" + sec;
        const finalDate =
          quizDate.getFullYear() +
          "-" +
          (quizDate.getMonth() + 1) +
          "-" +
          quizDate.getDate() +
          " @ " +
          hms;

        state.memberType = state.personalities.find(
          (ptype) => ptype.PersonalityType === state.memberQuizResult
        );
        //console.log("Member Type: ", state.memberType);

        //Store Results in Database Collection --> QuizResults
        const docRef = await addDoc(collection(db, "MemberQuizResults"), {
          date: finalDate,
          quizCount: state.quizCount,
          email: state.user.email,
          results: quiz,
          type: state.memberType,
        });

        // Clear Quiz
        clearQuiz();
      } catch (error) {
        console.log(error);
        state.status = `Error adding quiz: ${error}`;
      }
    };

    return {
      state,
      loadQuizQuestions,
      clearQuiz,
      sessionStorage,
      saveQuiz,
      quizResult,
    };
  },
};
</script>
