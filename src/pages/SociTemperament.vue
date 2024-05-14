<template>
  <q-page class="pageTemperament">
    <header class="page-header">
      <div class="page-header__logo-box">
        <!-- IMG GOES HERE -->
      </div>
      <div class="page-header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main roboto-bold-italic text-white"
            >Temperaments</span
          >
        </h1>
      </div>
    </header>

    <q-card-section style="width: 80vw; margin: 0 auto; margin-top: 1.5rem">
      <q-carousel
        v-model="slide"
        transition-prev="jump-left"
        transition-next="jump-right"
        infinite
        arrows
        animated
        control-color="primary"
        class="rounded-borders"
        height="1450px"
        style="border-radius: 8px"
      >
        <q-carousel-slide
          name="ep"
          class="pageTemperament__temperaments--type column no-wrap"
        >
          <i
            class="fa-solid fa-hurricane pageTemperament__temperaments--type__icon text-primary"
          ></i>
          <div class="pageTemperament__temperaments--type">
            <div class="pageTemperament__temperaments--type__sub-heading">
              <div
                class="pages-sub-head pages-sub-head--anim roboto-regular u-center-text umtt"
              >
                EP TEMPERAMENT
              </div>
              <div
                class="pages-sub-head pages-sub-head--anim2 roboto-regular umbt"
              >
                FLEXIBLE-MANEUVERING
              </div>
            </div>
            <div class="paragraph roboto-light">
              <div>
                The EP temperament, or flexible-maneuvering temperament, was
                identified by Viktor Gulenko and includes the four
                <strong style="color: #0d85a0" class="roboto-bold highlight-text"
                  >Irrational Extroverts</strong
                >
                (one in each quadra)
              </div>
              <br />
              <div class="roboto-regular-italic pages-sub-head--anim3" style="text-align: center">
                <strong class="heading-regular roboto-black-italic text-primary"
                  >ILE</strong
                >,
                <strong class="heading-regular roboto-black-italic text-primary"
                  >SLE</strong
                >,
                <strong class="heading-regular roboto-black-italic text-primary"
                  >SEE</strong
                >, and
                <strong class="heading-regular roboto-black-italic text-primary"
                  >IEE</strong
                >
              </div>
            </div>
            <ul
              class="roboto-regular pageTemperament__temperaments--type__list"
            >
              <li class="pageTemperament__temperaments--type__list--item">
                Flexible
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Mobile
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Impulsive, shifting from apparent inactivity to bursts of
                energy, often several times a day, showing impatience
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Walk is energetic but 'cat-like'.
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Often optimistic and open-minded.
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Entertains people easily and naturally
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Inclined to fidget when forced to remain inactive for long
                periods.
              </li>
            </ul>
            <div class="roboto-light">
              <p class="paragraph">
                EPs are both static and irrational, so they perceive reality as
                mostly not changing, and when it does, it's in abrupt "leaps"
                from one state to another.
              </p>
              <p class="paragraph">
                An EP is bothered by the lack of change, especially as seen
                through his leading function, since his personal preference is
                for change. That makes him impulsive, with sudden bursts of
                action, energy, or even just thought, as he tries to get his
                perceptions "moving".
              </p>
              <p class="paragraph">
                As extroverts, EPs tend to be feel that it is up to them to
                initiate contacts with other people, and EPs in particular tend
                to feel quite natural in that role.
              </p>
              <p class="paragraph">
                EPs place significant value on generating ideas (Ne base) and
                volition (Se base). As such, EPs tend to view negatively, others
                who appear limited or restricted in either their ability to
                exercise volition or their ability to accept or even consider
                other possibilities
              </p>
              <p class="paragraph">
                Although this criticism can be leveled at any type, the types
                with the EP's leading information element in their vulnerable
                function appear more susceptible (i.e., their supervisee or
                conflictor)
              </p>
            </div>
            <div
              class="heading-tertiary-sub-color text-primary roboto-medium"
              style="padding-top: 0.5rem"
            >
              Perception of Other Temperaments
            </div>
            <div class="row">
              <div class="col" style="padding-top: 1rem">
                <div class="heading-tertiarySub roboto-black">EJ</div>
                <p class="paragraph roboto-light">
                  EPs perceive EJs as active but too
                  <strong style="color: #0d85a0" class="roboto-bold highlight-text"
                    >restless</strong
                  >
                  and
                  <strong style="color: #0d85a0" class="roboto-bold highlight-text"
                    >nervous</strong
                  >,
                  <srong style="color: #0d85a0" class="roboto-bold highlight-text"
                    >slightly annoying</srong
                  >
                  due to a lack of sense of spontaneity
                </p>
              </div>
              <div class="col" style="padding-top: 1rem; padding-left: 2rem">
                <div class="heading-tertiarySub roboto-black">IP</div>
                <p class="paragraph roboto-light">
                  EPs perceive IPs as
                  <strong style="color: #0d85a0" class="roboto-bold highlight-text"
                    >pleasantly flexible</strong
                  >
                  and
                  <strong style="color: #0d85a0" class="roboto-bold highlight-text"
                    >responsive</strong
                  >
                  to their initiatives, sometimes too unpredictable but for that
                  very reason never boring
                </p>
              </div>
            </div>
            <div>
              <div class="heading-tertiarySub roboto-black">IJ</div>
              <p class="paragraph roboto-light">
                EPs perceive IJs as too
                <strong style="color: #0d85a0" class="roboto-bold highlight-text"
                  >predictable</strong
                >
                and
                <strong style="color: #0d85a0" class="roboto-bold highlight-text"
                  >boring</strong
                >, too unwilling to do things on the spur of the moment
              </p>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          name="ej"
          class="pageTemperament__temperaments--type column no-wrap"
        >
          <i
            class="fa-solid fa-explosion pageTemperament__temperaments--type__icon text-secondary"
          ></i>
          <div class="pageTemperament__temperaments--type text-center">
            <div class="pageTemperament__temperaments--sub-heading">
              <div
                class="pages-sub-head pages-sub-head--anim roboto-regular umtt"
              >
                EJ TEMPERAMENT
              </div>
              <br />
              <div
                class="pages-sub-head pages-sub-head--anim2 roboto-regular umbt"
              >
                LINEAR-ASSERTIVE
              </div>
            </div>
            <div class="paragraph roboto-light">
              <p>
                The EJ temperament, or linear-assertive temperament, was
                identified by Viktor Gulenko and includes the four
                <strong style="color: #a0280d" class="roboto-bold highlight-text"
                  >Rational Extroverts</strong
                >
                (one in each quadra)
              </p>
              <div class="roboto-regular-italic pages-sub-head--anim3" style="text-align: center">
                <strong
                  class="heading-regular roboto-black-italic text-secondary"
                  >ESE</strong
                >,
                <strong
                  class="heading-regular roboto-black-italic text-secondary"
                  >EIE</strong
                >,
                <strong
                  class="heading-regular roboto-black-italic text-secondary"
                  >LIE</strong
                >, and
                <strong
                  class="heading-regular roboto-black-italic text-secondary"
                  >LSE</strong
                >
              </div>
            </div>
            <ul
              class="roboto-regular pageTemperament__temperaments--type__list"
            >
              <li class="pageTemperament__temperaments--type__list--item">
                Proactive
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Restless
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Difficult to relax unless tired
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Walk tends to be quick-paced and "purposeful", as well as stiff.
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                "Calmly energetic" with few intense variations in the level of
                energy during the day.
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Inclined to fidget when forced to remain inactive for long
                periods
              </li>
            </ul>
            <div class="roboto-light">
              <p class="paragraph">
                EJs are both dynamic and rational, so they see reality as in
                continuous, gradual, often imperceptible change. At the same
                time, an EJ has his own views of what reality "should" be.
              </p>
              <p class="paragraph">
                This inclines him to be quick to take action, normally using his
                leading function, in order to make sure things will remain, or
                become, as they should be, before change can get too far.
              </p>
              <p class="paragraph">
                As extroverts, EJs tend to feel that it is up to them to
                initiate contacts with other people, whether in the context of
                establishing or maintaining a relationship. They will not
                necessarily act on that, though, and sometimes wish others would
                take over this role
              </p>
              <p class="paragraph">
                EJs emphasize acting on external information. EJs will
                critically view others who the EJs perceive as having some type
                of information and not acting on it or applying it.
              </p>
              <p class="paragraph">
                EJs expect new information applied towards a productive purpose
                and question the capabilities of someone who has valuable
                information and doesn't use it. Although this criticism can be
                leveled at any type, it is often directed at IP types,
                particularly the person's supervisee and conflictor
              </p>
            </div>

            <div
              class="heading-tertiary-sub-color roboto-medium text-secondary"
            >
              Perception of Other Temperaments
            </div>
            <div class="row">
              <div class="col" style="padding-top: 1rem">
                <div class="heading-tertiarySub roboto-black">EP</div>
                <p class="paragraph roboto-light">
                  EJs see EPs as
                  <strong style="color: #a0280d" class="roboto-bold highlight-text"
                    >unpredictable</strong
                  >
                  and moody, and therefore a bit
                  <strong style="color: #a0280d" class="roboto-bold highlight-text"
                    >irritating</strong
                  >, but also as extremely energetic once they do focus on doing
                  something, as well as the source of initiatives that may be
                  worthwhile
                </p>
              </div>
              <div class="col" style="padding-top: 1rem; padding-left: 2rem">
                <div class="heading-tertiarySub roboto-black">IP</div>
                <p class="paragraph roboto-light">
                  EJs see IP as
                  <strong style="color: #a0280d" class="roboto-bold highlight-text"
                    >unpredictable</strong
                  >,
                  <strong style="color: #a0280d" class="roboto-bold highlight-text"
                    >moody</strong
                  >, as well as too passive and
                  <strong style="color: #a0280d" class="roboto-bold highlight-text"
                    >unreliable</strong
                  >, especially if they are required to show initiative or even
                  reciprocity
                </p>
              </div>
            </div>
            <div>
              <div class="heading-tertiarySub roboto-black">IJ</div>
              <p class="paragraph roboto-light">
                EJs see IJs as
                <strong style="color: #a0280d" class="roboto-bold highlight-text">solid</strong
                >,
                <strong style="color: #a0280d" class="roboto-bold highlight-text"
                  >reliable</strong
                >, and reassuringly
                <strong style="color: #a0280d" class="roboto-bold highlight-text"
                  >predictable</strong
                >, and usually not inclined towards being the first to take the
                initiative in taking action
              </p>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide
          name="ip"
          class="pageTemperament__temperaments--type column no-wrap"
        >
          <i
            class="bi bi-transparency pageTemperament__temperaments--type__icon text-accent"
          ></i>
          <div class="pageTemperament__temperaments--type q-mt-md text-center">
            <div class="pageTemperament__temperaments--sub-heading">
              <div class="pages-sub-head pages-sub-head--anim roboto-regular">
                IP TEMPERAMENT
              </div>
              <br />
              <div
                class="pages-sub-head pages-sub-head--anim2 roboto-regular umbt"
              >
                RECEPTIVE-ADAPTIVE
              </div>
            </div>
            <div class="paragraph roboto-light">
              <p>
                The IP temperament, or receptive-adaptive temperament, was
                identified by Viktor Gulenko and includes the four
                <strong style="color: #710da0" class="roboto-bold highlight-text"
                  >Irrational Introverts</strong
                >
                (one in each quadra)
              </p>
              <div
                class="roboto-regular-italic pages-sub-head--anim3"
                style="text-align: center; padding-bottom: 0.5rem"
              >
                <strong class="heading-regular roboto-black-italic text-accent"
                  >IEI</strong
                >,
                <strong class="heading-regular roboto-black-italic text-accent"
                  >SEI</strong
                >,
                <strong class="heading-regular roboto-black-italic text-accent"
                  >ILI</strong
                >, and
                <strong class="heading-regular roboto-black-italic text-accent"
                  >SLI</strong
                >
              </div>
              <div style="text-align: center">
                Each of these types is also dynamic
              </div>
            </div>
            <ul
              class="roboto-regular pageTemperament__temperaments--type__list"
            >
              <li class="pageTemperament__temperaments--type__list--item">
                Relaxed
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Go-with-the-flow.
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Finds it easy to spend long periods of time in no activity, or
                at very low levels of energy.
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Movements are flexible and unhurried.
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Little inclination towards fidgetiness when having to remain
                inactive for longer periods
              </li>
            </ul>
            <div class="roboto-light">
              <p class="paragraph">
                IPs are both dynamic and irrational, so they see reality as in
                continuous, gradual, often imperceptible change. An IP is
                soothed by this, seeing reality through his leading function.
              </p>
              <p class="paragraph">
                This leads to a relaxed inclination to take things as they come
                and adapt to them. As introverts, IPs tend to be relaxed and
                somewhat passive about initiating relationships with other
                people, mostly assuming that others will take the initiative
              </p>
              <p class="paragraph">
                IPs value the ability to be prepared for one's present (Si) and
                future (Ni) environment. They look down upon others who appear
                to not be cognizant and adapted to either the present situation
                and/or impending future possibilities (e.g., an SLI questioning
                someone going outside in freezing temperatures without a coat
                on).
              </p>
              <p class="paragraph">
                Although this criticism can be leveled at any type (including
                other IPs), it is often directed at EJs, particularly the
                person's supervisee and conflictor
              </p>
            </div>
            <div class="heading-tertiary-sub-color roboto-medium text-accent">
              Perception of Other Temperaments
            </div>
            <div class="row">
              <div class="col" style="padding-top: 1rem">
                <div class="heading-tertiarySub roboto-black">EP</div>
                <p class="paragraph roboto-light">
                  IPs see EPs as
                  <strong style="color: #710da0" class="roboto-bold highlight-text"
                    >pleasantly energetic</strong
                  >
                  in an
                  <strong style="color: #710da0" class="roboto-bold highlight-text"
                    >unpredictable</strong
                  >
                  and therefore not boring way, also able to take for granted
                  variations in levels of energy in others
                </p>
              </div>
              <div class="col" style="padding-top: 1rem; padding-left: 2rem">
                <div class="heading-tertiarySub roboto-black">EJ</div>
                <p class="paragraph roboto-light">
                  IPs see EJs as
                  <strong style="color: #710da0" class="roboto-bold highlight-text"
                    >annoyingly pushy</strong
                  >
                  and insistent in their initiatives; they may respect their
                  energy levels but also wonder if they don't see that a lot of
                  that energy is spent wastefully to no good purpose
                </p>
              </div>
            </div>
            <div>
              <div class="heading-tertiarySub roboto-black">IJ</div>
              <p class="paragraph roboto-light">
                IPs see IJs as
                <strong style="color: #710da0" class="roboto-bold highlight-text"
                  >boring</strong
                >
                and too concerned with stability
              </p>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="ij"
          class="pageTemperament__temperaments--type column no-wrap"
        >
          <q-icon
            class="pageTemperament__temperaments--type__icon"
            name="fa-solid fa-scale-balanced"
            color="info"
            size="56px"
          />
          <div class="pageTemperament__temperaments--type text-center">
            <div class="pageTemperament__temperaments--sub-heading">
              <div
                class="pages-sub-head pages-sub-head--anim roboto-regular umtt"
              >
                IJ TEMPERAMENT
              </div>
              <br />
              <div
                class="pages-sub-head pages-sub-head--anim2 roboto-regular umbt"
              >
                BALANCED-STABLE
              </div>
            </div>
            <div class="paragraph roboto-light">
              <p>
                The IJ temperament, or balanced-stable temperament, was
                identified by Viktor Gulenko and includes the four
                <strong style="color: #3ca00d" class="roboto-bold highlight-text"
                  >Rational Introverts</strong
                >
                (one in each quadra)
              </p>
              <div
                class="roboto-regular-italic pages-sub-head--anim3"
                style="text-align: center; padding-bottom: 0.5rem"
              >
                <strong class="heading-regular roboto-black-italic text-info"
                  >LII</strong
                >,
                <strong class="heading-regular roboto-black-italic text-info"
                  >LSI</strong
                >,
                <strong class="heading-regular roboto-black-italic text-info"
                  >ESI</strong
                >, and
                <strong class="heading-regular roboto-black-italic text-info"
                  >EII</strong
                >
              </div>
              <div style="text-align: center">
                Each of these types is also static
              </div>
            </div>
            <ul
              class="roboto-regular pageTemperament__temperaments--type__list"
            >
              <li class="pageTemperament__temperaments--type__list--item">
                Calm, balanced, and inert.
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                "Unflappable"
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Rigid but not very fast gate.
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                May appear as passive-aggressive
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                More reactive than active
              </li>
              <li class="pageTemperament__temperaments--type__list--item">
                Little inclination to fidget during long periods of inactivity.
              </li>
            </ul>
            <div class="roboto-light">
              <p class="paragraph">
                An IJ draws inner stability from a stable reality, especially as
                seen through his leading function. That makes him confident that
                things will probably remain as they are despite what he sees as
                minor disturbances; periods of clear upheaval are very
                disturbing and the individual is anxious that things will
                "settle down" one way or the other soon enough.
              </p>

              <p class="paragraph">
                As introverts, IJs tend to be calm and relaxed about initiating
                relationships with other people, mostly assuming that others
                will take the initiative, but will be more inclined to try to
                make sure a relationship is maintained once established
              </p>
              <p class="paragraph">
                IJs place great importance on maintaining and consistently
                following one's own principles and rules. An IJ will judge
                another person very harshly if the IJ deems that person has not
                consistently followed his/her own principles. (Note that IJs do
                not necessary expect others to share their same values, and they
                are generally comfortable with others who have opposing
                viewpoints, as long as they are based on consistent reasoning.)
              </p>
              <p class="paragraph">
                If the IJ vocalizes this criticism, it will often be couched
                bluntly and unencumbered by diplomacy, as the offender's
                violation of principle(s) flies in the face of the IJs leading
                function, which dictates that one's actions be governed by
                his/her own principals. A severe enough violation, in the eyes
                of the IJ, may cause the IJ to question or even terminate the
                relationship with the other person.
              </p>
            </div>
            <div class="heading-tertiary-sub-color roboto-medium text-info">
              Perception of Other Temperaments
            </div>
            <div class="row">
              <div class="col" style="padding-top: 1rem">
                <div class="heading-tertiarySub roboto-black">EP</div>
                <p class="paragraph roboto-light">
                  IJs see EPs as
                  <strong style="color: #3ca00d" class="roboto-bold highlight-text"
                    >unreliable</strong
                  >, and too
                  <strong style="color: #3ca00d" class="roboto-bold highlight-text"
                    >unpredictable</strong
                  >
                  in their impulses and initiatives
                </p>
              </div>
              <div class="col" style="padding-top: 1rem; padding-left: 2rem">
                <div class="heading-tertiarySub roboto-black">EJ</div>
                <p class="paragraph roboto-light">
                  IJs see EJs as
                  <strong style="color: #3ca00d" class="roboto-bold highlight-text"
                    >pleasantly energetic</strong
                  >
                  and
                  <strong style="color: #3ca00d" class="roboto-bold highlight-text"
                    >willing</strong
                  >
                  to take the initiative and get things going in a balanced,
                  constant way
                </p>
              </div>
            </div>
            <div>
              <div class="heading-tertiarySub roboto-black">IP</div>
              <p class="paragraph roboto-light">
                IJs see IPs as
                <strong style="color: #3ca00d" class="roboto-bold highlight-text"
                  >unreliable</strong
                >
                and
                <strong style="color: #3ca00d" class="roboto-bold highlight-text"
                  >unwilling</strong
                >
                to take any initiative, with too low levels of energy
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
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref("ep"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?",
    };
  },
};
</script>
