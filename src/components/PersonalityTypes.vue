<template>
  <q-page class="ptypes">
    <q-card class="ptypes__card">
      <div class="ptypes__card--container">
        <q-card class="ptypes__card--container__infoCard pages-sub-head--anim2">
          <div class="ptypes__card--container__heading">
            <div
              class="heading-secondary2 roboto-bold-italic"
              style="letter-spacing: 0.2rem"
            >
              Sociotypes
            </div>
          </div>
          <div class="ptypes__card--container__infoCard--body">
            <div class="ptypes__card--container__infoCard--body__fundamentals">
              <p
                class="paragraph roboto-light u-center-text"
                style="font-size: 1.2rem"
              >
                The socion contains 16 socionics types (or sociotypes), each of
                which can be further divided into subtypes.
              </p>
              <p
                class="paragraph roboto-light u-center-text"
                style="font-size: 1.2rem"
              >
                Each sociotype represents a distinct and unique way of
                metabolizing information from the other sociotypes.
              </p>
              <p
                class="paragraph roboto-light u-center-text"
                style="font-size: 1.2rem"
              >
                A person only has one sociotype
              </p>
              <p
                class="paragraph roboto-light u-center-text"
                style="font-size: 1.2rem"
              >
                The sociotypes are organized by quadra
              </p>
            </div>
            <div>
              <div
                class="heading-tertiary--no-color roboto-medium-italic u-center-text"
              >
                Quadra
              </div>
              <div class="ptypes__card--container__infoCard--body__sociotypes">
                <!-- CAROUSEL -->
                <q-carousel
                  v-model="panel"
                  transition-next="fade"
                  transition-prev="fade"
                  animated
                  navigation
                  class="shadow-2 overflow-hidden"
                  control-color="primary"
                  style="
                    height: 850px;
                    margin-left: 6rem;
                    margin-right: 6rem;
                    margin-bottom: 2rem;
                    background-color: #f8f7ff;
                    border-radius: 8px;
                  "
                >
                  <q-carousel-slide class="column no-wrap" name="Alpha">
                    <q-card-section>
                      <div
                        class="ptypes__card--container__infoCard--body__sociotypes--alpha__header--icon"
                      >
                        α
                      </div>
                      <div
                        class="heading-dialogs roboto-regular"
                        style="padding-bottom: 1rem"
                      >
                        ALPHA
                      </div>
                      <div>
                        <div class="row">
                          <div
                            class="col"
                            style="padding-right: 1rem; padding-left: 1rem"
                          >
                            <div
                              class="roboto-black heading-regular"
                              style="text-align: left; padding-left: 4rem"
                            >
                              LII
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using introverted thinking as his base function
                                and extroverted intuition as his creative, the
                                LII is adept at creating a concept of reality
                                through the synthesis and application of
                                preformulated principles and rules
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                When formulating new principles, the LII
                                methodically analyzes new information, taking
                                the salient aspects and discarding the
                                extraneous
                              </p>
                            </div>
                          </div>
                          <div class="col" style="margin-left: 2rem">
                            <div style="">
                              <div
                                class="heading-regular roboto-black"
                                style="text-align: left; padding-left: 4rem"
                              >
                                ILE
                              </div>
                              <div>
                                <p
                                  class="paragraph roboto-light"
                                  style="font-size: 1.2rem; text-align: left"
                                >
                                  Using extroverted intuition as her base
                                  function and introverted thinking as her
                                  creative, the ILE is adept at generating a
                                  thousand solutions for the same problem
                                </p>
                                <p
                                  class="paragraph roboto-light"
                                  style="font-size: 1.2rem; text-align: left"
                                >
                                  Unlike the LII who is bound by the rules he
                                  follows, the ILE sees these same rules as
                                  flexible and enabling--they can be altered and
                                  adjusted to enable every new idea the ILE
                                  conceives
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div
                            class="col"
                            style="padding-right: 1rem; padding-left: 1rem"
                          >
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              ESE
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using extroverted feeling as her base function
                                and introverted sensing as her creative, the ESE
                                is adept at understanding people's emotional
                                needs, and she often responds to these needs
                                through comforting words and actions
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Driven by a desire for harmony and perfection in
                                her life, the ESE uses her emotional acuity to
                                strengthen and solidify the relationships with
                                the people she cares about in her life
                              </p>
                            </div>
                          </div>
                          <div class="col" style="margin-left: 2rem">
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              SEI
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using introverted sensing as her base function
                                and extroverted intuition as her creative, the
                                SEI excels at creatively applying her
                                introverted sensing to improve the mood of those
                                around her
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                As with the ESE, the SEI is in tune with
                                people's emotional states and seeks to mitigate
                                conflict and encourage a harmonious atmosphere
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-carousel-slide>
                  <q-carousel-slide class="column no-wrap" name="Beta">
                    <q-card-section>
                      <div
                        class="ptypes__card--container__infoCard--body__sociotypes--alpha__header--icon"
                      >
                        β
                      </div>
                      <div
                        class="heading-dialogs roboto-regular"
                        style="padding-bottom: 1rem"
                      >
                        BETA
                      </div>
                      <div>
                        <div class="row">
                          <div
                            class="col"
                            style="padding-right: 2rem; padding-left: 1rem"
                          >
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              LSI
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using introverted thinking as his base function
                                and extroverted sensing as his creative, the LSI
                                excels at formulating systems of the world that
                                can be practically utilized
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                The LSI has a strong understanding of the
                                strengths and weaknesses of a system and can
                                manipulate either to his advantage
                              </p>
                            </div>
                          </div>
                          <div class="col" style="margin-left: 2rem">
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              SLE
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using extroverted sensing as her base function
                                and introverted thinking as her creative, the
                                SLE always has an immediate and noticeable
                                impact on the world around her
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                In making decisions, the SLE follows logical
                                rules like her mirror the LSI, but unlike the
                                LSI, these rules are adjustable to fit each new
                                situation
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div
                            class="col"
                            style="padding-right: 2rem; padding-left: 1rem"
                          >
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              EIE
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using extroverted feeling as his base function
                                and introverted intuition as his creative, the
                                EIE excels at understanding people's strengths
                                and potential
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                By intstinctively picking up on people's
                                emotional states, the EIE can often accurately
                                judge the psychological distance between a group
                                of people
                              </p>
                            </div>
                          </div>
                          <div class="col" style="margin-left: 2rem">
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              IEI
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using introverted intuition as her base function
                                and extroverted feeling as his creative, the IEI
                                lives in a world of vivid imagery and
                                imagination
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Like the SEI, the IEI is a very creative type
                                and is often seen channelling this creativity
                                towards artistic pursuits such as music. However
                                the two types' creativities diverge with the
                                SEI's creativities channeled towards more
                                tangible creations and the IEI's channeled
                                towards more intangible creations--e.g., the
                                creation of imaginary worlds or stories
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-carousel-slide>
                  <q-carousel-slide class="column no-wrap" name="Gamma">
                    <q-card-section>
                      <div
                        class="ptypes__card--container__infoCard--body__sociotypes--alpha__header--icon"
                      >
                        γ
                      </div>
                      <div
                        class="heading-dialogs roboto-regular"
                        style="padding-bottom: 1rem"
                      >
                        GAMMA
                      </div>
                      <div>
                        <div class="row">
                          <div
                            class="col"
                            style="padding-right: 2rem; padding-left: 1rem"
                          >
                            <div
                              class="heading-regular roboto-black"
                              style="padding-left: 4rem; text-align: left"
                            >
                              ESI
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using introverted feeling as her base function
                                and extroverted sensing as her creative, the ESI
                                easily distinguishes right from wrong, just from
                                injust, and/or appropriate from inappropriate
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                She provides a strong foundation for those
                                around her and is not easily swayed from her
                                beliefs
                              </p>
                            </div>
                          </div>
                          <div class="col" style="margin-left: 2rem">
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              SEE
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using extroverted sensing as her base function
                                and introverted feeling as her creative, the SEE
                                seeks to have a lasting impact on those around
                                her
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div
                            class="col"
                            style="padding-right: 2rem; padding-left: 1rem"
                          >
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              LIE
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using extroverted thinking as his base function
                                and introverted intuition as his creative, the
                                LIE has an amazing ability at not only
                                predicting future trends, but also understanding
                                what is necessary to make these future trends
                                profitable
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                The SEE is a distinctly social type and she
                                thrives in environments where social interaction
                                is ubiquitous
                              </p>
                            </div>
                          </div>
                          <div class="col" style="margin-left: 2rem">
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              ILI
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using introverted intuition as his base function
                                and extroverted thinking as his creative, the
                                ILI is capable of deep and vivid imagery as well
                                as the ability to analyze the correctness of
                                conclusions
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                The LIE has an innate understanding of the most
                                valuable use of capital and labor, and has the
                                energy and drive to align these tools to
                                achieving his goals
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-carousel-slide>
                  <q-carousel-slide class="column no-wrap" name="Delta">
                    <q-card-section>
                      <div
                        class="ptypes__card--container__infoCard--body__sociotypes--alpha__header--icon"
                      >
                        δ
                      </div>
                      <div
                        class="heading-dialogs roboto-regular"
                        style="padding-bottom: 1rem"
                      >
                        DELTA
                      </div>
                      <div>
                        <div class="row">
                          <div
                            class="col"
                            style="padding-right: 1rem; padding-left: 1rem"
                          >
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              SLI
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using introverted sensing as his base function
                                and extroverted thinking as his creative, the
                                SLI is immersed in his senses and has a strong
                                understanding of both the design and functional
                                aspects of objects
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Much like the SEI, the SLI is highly in tune
                                with the effect his surrounding environment can
                                have on his and others' senses. This, coupled
                                with his ability to assess factual information,
                                makes him an ideal candidate for matters of
                                design and function.
                              </p>
                            </div>
                          </div>
                          <div class="col" style="margin-left: 2rem">
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              IEE
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using extroverted intuition as his base function
                                and introverted feeling as his creative, the IEE
                                is adept at generating new possibilities,
                                particularly those that relate to human
                                interaction
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Like the ILE, the IEE absorbs and comprehends
                                new concepts with amazing speed. However it
                                should be noted that the IEE relies on his
                                personal observations as a foundation for his
                                conceptual understanding; he bases all his
                                theoretical frameworks on what he has observerd
                                in the real world
                              </p>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div
                            class="col"
                            style="padding-right: 1rem; padding-left: 1rem"
                          >
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              LSE
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using extroverted thinking as his base function
                                and introverted sensing as his creative, the LSE
                                excels at identifying methods and tools that can
                                improve one's efficiency and productivity
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                This understanding, coupled with the LSE's high
                                energy levels and generally strong work ethic,
                                makes him a very productive individual
                              </p>
                            </div>
                          </div>
                          <div class="col" style="margin-left: 2rem">
                            <div
                              class="heading-regular roboto-black"
                              style="text-align: left; padding-left: 4rem"
                            >
                              EII
                            </div>
                            <div>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                Using introverted feeling as her base function
                                and extroverted intuition as her creative, the
                                EII is adept at understanding people's internal
                                drive and motivation
                              </p>
                              <p
                                class="paragraph roboto-light"
                                style="font-size: 1.2rem; text-align: left"
                              >
                                She often acts reserved, respectful, and polite
                                around others she does not know well but will
                                eventually open up more
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-carousel-slide>
                </q-carousel>
                <!-- END CAROUSEL -->
              </div>
            </div>
          </div>
          <div>
            <div
              class="heading-tertiary--no-color roboto-medium-italic u-center-text"
            >
              Components of Personality
            </div>
          </div>
          <q-card-section class="row" style="height: 1150px">
            <!-- CLUB -->
            <div
              class="col shadow-4 overflow-hidden ptypes__card--container__infoCard"
              style="
                background-color: #f8f7ff;
                border-radius: 15px;
                margin: 0.5rem;
                padding-left: 0.6rem;
                padding-right: 0.6rem;
              "
            >
              <div>
                <div
                  class="heading-tertiary-sub roboto-medium-italic"
                  style="padding-top: 0.8rem"
                >
                  Club
                </div>
              </div>
              <i
                style="
                  font-size: 2rem;
                  padding-top: 0.3rem;
                  padding-bottom: 0.3rem;
                "
                class="fa-solid fa-people-group"
              ></i>
              <div>
                <p
                  class="roboto-medium-italic"
                  style="font-size: 1.3rem; padding-top: 0.5rem"
                >
                  The 4 Clubs
                </p>
                <ul
                  class="col ptypes__card--container__infoCard--list roboto-regular"
                >
                  <li
                    class="heading-regular--sub roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    Researchers
                  </li>
                  <p style="font-size: 1.2rem">
                    Intuitive & Logical (<strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >NT</strong
                    >) or
                    <strong
                      class="heading-regular--tiny-no-space highlight-text roboto-black"
                      style="color: #0d85a0"
                      >ILE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space highlight-text roboto-black"
                      style="color: #0d85a0"
                      >ILI</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space highlight-text roboto-black"
                      style="color: #0d85a0"
                      >LIE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space highlight-text roboto-black"
                      style="color: #0d85a0"
                      >LII</strong
                    >
                  </p>
                  <li
                    class="heading-regular--sub roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    Humanitarians
                  </li>
                  <p style="font-size: 1.2rem">
                    Intuitive & Ethical (<strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >NF</strong
                    >) or
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >IEE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >IEI</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >EIE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >EII</strong
                    >
                  </p>
                  <li
                    class="heading-regular--sub roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    Socials
                  </li>
                  <p style="font-size: 1.2rem">
                    Sensing & Ethical (<strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >SF</strong
                    >) or
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >SEE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >SEI</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >ESE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >ESI</strong
                    >
                  </p>
                  <li
                    class="heading-regular--sub roboto-black"
                    style="padding-bottom: 0.2rem; letter-spacing: 0.05rem"
                  >
                    Pragmatists
                  </li>
                  <p style="padding-bottom: 0.5rem; font-size: 1.2rem">
                    Sensing & Logical (<strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >ST</strong
                    >) or
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >SLE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >SLI</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >LSE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >LSI</strong
                    >
                  </p>
                </ul>
                <div>
                  <p
                    class="roboto-light"
                    style="
                      font-size: 1.2rem;
                      text-align: left;
                      padding-left: 1vw;
                    "
                  >
                    Clubs are a small group of four types that share the same
                    two traits on the intuition / sensing and logic / ethics
                    dichotomies. They are also often called "occupational
                    attitudes."
                  </p>
                  <p
                    class="roboto-light"
                    style="
                      font-size: 1.2rem;
                      text-align: left;
                      padding-left: 1vw;
                    "
                  >
                    The same four relations exist between the types of any club:
                    identity, mirror, extinguishment/contrary, and
                    quasi-identity.
                  </p>
                  <p
                    class="roboto-light"
                    style="
                      font-size: 1.2rem;
                      text-align: left;
                      padding-left: 1vw;
                    "
                  >
                    Club-based groups, however, are merely the common interests
                    and activities; the clubs tend to cease to function as any
                    unit as soon as the interactions between their members move
                    beyond those common interests and activities, when the
                    quadra interactions will naturally take over.
                  </p>
                </div>
                <div>
                  <q-btn
                    class="shadow-3 btn btn--primary roboto-black"
                    to="/club"
                    style="margin-top: 3.8rem; font-size: 1.2rem"
                    >Discover Clubs
                  </q-btn>
                </div>
              </div>
            </div>
            <div
              class="col shadow-4 overflow-hidden"
              style="
                background-color: #f8f7ff;
                border-radius: 15px;
                margin: 0.5rem;
                padding-left: 0.6rem;
                padding-right: 0.6rem;
              "
            >
              <!-- ROMANCE STYLE -->
              <div class="ptypes__card--container__infoCard--heading">
                <div
                  class="heading-tertiary-sub roboto-medium-italic"
                  style="padding-top: 0.8rem"
                >
                  Romance Style
                </div>
              </div>
              <i
                style="
                  font-size: 2rem;
                  padding-top: 0.3rem;
                  padding-bottom: 0.3rem;
                "
                class="fa-solid fa-hand-holding-heart"
              ></i>
              <div>
                <p
                  class="roboto-medium-italic"
                  style="font-size: 1.3rem; padding-top: 0.5rem"
                >
                  The 4 Romance Styles
                </p>
                <ul
                  class="ptypes__card--container__infoCard--list roboto-regular"
                >
                  <li
                    class="heading-regular--sub roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    Aggressor
                  </li>
                  <p style="font-size: 1.2rem">
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >Se</strong
                    >
                    in the ego block:
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >LSI</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >SLE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >ESI</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space highlight-text"
                      style="color: #0d85a0"
                      >SEE</strong
                    >
                  </p>
                  <li
                    class="heading-regular--sub roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    Victim
                  </li>
                  <p style="font-size: 1.2rem">
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >Ni</strong
                    >
                    in the ego block:
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >EIE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >IEI</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >LIE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >ILI</strong
                    >
                  </p>
                  <li
                    class="heading-regular--sub roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    Caregiver
                  </li>
                  <p style="font-size: 1.2rem">
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >Si</strong
                    >
                    in the ego block:
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >ESE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >SEI</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >LSE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >SLI</strong
                    >
                  </p>
                  <li
                    class="heading-regular--sub roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    Infantile
                  </li>
                  <p style="padding-bottom: 0.5rem; font-size: 1.2rem">
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >Ne</strong
                    >
                    in the ego block:
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >ILE</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >LII</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >EII</strong
                    >,
                    <strong
                      class="heading-regular--tiny-no-space roboto-black highlight-text"
                      style="color: #0d85a0"
                      >IEE</strong
                    >
                  </p>
                </ul>
                <div>
                  <p
                    class="roboto-light"
                    style="
                      font-size: 1.2rem;
                      text-align: left;
                      padding-left: 1vw;
                    "
                  >
                    Viktor Gulenko has proposed four groups of romance styles,
                    also referred to as "erotic behavior" groups or "erotic
                    attitudes." Gulenko's approach was to find common ground
                    between types of different quadras
                  </p>
                  <p
                    class="roboto-light"
                    style="
                      font-size: 1.2rem;
                      text-align: left;
                      padding-left: 1vw;
                    "
                  >
                    The greatest degree of compatibility in that area is between
                    dual pairs. Gulenko's romance styles are defined by the
                    irrational element in the individual's Ego functions
                  </p>
                  <p
                    class="roboto-light"
                    style="
                      font-size: 1.2rem;
                      text-align: left;
                      padding-left: 1vw;
                    "
                  >
                    "Romance styles" refer specifically to romantic/sexual
                    interaction -- displaying physical attraction, interest, and
                    desire, present in romantic relationships. These styles
                    apply much less to relationships between friends or business
                    partners
                  </p>
                </div>
                <div>
                  <q-btn
                    class="shadow-3 btn btn--analogous-2 roboto-black"
                    to="/romstyle"
                    style="margin-top: 2rem; font-size: 1.2rem"
                    >Romance Styles
                  </q-btn>
                </div>
              </div>
            </div>
            <div
              class="col shadow-4 overflow-hidden"
              style="
                background-color: #f8f7ff;
                border-radius: 15px;
                margin: 0.5rem;
                padding-left: 0.6rem;
                padding-right: 0.6rem;
              "
            >
              <!-- TEMPERAMENT -->
              <div class="ptypes__card--container__infoCard--heading">
                <div
                  class="heading-tertiary-sub roboto-medium-italic"
                  style="padding-top: 0.8rem"
                >
                  Temperament
                </div>
              </div>
              <i
                style="
                  font-size: 2rem;
                  padding-top: 0.3rem;
                  padding-bottom: 0.3rem;
                "
                class="fa-solid fa-mountain-sun"
              ></i>
              <div>
                <p
                  class="roboto-medium-italic"
                  style="font-size: 1.3rem; padding-top: 0.5rem"
                >
                  The 4 Temperaments
                </p>
                <ul
                  class="ptypes__card--container__infoCard--list roboto-regular"
                >
                  <li
                    class="heading-regular--tiny roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    <strong class="highlight-text">EP</strong>
                    <q-tooltip
                      transition-show="flip-right"
                      transition-hide="rotate"
                      anchor="top middle"
                      self="bottom middle"
                      :offset="[10, 10]"
                      style="font-size: 1.1rem"
                    >
                      <strong>Extraverted</strong>
                      &nbsp;<em>Percieving</em>
                    </q-tooltip>
                  </li>
                  <p style="font-size: 1.2rem">
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >Flexible</strong
                    >
                    Maneuvering
                  </p>
                  <li
                    class="heading-regular--tiny roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    <strong class="highlight-text">EJ</strong>
                    <q-tooltip
                      transition-show="flip-right"
                      transition-hide="rotate"
                      anchor="top middle"
                      self="bottom middle"
                      :offset="[10, 10]"
                      style="font-size: 1.1rem"
                    >
                      <strong>Extraverted</strong> <em>Judging</em>
                    </q-tooltip>
                  </li>
                  <p style="font-size: 1.2rem">
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >Linear</strong
                    >
                    Assertive
                  </p>
                  <li
                    class="heading-regular--tiny roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    <strong class="highlight-text">IP</strong>
                    <q-tooltip
                      transition-show="flip-right"
                      transition-hide="rotate"
                      anchor="top middle"
                      self="bottom middle"
                      :offset="[10, 10]"
                      style="font-size: 1.1rem"
                    >
                      <strong>Introverted</strong> <em>Percieving</em>
                    </q-tooltip>
                  </li>
                  <p style="font-size: 1.2rem">
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >Receptive</strong
                    >
                    Adaptive
                  </p>
                  <li
                    class="heading-regular--tiny roboto-black"
                    style="padding-bottom: 0.2rem"
                  >
                    <strong class="highlight-text">IJ</strong>
                    <q-tooltip
                      transition-show="flip-right"
                      transition-hide="rotate"
                      anchor="top middle"
                      self="bottom middle"
                      :offset="[10, 10]"
                      style="font-size: 1.1rem"
                    >
                      <strong>Introverted</strong> <em>Judging</em>
                    </q-tooltip>
                  </li>
                  <p style="padding-bottom: 0.5rem; font-size: 1.2rem">
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >Balanced</strong
                    >
                    Stable
                  </p>
                </ul>
                <div>
                  <p
                    class="roboto-light"
                    style="
                      font-size: 1.2rem;
                      text-align: left;
                      padding-left: 1vw;
                    "
                  >
                    The most well-known temperament system was introduced by
                    Viktor Gulenko and puts the 16 types into four groups that
                    share the same two traits of the extroversion / introversion
                    and irrational / rational dichotomies
                  </p>
                  <p
                    class="roboto-light"
                    style="
                      font-size: 1.2rem;
                      text-align: left;
                      padding-left: 1vw;
                    "
                  >
                    It should be noted that temperament in socionics has taken
                    on a different meaning than in psychology. Compared to vague
                    and abstract socionic concepts of temperament, temperament
                    in psychology is defined more exactly, allowing for better
                    empirical study
                  </p>
                  <p
                    class="roboto-light"
                    style="
                      font-size: 1.2rem;
                      text-align: left;
                      padding-left: 1vw;
                    "
                  >
                    Nevertheless, socionic temperaments can play an important
                    role in recognizing similarities between types that are all
                    in different quadras and clubs
                  </p>
                </div>
                <div>
                  <q-btn
                    class="shadow-3 btn btn--accent roboto-black"
                    to="/temperament"
                    style="margin-top: 2rem; font-size: 1.2rem"
                    >Temperaments
                  </q-btn>
                </div>
              </div>
            </div>
          </q-card-section>

          <q-card-section>
            <div
              class="heading-tertiary--no-color roboto-medium-italic umbs umts"
            >
              The 16 Sociotypes
            </div>
            <q-carousel
              v-model="type"
              transition-prev="jump-right"
              transition-next="jump-left"
              arrows
              swipeable
              animated
              padding
              elevated
              control-color="primary"
              height="1100px"
              class="ptypes__card--container__types--carousel shadow-2 overflow-hidden rounded-borders roboto-light"
            >
              <q-carousel-slide
                class="column no-wrap flex-center shadow-2 ptypes__card--container__types--items"
                v-for="type in state.personalities"
                :key="type.id"
                :name="type.PersonalityType"
              >
                <div class="">
                  <div class="ptypes__card--container__types--icon">
                    <q-spinner-gears color="primary" style="font-size: 4rem" />
                  </div>
                  <q-item class="ptypes__card--container__types--items__type">
                    <q-item-section>
                      <div
                        class="heading-regular roboto-black"
                        style="color: #71095e"
                      >
                        {{ type.PersonalityType }}
                      </div>

                      <q-tooltip
                        transition-show="flip-right"
                        transition-hide="rotate"
                        anchor="top middle"
                        self="bottom middle"
                        :offset="[10, 10]"
                        style="font-size: 1.1rem"
                      >
                        <strong>{{ type.AlsoKnownAs }}</strong>
                      </q-tooltip>
                    </q-item-section>
                    <q-item-section>
                      <div>
                        <strong
                          class="heading-regular--sub roboto-black"
                          style="color: #71095e"
                          >{{ type.AKA }}</strong
                        >
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item class="ptypes__card--container__types--items__type">
                    <q-item-section>
                      <div
                        style="
                          color: #092a71;
                          letter-spacing: 0.1rem;
                          font-size: 1.3rem;
                        "
                      >
                        <strong class="roboto-black">{{ type.Acronym }}</strong>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item class="ptypes__card--container__types--items__type">
                    <q-item-section>
                      <div
                        class="heading-regular--sub roboto-black"
                        style="color: #092a71"
                      >
                        {{ type.Nickname }}
                      </div>
                    </q-item-section>
                  </q-item>
                  <br />
                  <q-item
                    class="ptypes__card--container__types--items__type"
                    style="padding-top: 1rem; padding-bottom: 1rem"
                  >
                    <q-item-section>
                      <div>
                        <q-item-label
                          style="padding-bottom: 0.2rem"
                          class="heading-regular--tiny roboto-bold"
                          >Quadra</q-item-label
                        >
                        <q-tooltip
                          transition-show="flip-right"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem"
                        >
                          Values
                          <strong>{{ type.QuadraText }}</strong> Information
                          Elements
                        </q-tooltip>
                      </div>
                      <div>
                        {{ type.Quadra }}
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <div>
                        <q-item-label
                          style="padding-bottom: 0.2rem"
                          class="heading-regular--tiny roboto-bold"
                          >Club</q-item-label
                        >
                        <q-tooltip
                          transition-show="flip-right"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem"
                        >
                          <strong>{{ type.ClubText }}</strong>
                        </q-tooltip>
                      </div>
                      <div>
                        {{ type.Club }}
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <div>
                        <q-item-label
                          style="padding-bottom: 0.2rem"
                          class="heading-regular--tiny roboto-bold"
                          >Romance Style</q-item-label
                        >
                        <q-tooltip
                          transition-show="flip-right"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem"
                        >
                          Sociotypes with <strong>{{ type.RomText }}</strong>
                        </q-tooltip>
                      </div>
                      <div>
                        {{ type.RomanceStyle }}
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <div>
                        <q-item-label
                          style="padding-bottom: 0.2rem"
                          class="heading-regular--tiny roboto-bold"
                          >Temperament</q-item-label
                        >
                        <q-tooltip
                          transition-show="flip-right"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem"
                        >
                          <strong>{{ type.TempText }}</strong>
                        </q-tooltip>
                      </div>
                      <div>
                        {{ type.Temperament }}
                      </div>
                    </q-item-section>
                  </q-item>
                  <br />
                  <q-item class="ptypes__card--container__types--items__type">
                    <q-item-section>
                      <div>
                        <q-item-label class="heading-regular--tiny roboto-bold"
                          >Leading</q-item-label
                        >
                        <q-tooltip
                          transition-show="fade"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem; width: 26vw"
                        >
                          The program, base, or leading function
                          <strong>directs</strong> the
                          <strong>global perception</strong> and general
                          lifestyle of a person i.e. it constitutes the
                          “program” for a person’s life.
                        </q-tooltip>
                      </div>
                      <div class="text-primary roboto-medium">
                        {{ type.Leading }}
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <div>
                        <q-item-label class="heading-regular--tiny roboto-bold"
                          >Creative</q-item-label
                        >
                        <q-tooltip
                          transition-show="fade"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem; width: 26vw"
                        >
                          A <strong>strong, conscious</strong> function that is
                          <strong>flexible</strong> but does not have an
                          “integrated and complete” picture of the world, but
                          rather considers different options available in a
                          given situation with the goal of finding an
                          appropriate solution for the situation that is
                          satisfactory and supports the person’s base function.
                        </q-tooltip>
                      </div>
                      <div class="text-primary roboto-medium">
                        <div>{{ type.Creative }}</div>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item class="ptypes__card--container__types--items__type">
                    <q-item-section>
                      <div>
                        <q-item-label class="heading-regular--tiny roboto-bold"
                          >Role</q-item-label
                        >
                        <q-tooltip
                          transition-show="fade"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem; width: 26vw"
                        >
                          A sufficiently <strong>flexible</strong>, contact, yet
                          <strong>weak</strong> function. It may be called the
                          “reserve” function, because it comes to aid when the
                          possibilities and capabilities of base and creative
                          functions are insufficient and in new situations when
                          a person needs to be receptive of all kinds of
                          information.
                        </q-tooltip>
                      </div>
                      <div class="text-accent roboto-medium">
                        <div>{{ type.Role }}</div>
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <div>
                        <q-item-label class="heading-regular--tiny roboto-bold"
                          >Vulnerable</q-item-label
                        >
                        <q-tooltip
                          transition-show="fade"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem; width: 26vw"
                        >
                          Also called the
                          <strong>point of least resistance</strong>, is the
                          most problematic of all socionics functions. This
                          function is the weakest of the conscious functions,
                          and its related aspects are often interpreted by a
                          person as a significant personal issue or defect
                        </q-tooltip>
                      </div>
                      <div class="text-accent roboto-medium">
                        <div>{{ type.Vulnerable }}</div>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item class="ptypes__card--container__types--items__type">
                    <q-item-section>
                      <div>
                        <q-item-label class="heading-regular--tiny roboto-bold"
                          >Suggestive</q-item-label
                        >
                        <q-tooltip
                          transition-show="fade"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem; width: 26vw"
                        >
                          Information received on this function is not subjected
                          to much critical thinking and independent evaluation
                          by a person and information relayed on suggestive
                          aspect does not cause rejection, discomfort, and
                          tiredness, but conversely this information evokes
                          appreciation and trust and is received by a person as
                          something very valuable and important.
                        </q-tooltip>
                      </div>
                      <div>
                        <div class="roboto-medium" style="color: #0d85a0">
                          {{ type.Suggestive }}
                        </div>
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <div>
                        <q-item-label class="heading-regular--tiny roboto-bold"
                          >Mobilizing</q-item-label
                        >
                        <q-tooltip
                          transition-show="fade"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem; width: 26vw"
                        >
                          Known as the <strong>Activating</strong> function and
                          is is another weak valued function on which a person
                          willingly receives help and support of others.
                          Information relayed on this aspects gets partial
                          critical evaluation and is checked against some
                          internal standards and notions to determine whether
                          this information is acceptable to the individual and
                          should be accepted or rejected.
                        </q-tooltip>
                      </div>
                      <div>
                        <div class="roboto-medium" style="color: #0d85a0">
                          {{ type.Mobilizing }}
                        </div>
                      </div>
                    </q-item-section>
                  </q-item>
                  <q-item
                    class="ptypes__card--container__types--items__type"
                    style="padding-bottom: 20px"
                  >
                    <q-item-section>
                      <div>
                        <q-item-label class="heading-regular--tiny roboto-bold"
                          >Ignoring</q-item-label
                        >
                        <q-tooltip
                          transition-show="fade"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem; width: 26vw"
                        >
                          Known as the <strong>limiting</strong> function and s
                          a strong function that directs its activity at
                          observing what one should not do, how one should not
                          act, warning one’s partner about the potential
                          consequences, recommending possible courses of action
                          to help one’s partner to overcome a negative
                          situation.
                        </q-tooltip>
                      </div>
                      <div>
                        <div class="roboto-medium" style="color: #092a71">
                          {{ type.Ignoring }}
                        </div>
                      </div>
                    </q-item-section>
                    <q-item-section>
                      <div>
                        <q-item-label class="heading-regular--tiny roboto-bold"
                          >Demonstrative</q-item-label
                        >
                        <q-tooltip
                          transition-show="fade"
                          transition-hide="rotate"
                          anchor="top middle"
                          self="bottom middle"
                          :offset="[10, 10]"
                          style="font-size: 1.1rem; width: 26vw"
                        >
                          Another strong function that is directed at not
                          allowing the situation to develop in a negative way
                          for oneself and for one’s partner.
                        </q-tooltip>
                      </div>
                      <div>
                        <div class="roboto-medium" style="color: #092a71">
                          {{ type.Demonstrative }}
                        </div>
                      </div>
                    </q-item-section>
                  </q-item>
                  <div>
                    <q-item class="ptypes__card--container__types--items__type">
                      <q-item-section>
                        <q-item-label
                          class="heading-regular--tiny roboto-bold"
                          style="padding-bottom: 1rem"
                          >Summary</q-item-label
                        >
                        <div>
                          {{ type.Description }}
                        </div>
                      </q-item-section>
                    </q-item>
                    <div
                      class="ptypes__card--container__types--items__btn-container"
                    >
                      <q-btn
                        outline
                        rounded
                        class="ptypes__card--container__types--items__btn-container--btn-round"
                        label="Type in Depth"
                        @click="chooseType(type.id)"
                      />
                    </div>
                  </div>
                </div>
              </q-carousel-slide>
            </q-carousel>
          </q-card-section>
        </q-card>
      </div>
    </q-card>
  </q-page>
  <q-page-sticky
    class="sticky-scroll"
    position="bottom-right"
    :offset="[12, 22]"
  >
    <q-btn
      fab
      icon="keyboard_arrow_up"
      class="sticky-scroll__btn text-white"
      style="background-color: #092a71"
      @click="goToTop()"
    />
  </q-page-sticky>

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
</template>

<style>
@import "primeicons/primeicons.css";
</style>

<script>
import { reactive, onMounted, ref } from "vue";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "src/firebase";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const personalityCollectionRef = collection(db, "PersonalityType");
    const personalityCollectionQuery = query(personalityCollectionRef);

    onMounted(() => {
      loadPersonalities();
    });

    let state = reactive({
      status: "",
      personalities: [],
      details: [],
      selectedPersonality: [],
      selectedPersonalityId: "",
      sessionStorage,
      selectedAPersonality: false,
    });

    const goToTop = () => {
      window.scrollTo(0, 0);
    };

    const loadPersonalities = async () => {
      try {
        state.status = "Loading Personality Types ...";
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
              QuadraText: doc.data().QuadraText,
              Club: doc.data().Club,
              ClubText: doc.data().ClubText,
              Temperament: doc.data().Temperament,
              TempText: doc.data().TempText,
              RomanceStyle: doc.data().RomanceStyle,
              RomText: doc.data().RomText,
              Leading: doc.data().Leading,
              Creative: doc.data().Creative,
              Role: doc.data().Role,
              Vulnerable: doc.data().Vulnerable,
              Suggestive: doc.data().Suggestive,
              Mobilizing: doc.data().Mobilizing,
              Ignoring: doc.data().Ignoring,
              Demonstrative: doc.data().Demonstrative,
              Description: doc.data().Description,
              Subtype1: doc.data().Subtype1,
              Subtype2: doc.data().Subtype2,
            };
            fbPersonality.push(personality);
          });
          // assign loaded todos to the todo array ref
          state.personalities = fbPersonality;
          state.status = `${state.personalities.length} Personality Types Discovered`;
        });
      } catch (err) {
        console.log(err);
        state.status = `Error has Occured: ${err.message}`;
      }
    };

    const loadPersonalityType = async (personalityid) => {
      try {
        state.selectedPersonality = state.personalities.find(
          (personalityType) =>
            personalityType.id === state.selectedPersonalityId
        );
      } catch (err) {
        console.log(err);
        state.status = `Error has Occured: ${err.message}`;
      }
    };

    const chooseType = async (typeId) => {
      try {
        state.selectedAPersonality = true;
        state.selectedPersonality = state.personalities.find(
          (personalityType) => personalityType.id === typeId
        );
        let path = "/" + state.selectedPersonality.PersonalityType;
        router.push(path);
      } catch (error) {
        console.log(error);
        state.status = `Error has occurred: ${error.message}`;
      }
    };

    return {
      state,
      loadPersonalityType,
      type: ref("LIE"),
      pos: ref("top"),
      panel: ref("Alpha"),
      chooseType,
      goToTop,
    };
  },
};
</script>
