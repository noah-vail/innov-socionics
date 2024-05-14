<template>
  <div class="pageRomance text-center">
    <header class="page-header">
      <div class="page-header__logo-box">
        <!-- IMG GOES HERE -->
      </div>
      <div class="page-header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main roboto-bold-italic text-white"
            >Romance</span
          >
          <span class="heading-primary--sub roboto-bold-italic text-white"
            >Styles</span
          >
        </h1>
      </div>
    </header>
    <q-card-section
      class="pageRomance__styles__section"
      style="width: 80vw; margin: 0 auto; margin-top: 1.5rem"
    >
      <q-carousel
        v-model="slide"
        transition-prev="fade"
        transition-next="fade"
        infinite
        arrows
        animated
        control-color="primary"
        class="rounded-borders"
        height="1100px"
        style="border-radius: 8px"
      >
        <q-carousel-slide name="aggressor" class="column no-wrap">
          <i
            class="fa-solid fa-hand-fist pageRomance__styles__section--icon text-primary"
            style="font-size: 3rem"
          ></i>
          <div class="q-mt-md text-center">
            <div class="pageRomance__styles__section--header-box">
              <div class="pages-sub-head pages-sub-head--anim4 roboto-regular">AGGRESSOR</div>
              <br />
              <div class="pages-sub-head pages-sub-head--anim4 roboto-regular">
                <strong class="roboto-black">SE</strong> IN THE EGO BLOCK
              </div>
              <div style="font-size: 2.5rem; padding-left: 8rem">&rlhar;</div>
              <div
                class="pages-sub-head pages-sub-head--anim2 roboto-light-italic"
              >
                <strong class="roboto-black-italic text-primary">LSI</strong>,
                <strong class="roboto-black-italic text-primary">SLE</strong>,
                <strong class="roboto-black-italic text-primary">ESI</strong>,
                <strong class="roboto-black-italic text-primary">SEE</strong>
              </div>
            </div>
          </div>
          <div>
            <ul class="roboto-light display-box__box--agg">
              <li style="padding-bottom: 1rem">
                No doubts about own interest in another person
              </li>
              <li style="padding-bottom: 1rem">
                Not prone to hesitation about whether or not to reveal that
                interest
              </li>
              <li style="padding-bottom: 1rem">
                Focus is more on own interest than whether or not the other
                person might reciprocate
              </li>
              <li>
                Romantic interaction is more about "toughness" than "tenderness"
              </li>
            </ul>
          </div>
          <div
            class="heading-tertiary-sub-color roboto-medium text-primary"
            style="padding-bottom: 1rem"
          >
            Typical Characteristics
          </div>
          <div class="pageRomance__styles__section--body">
            <p class="paragraph roboto-light">
              Needs to feel some sense of "superiority" over their partner, but
              worthwhile only if the partner is seen as able to largely "keep
              up". This takes the form of <strong class="highlight-text">power games</strong>, which
              others might regard as cruel or bitchy in the case of female
              Aggressors with male partners, the above tends to assume the
              characteristic of a woman expecting total devotion from the
              partner, rather than her being "bossy". Little inclination to
              externally admit not having been the one to end a relationship,
              unless if adopting a "who cares" front simultaneously. This
              romance style is defined by <strong class="highlight-text">focus on Se</strong> which is
              <strong class="highlight-text">static</strong>, <strong class="highlight-text">irrational</strong>, and
              <strong class="highlight-text">extroverted</strong>.
            </p>
            <p class="paragraph roboto-light">
              This means that an Aggressor <strong class="highlight-text">sees attraction</strong> to
              another person as a <strong class="highlight-text">static</strong> state, which he feels
              it is up to him to change in the direction more in agreement to
              his preference. This accounts for an Aggressor's inclination to
              <strong class="highlight-text">take the initiative</strong> in approaching the object of
              his interest and being "relentless" in his pursuit, as well as,
              even during an established relationship, continuing to try to
              "shake things up" or "get things moving". If his partner is not
              receptive to such behavior, this discourages the Aggressor, and
              results in his interest cooling off.
            </p>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="victim" class="column no-wrap">
          <i
            class="fa-solid fa-group-arrows-rotate pageRomance__styles__section--icon text-secondary"
            style="font-size: 3rem"
          ></i>
          <div class="q-mt-md text-center">
            <div class="pageRomance__styles__section--header-box">
              <div class="pages-sub-head pages-sub-head--anim4 roboto-regular">VICTIM</div>
              <br />
              <div class="pages-sub-head pages-sub-head--anim4 roboto-regular">
                <strong class="roboto-black">NI</strong> IN THE EGO BLOCK
              </div>
              <div style="font-size: 2.5rem">&rlhar;</div>
              <div class="pages-sub-head pages-sub-head--anim2 roboto-light-italic">
                <strong class="roboto-black-italic text-secondary">EIE</strong>,
                <strong class="roboto-black-italic text-secondary">IEI</strong>,
                <strong class="roboto-black-italic text-secondary">LIE</strong>,
                <strong class="roboto-black-italic text-secondary">ILI</strong>
              </div>
            </div>
            <div>
              <ul class="roboto-light display-box__box--vic">
                <li style="padding-bottom: 1rem">
                  Prone to initial doubts about intensity of own interest in
                  another person
                </li>
                <li style="padding-bottom: 1rem">
                  Not always confident about revealing that interest
                </li>
                <li style="padding-bottom: 1rem">
                  Inclined to focus on whether or not the other person might
                  reciprocate the interest
                </li>
                <li style="padding-bottom: 0.5rem">
                  Inclined to question whether or not the other person's
                  interest will remain constant with time
                </li>
              </ul>
            </div>
            <div
              class="heading-tertiary-sub-color roboto-medium text-secondary"
              style="padding-bottom: 1rem"
            >
              Typical Characteristics
            </div>
            <div class="pageRomance__styles__section--body">
              <p class="paragraph roboto-light">
                On the part of the partner, without ever actually "submitting"
                to them this takes the form of the individual somewhat expecting
                the partner to be "mean" on occasion in the case of Victim males
                with female partners, this latter trait assumes a characteristic
                analogous to a "knight devoted to his princess inclination to
                openly admit to a relationship having been ended by the partner
                rather than by the individual himself This romance style is
                defined by <strong class="highlight-text">focus on Ni</strong> which is
                <strong class="highlight-text">dynamic</strong>, <strong class="highlight-text">irrational</strong>, and
                <strong class="highlight-text">introverted</strong>, with perceptions of inner imagery
                worlds away from the present physical reality.
              </p>
              <p class="paragraph roboto-light">
                This means that a Victim sees attraction between two individuals
                as a <strong class="highlight-text">dynamic</strong> state, which he feels is
                completely natural. This accounts for a Victim's inclination to
                focus on the mutual attraction, or particularly the attraction
                felt by the other person, as to its longer-term perspectives and
                implications, as well as a certain expectation that the partner
                will continuously take action to confirm the attraction. Failure
                on the partner to do so results on the individual assuming that
                it's already changing. The individual counts on the partner to
                forcefully bring the individual "down to earth from his thoughts
                " and focus on the immediate physical reality, continuously
              </p>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="caregiver" class="column no-wrap">
          <i
            class="fa-solid fa-spa pageRomance__styles__section--icon text-accent"
            style="font-size: 3rem"
          ></i>
          <div class="q-mt-md text-center">
            <div class="pageRomance__styles__section--header-box">
              <div class="pages-sub-head pages-sub-head--anim4 text-center roboto-regular">
                CAREGIVER
              </div>
              <br />
              <div class="pages-sub-head pages-sub-head--anim4 text-center roboto-regular">
                <strong class="roboto-black">SI</strong> IN THE EGO BLOCK
              </div>
              <div style="font-size: 2.5rem">&rlhar;</div>
              <div class="pages-sub-head pages-sub-head--anim2 roboto-light-italic">
                <strong class="roboto-black-italic text-accent">ESE</strong>,
                <strong class="roboto-black-italic text-accent">SEI</strong>,
                <strong class="roboto-black-italic text-accent">LSE</strong>,
                <strong class="roboto-black-italic text-accent">SLI</strong>
              </div>
            </div>
            <ul class="display-box__box--car roboto-light">
              <li style="padding-bottom: 1rem">
                Attraction is naturally sparked by the perceived aesthetic
                attributes of the prospective partner, but cooled off if such
                attributes are accompanied by a perception of "too aggressive"
                sexuality.
              </li>
              <li style="padding-bottom: 1rem">
                Inclination towards tenderness, "soft" rather than "hard"
                approach
              </li>
              <li style="padding-bottom: 1rem">
                Prone to adopt maternal approach to the physical comfort and
                needs of partner
              </li>
              <li style="padding-bottom: 1rem">
                Interest is further maintained if partner welcomes this
                approach. Prone to assume that partner will need help in
                practical, daily matters
              </li>
            </ul>
            <div class="heading-tertiary-sub-color roboto-medium text-accent">
              Typical Characteristics
            </div>
            <div
              class="pageRomance__styles__section--body"
              style="padding-bottom: 1rem"
            >
              <p class="paragraph roboto-light">
                This romance style is defined by
                <strong class="highlight-text">focus on Si</strong> which is <strong class="highlight-text">dynamic</strong>,
                <strong class="highlight-text">irrational</strong>, and <strong class="highlight-text">introverted</strong>,
                with perceptions of the present reality and physical sensations
                rather than inner imagery.
              </p>
              <p class="paragraph roboto-light">
                This means that a Caregiver sees attraction between two
                individuals as a <strong class="highlight-text">dynamic</strong> state, which he feels
                is completely natural, as he also sees the physical comfort and
                well-being of another person as dynamic. This accounts for a
                Caregiver's inclination to focus on the mutual attraction, or
                particularly the attraction felt by the other person, as
                connected to that person's physical well-being. The individual's
                own dynamic and introverted <strong class="highlight-text">Si perceptions</strong> lead
                to a sense of sleepy drifting in them, which makes him welcome
                <strong class="highlight-text">Ne impulses</strong> from another person designed to
                shake him out of it from time to time.
              </p>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="infantile" class="column no-wrap">
          <i
            class="bi bi-x-diamond pageRomance__styles__section--icon text-info"
            style="font-size: 3rem"
          ></i>
          <div class="q-mt-md text-center">
            <div class="pageRomance__styles__section--header-box">
              <div class="pages-sub-head pages-sub-head--anim4 text-center roboto-regular">
                INFANTILE
              </div>
              <br />
              <div class="pages-sub-head pages-sub-head--anim4 text-center roboto-regular">
                <strong class="roboto-black">NE</strong> IN THE EGO BLOCK
              </div>
              <div style="font-size: 2.5rem">&rlhar;</div>
              <div class="pages-sub-head pages-sub-head--anim2 roboto-light-italic">
                <strong class="roboto-black-italic text-info">ILE</strong>,
                <strong class="roboto-black-italic text-info">LII</strong>,
                <strong class="roboto-black-italic text-info">EII</strong>,
                <strong class="roboto-black-italic text-info">IEE</strong>
              </div>
            </div>
            <ul class="roboto-light display-box__box--inf">
              <li style="padding-bottom: 1rem">
                Interest is sparked in partner with positive aesthetic
                attributes divorced from active, "aggressive" sexuality
              </li>
              <li style="padding-bottom: 1rem">
                Tend to try to attract partner's interest with joking, goofy or
                even "strange" behavior
              </li>
              <li style="padding-bottom: 1rem">
                Try to help partner see the unexpected and fun side of things
              </li>
              <li style="padding-bottom: 1rem">
                Interest is maintained or cools off according to partner's
                response to this behavior
              </li>
              <li>
                Appreciation for partner who actively cares about the
                individual's comfort and daily needs
              </li>
            </ul>
            <div class="heading-tertiary-sub-color roboto-medium text-info">
              Typical Characteristics
            </div>
            <div
              class="pageRomance__styles__section--body"
              style="padding-bottom: 1rem"
            >
              <p class="paragraph roboto-light">
                Appreciation for partner who actively cares about the
                individual's <strong class="highlight-text">comfort</strong> and
                <strong class="highlight-text">daily needs</strong>. Neutral with regard to externally
                admitting who took the initiative in ending a relationship,
                "power" is seen as unimportant in such matters. This romance
                style is defined by <strong class="highlight-text">focus on Ne</strong> which is
                <strong class="highlight-text">static</strong>, <strong class="highlight-text">irrational</strong>, and
                <strong class="highlight-text">extroverted</strong>, with perceptions focused on
                possibilities and alternatives to the static present reality,
                which the individual perceives as intrinsically boring and
                stagnant.
              </p>
              <p class="paragraph roboto-light">
                This means that an Infantile sees attraction between two
                individuals as a <strong class="highlight-text">static</strong> state, also from the
                point of view of the other person, which he tries to "get
                moving" by actively thinking of variations of the present static
                state. This accounts for an Infantile's inclination to focus on
                the mutual attraction, or particularly the attraction felt by
                the other person, as connected to that person's being exposed to
                the unexpected, imaginative, fun, even "weird" side of life,
                reality, and each other, a behavior that can be
                <strong class="highlight-text">described</strong> as <strong class="highlight-text">"childlike"</strong>. This
                focus leads to a sort of helplessness regarding his own physical
                well being as perceived by Si, so he welcomes help from others
                in that area.
              </p>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </q-card-section>

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
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref("aggressor"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?",
    };
  },
};
</script>
