<template>
  <q-page class="soci-dichotomies">
    <q-card class="soci-dichotomies__card pages-sub-head--anim2">
      <div class="u-center-text u-margin-bottom-small">
        <h2 class="heading-secondary2 roboto-bold-italic u-margin-top-small">
          Socionics Dichotomies
        </h2>
      </div>
      <div class="soci-dichotomies__card--content">
        <q-tabs
          v-model="firstTab"
          class="roboto-black"
          active-color="primary"
          content-class="soci-dichotomies__card--content__tab"
          indicator-color="secondary"
          align="justify"
        >
          <q-tab name="Introvert | Extrovert" label="Introvert | Extrovert" />
          <q-tab name="Intuitive | Sensing" label="Intuitive | Sensing" />
          <q-tab name="Logical | Ethical" label="Logical | Ethical" />
          <q-tab name="Rational | Irrational" label="Rational | Irrational" />
          <q-tab name="Static | Dynamic" label="Static | Dynamic" />
          <q-tab
            name="Democratic | Aristocratic"
            label="Democratic | Aristocratic"
          />
          <q-tab
            name="Emotivist | Constructivist"
            label="Emotivist | Constructivist"
          />
          <q-tab name="Judicious | Decisive" label="Judicious | Decisive" />
          <q-tab name="Serious | Merry" label="Serious | Merry" />
        </q-tabs>
        <q-separator />
        <div class="u-center-text">
          <div class="heading-tertiary roboto-medium umts">
            Dichotomies in Depth
          </div>
        </div>
        <q-tab-panels class="roboto-regular" v-model="firstTab" animated>
          <q-tab-panel name="Introvert | Extrovert">
            <div class="row">
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Introvert
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p class="roboto-regular">
                    A focus on the observer's response to and perception of
                    objects
                  </p>
                  <p class="roboto-regular">
                    Psychic
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >energy</strong
                    >
                    more often
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >flows inwards</strong
                    >
                  </p>
                  <p class="roboto-regular">
                    Energy levels
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >increase</strong
                    >
                    when
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >alone</strong
                    >
                  </p>
                  <p class="roboto-regular">
                    Energy levels
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >decrease</strong
                    >
                    interacting with
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >large groups</strong
                    >
                  </p>
                  <p class="roboto-regular">
                    Generally have lower energy levels
                  </p>
                  <p class="roboto-regular">
                    More often
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >focused</strong
                    >
                    on their
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >thoughts</strong
                    >
                    &
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >feelings</strong
                    >
                  </p>
                  <p class="roboto-regular">Better at concentrating</p>
                  <p class="roboto-regular">Prefer to work alone</p>
                </div>
              </q-card>
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Extravert
                </li>
                <div
                  class="soci-dichotomies__card--content__list--item__text roboto-regular"
                >
                  <p>
                    A perceptual quality defined by a focus on the
                    characteristics and behavior of objects (people, things,
                    events) outside the observer
                  </p>
                  <p>
                    Psychic
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >energy</strong
                    >
                    more often
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >flows outwards</strong
                    >
                  </p>
                  <p>
                    Energy levels
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >decrease</strong
                    >
                    when
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >alone</strong
                    >
                  </p>
                  <p>
                    Energy levels
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >increase</strong
                    >
                    interacting with
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >large groups</strong
                    >
                  </p>
                  <p>Generally have higher energy levels</p>
                  <p>
                    More often
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >focused</strong
                    >
                    on their
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >surroundings</strong
                    >
                  </p>
                  <p>Better at presenting themselves</p>
                  <p>Prefer to work in a team</p>
                </div>
              </q-card>
              <p
                class="paragraph roboto-regular"
                style="
                  padding-top: 3rem;
                  padding-left: 4rem;
                  padding-right: 1.5rem;
                "
              >
                Augusta likened the difference between extraverted and
                introverted perception to the difference between bodies and
                fields in physics. <strong>"Bodies"</strong> are objects with
                mass and certain qualities, while <strong>"fields"</strong> are
                the realm of interaction between bodies.
              </p>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Intuitive | Sensing">
            <div class="row">
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Intuitive
                </li>
                <div
                  class="soci-dichotomies__card--content__list--item__text roboto-regular"
                >
                  <p>
                    A focus on
                    <strong class="highlight-text">intangible</strong>,
                    indirectly
                    <strong class="highlight-text">perceivable</strong>, and
                    <strong class="highlight-text">hidden</strong>
                    content of reality
                  </p>
                  <p>
                    A mental process (or 'psychic function') that involves
                    <strong class="highlight-text" style="color: #71095e"
                      >distancing perception</strong
                    >
                    from <strong class="highlight-text">concrete</strong>,
                    <strong class="highlight-text">tangible</strong> details.
                    Intuition comes in two varieties (extraverted and
                    introverted) depending on whether attention is focused on
                    reality outside the subject or on the subject's impressions
                    of reality
                  </p>
                  <p>
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >Idealistic</strong
                    >
                    &
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >head-in-the-coulds</strong
                    >
                  </p>
                  <p>
                    Rather
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >see</strong
                    >
                    the
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >big picture</strong
                    >
                    over the details
                  </p>
                  <p>
                    More
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >focussed&nbsp;</strong
                    >
                    on
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                    >
                      ideas</strong
                    >
                    than on their surroundings
                  </p>
                  <p>Less naturally comfortable with physical confrontation</p>
                  <p>
                    Often more
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >interested</strong
                    >
                    in
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >theory</strong
                    >
                    than in practice
                  </p>
                </div>
              </q-card>
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Sensing
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    A perceptual quality defined by a focus on the
                    <strong class="highlight-text">tangible</strong>, directly
                    <strong class="highlight-text">sensible</strong>, and
                    <strong class="highlight-text">visible</strong> content of
                    reality
                  </p>
                  <p>
                    A mental process (or 'psychic function') that involves
                    focusing on
                    <strong class="highlight-text">concrete</strong>,
                    <strong class="highlight-text">tangible</strong> details
                    that can be
                    <strong class="highlight-text" style="color: #71095e"
                      >directly experienced</strong
                    >. Sensing comes in two varieties (extraverted and
                    introverted) depending on whether attention is focused on
                    reality outside the subject or on the subject's impressions
                    of reality
                  </p>
                  <p>
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >Realistic</strong
                    >
                    &
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >down to earth</strong
                    >
                  </p>
                  <p>
                    Rather
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >notice</strong
                    >
                    the
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >details</strong
                    >
                    than the big picture
                  </p>
                  <p>
                    More
                    <strong
                      style="color: #71095e"
                      class="roboto-black highlight-text"
                      >focussed</strong
                    >
                    on their
                    <strong
                      style="color: #0d85a0"
                      class="roboto-black highlight-text"
                      >surroundings</strong
                    >, living in the here and now
                  </p>
                  <p>More naturally comfortable with physical confrontation</p>
                  <p>
                    Often more
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #71095e"
                      >interested</strong
                    >
                    in
                    <strong
                      class="roboto-black highlight-text"
                      style="color: #0d85a0"
                      >practice</strong
                    >
                    than in theory
                  </p>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Logical | Ethical">
            <div class="row">
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Logical
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    Focus on the
                    <strong class="highlight-text">inanimate</strong>,
                    <strong class="highlight-text">measurable</strong>,
                    <strong class="highlight-text">systemic</strong>, and
                    <strong class="highlight-text">procedural</strong> content
                    of reality
                  </p>
                  <p>
                    Make
                    <strong class="highlight-text" style="color: #71095e"
                      >decisions</strong
                    >
                    based on
                    <strong class="highlight-text" style="color: #0d85a0"
                      >logical reasoning</strong
                    >
                  </p>
                  <p>
                    Rather
                    <strong class="highlight-text" style="color: #71095e"
                      >speak</strong
                    >
                    in
                    <strong class="highlight-text" style="color: #0d85a0"
                      >logical evaluations</strong
                    >
                    (right or wrong)
                  </p>
                  <p>
                    A mental process that involves interest in
                    <strong class="highlight-text">Systems</strong>,
                    <strong class="highlight-text">Structures</strong> and
                    <strong class="highlight-text">Patterns</strong>
                  </p>
                  <p>More likely to have interpersonal problems</p>
                  <p>Prefer argumentation over persuasion</p>
                  <p>More vulnerable to 'ethical' manipulation</p>
                </div>
              </q-card>
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Ethical
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    focus on the <strong class="highlight-text">human</strong>,
                    <strong class="highlight-text">social</strong>,
                    <strong class="highlight-text">moral</strong>, and
                    <strong class="highlight-text">emotional</strong> content of
                    reality
                  </p>
                  <p>
                    Make
                    <strong class="highlight-text" style="color: #71095e"
                      >decisions</strong
                    >
                    based on their
                    <strong class="highlight-text" style="color: #0d85a0"
                      >own feelings</strong
                    >
                  </p>
                  <p>
                    Rather
                    <strong class="highlight-text" style="color: #71095e"
                      >speak</strong
                    >
                    in
                    <strong class="highlight-text" style="color: #0d85a0"
                      >ethical evaluations</strong
                    >
                    (good or bad)
                  </p>
                  <p>
                    A mental process (or 'psychic function') that involves
                    focusing on
                    <strong class="highlight-text">emotional experience</strong
                    >,
                    <strong class="highlight-text">human relationships</strong>,
                    and
                    <strong class="highlight-text">subjective attitudes</strong>
                  </p>
                  <p>More often have problems finding logical solutions</p>
                  <p>Prefer persuasion over argumentation</p>
                  <p>More vulnerable to 'logical' manipulation</p>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Rational | Irrational">
            <div class="row">
              <q-card
                class="column shadow-2 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Rational (Judging)
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    A focus on
                    <strong class="highlight-text" style="color: #71095e"
                      >states</strong
                    >
                    of
                    <strong class="highlight-text" style="color: #0d85a0"
                      >actions</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >emotions</strong
                    >
                  </p>
                  <p>
                    <strong class="highlight-text" style="color: #71095e"
                      >Plan ahead</strong
                    >
                    and make decisions early
                  </p>
                  <p>
                    <strong class="highlight-text" style="color: #71095e"
                      >Rigid</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #71095e"
                      >Stubborn</strong
                    >
                  </p>
                  <p>Do not like changing decisions</p>
                  <p>Finish what is started</p>
                  <p>Usually have stiff movements</p>
                  <p>More 'authoritarian' in leadership style</p>
                  <p>Low stress tolerance</p>
                </div>
              </q-card>
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Irrational (Perceiving)
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    A focus on
                    <strong class="highlight-text" style="color: #71095e"
                      >states</strong
                    >
                    of
                    <strong class="highlight-text" style="color: #0d85a0"
                      >mind</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >body</strong
                    >
                  </p>
                  <p>
                    Wait and see, more
                    <strong class="highlight-text" style="color: #71095e"
                      >spontaneous</strong
                    >
                  </p>
                  <p>
                    <strong class="highlight-text" style="color: #71095e"
                      >Flexible</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #71095e"
                      >Tolerant</strong
                    >
                  </p>
                  <p>Change decisions frequently</p>
                  <p>Tend to start new things without finishing them</p>
                  <p>Usually have gentle movements</p>
                  <p>More 'democratic' in leadership style</p>
                  <p>High stress tolerance</p>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Static | Dynamic">
            <div class="row">
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Static
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    Focus on
                    <strong class="highlight-text" style="color: #71095e"
                      >properties</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >structures</strong
                    >
                    of things
                  </p>
                  <p>
                    Perceive
                    <strong class="highlight-text" style="color: #71095e"
                      >events</strong
                    >
                    in an
                    <strong class="highlight-text" style="color: #0d85a0"
                      >episodic</strong
                    >
                    manner. In discrete states rather than continuous change
                  </p>
                  <p>More inclined to say how stages A, B and C are</p>
                  <p>
                    Describe events in a general manner and
                    <strong class="highlight-text" style="color: #71095e"
                      >compare</strong
                    >
                    them to
                    <strong class="highlight-text" style="color: #0d85a0"
                      >similar</strong
                    >
                    events
                  </p>
                  <p>
                    More inclined to talk of properties & structures of reality
                  </p>
                  <p>
                    Stories of statics usually
                    <strong class="highlight-text" style="color: #71095e"
                      >involve</strong
                    >
                    <strong class="highlight-text" style="color: #0d85a0"
                      >one</strong
                    >
                    constant main character
                  </p>
                </div>
              </q-card>
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Dynamic
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    Focus on
                    <strong class="highlight-text" style="color: #71095e"
                      >movements</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >interactions</strong
                    >
                    of things
                  </p>
                  <p>
                    Perceive
                    <strong class="highlight-text" style="color: #71095e"
                      >events</strong
                    >
                    in an
                    <strong class="highlight-text" style="color: #0d85a0"
                      >continuous</strong
                    >
                    manner. In continuous change rather than discrete states
                  </p>
                  <p>
                    More inclined to say how stage A leads to stage B, and how
                    stage B leads to stage C
                  </p>
                  <p>
                    Describe events in a
                    <strong class="highlight-text" style="color: #71095e"
                      >specific</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >concrete</strong
                    >
                    manner
                  </p>
                  <p>
                    More inclined to talk of the movements & interactions of
                    reality
                  </p>
                  <p>
                    Stories of dynamics usually involve
                    <strong class="highlight-text" style="color: #71095e"
                      >multiple</strong
                    >
                    main characters
                  </p>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Democratic | Aristocratic">
            <div class="row">
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Democratic
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    Percieve & define themselves, and others, primarily through
                    <strong class="highlight-text" style="color: #71095e"
                      >individual/personal
                    </strong>
                    <strong class="highlight-text" style="color: #0d85a0"
                      >qualities</strong
                    >
                  </p>
                  <p>
                    Form their relationships/attitudes towards another person
                    based on the latter's own
                    <strong class="highlight-text" style="color: #71095e"
                      >individual characteristics</strong
                    >, not with base on their relationships to groups of any
                    kind
                  </p>
                  <p>
                    Not inclined to perceive their acquaintances as
                    representatives of a certain 'circle of contacts' that
                    supposedly possesses qualities inherent to people of that
                    circle
                  </p>
                  <p>
                    Not inclined to use expressions that generalize group
                    features
                  </p>
                  <p>
                    <strong class="highlight-text">Alphas</strong> and
                    <strong class="highlight-text">Gammas</strong> are the
                    Democratic types
                  </p>
                  <p>
                    Another way to put this is that
                    <strong class="highlight-text">Researchers</strong> and
                    <strong class="highlight-text">Socials</strong>
                    are the Democractic types
                  </p>
                </div>
              </q-card>
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Aristocratic
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    Percieve & define themselves, and others, through
                    <strong class="highlight-text" style="color: #71095e"
                      >groups </strong
                    ><strong class="highlight-text" style="color: #0d85a0"
                      >they belong to</strong
                    >.
                  </p>
                  <p>
                    Initial attitude towards another person is influenced by
                    their attitude to the group they see the person as belonging
                    to
                  </p>
                  <p>
                    Tend to attribute common qualities to members of their
                    circles of contacts, and define such circles by those same
                    qualities
                  </p>
                  <p>
                    Inclined to use expressions that generalize group features
                  </p>
                  <p>
                    <strong class="highlight-text" style="color: #71095e"
                      >Betas</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >Deltas</strong
                    >
                    are the Aristocratic types
                  </p>
                  <p>
                    Another way to put this is that
                    <strong class="highlight-text" style="color: #71095e"
                      >Pragmatists</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >Humanitarians</strong
                    >
                    are the Aristocratic types
                  </p>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Emotivist | Constructivist">
            <div class="row">
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Emotivist
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    Try to
                    <strong class="highlight-text" style="color: #71095e"
                      >enter</strong
                    >
                    the
                    <strong class="highlight-text" style="color: #0d85a0"
                      >emotional atmosphere</strong
                    >
                    of the conversation and they try to keep the emotion in the
                    conversation positive. They can talk about various things
                    they have no interest in or do not believe in simply for the
                    sake of maintaining a "positive spirit"
                  </p>
                  <p>
                    Talking business is more difficult and the conversation
                    topic can wander off into emotional exchange
                  </p>
                  <p>
                    Tend to
                    <strong class="highlight-text" style="color: #71095e"
                      >concentrate</strong
                    >
                    foremost on the
                    <strong class="highlight-text" style="color: #0d85a0"
                      >emotional background</strong
                    >
                    of interaction, with 'business' a secondary concern
                  </p>
                  <p>
                    <strong class="highlight-text" style="color: #71095e"
                      >Prefer</strong
                    >
                    the
                    <strong class="highlight-text" style="color: #0d85a0"
                      >new & novel</strong
                    >
                    over the old & known
                  </p>
                  <p>
                    Information perceived as unprofessional or low-quality can
                    leave them indifferent
                  </p>
                  <p>
                    Have greater difficulty disassociating from requests for
                    action or consideration than from others' emotions and
                    experiences
                  </p>
                  <p>
                    If a conversation is emotionally negative, I consider it
                    wasted
                  </p>
                </div>
              </q-card>
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Contstructivist
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    Try to get into the right mindset for an activity and it
                    takes time for them to get from one mindset to another
                  </p>
                  <p>
                    They can get
                    <strong class="highlight-text" style="color: #71095e"
                      >overwhelmed by emotions</strong
                    >
                    because once they get into an emotional state, they stay in
                    that emotional state for a long time
                  </p>
                  <p>
                    Tend to
                    <strong class="highlight-text" style="color: #71095e"
                      >minimize</strong
                    >
                    the
                    <strong class="highlight-text" style="color: #0d85a0"
                      >emotional elements</strong
                    >
                    of interaction, preferring to focus on the 'business'
                    elements
                  </p>
                  <p>
                    Have emotional 'anchors' (eg, books, films, places) which
                    they use to support their internal emotional state
                  </p>
                  <p>
                    Can become 'emotionally hooked', and can have a strong
                    reaction to a particular part or section regardless of their
                    feelings towards the entirety
                  </p>
                  <p>
                    Have greater difficulty disassociating from others' emotions
                    and experiences than from requests for action or
                    consideration
                  </p>
                  <p>
                    <strong class="highlight-text" style="color: #71095e"
                      >Prefer</strong
                    >
                    when people offer
                    <strong class="highlight-text" style="color: #0d85a0"
                      >concrete solutions</strong
                    >
                    instead of comfort or sympathy
                  </p>
                </div>
              </q-card>
            </div>
          </q-tab-panel>

          <q-tab-panel name="Judicious | Decisive">
            <div class="row">
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Judicious
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    Types include
                    <strong class="highlight-text" style="color: #71095e"
                      >Alphas</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >Deltas</strong
                    >
                    and value extroverted intuition (<strong
                      class="highlight-text"
                      style="color: #71095e"
                      >Ne</strong
                    >) and introverted sensing (<strong
                      class="highlight-text"
                      style="color: #0d85a0"
                      >Si</strong
                    >)
                  </p>
                  <p>
                    Natural
                    <strong class="highlight-text" style="color: #71095e"
                      >state</strong
                    >
                    is
                    <strong class="highlight-text" style="color: #0d85a0"
                      >relaxed</strong
                    >
                  </p>
                  <p>
                    Work best when they can relax beforehand, and are
                    <strong class="highlight-text" style="color: #71095e"
                      >mobilized</strong
                    >
                    only for the
                    <strong class="highlight-text" style="color: #0d85a0"
                      >duration necessary</strong
                    >
                  </p>
                  <p>
                    Have an easy time going from 'mobilized' to 'relaxed', but
                    not from 'relaxed' to 'mobilized'. Thus, they may need
                    external stimuli to become mobilized
                  </p>
                  <p>
                    Become aware of their own mobilization as soon as it
                    manifests, i.e., as soon as they start considering an
                    action. However, they are often poorly aware of the periods
                    of maximal mobilization
                  </p>
                  <p>
                    Focuses and places the most importance on the preparatory
                    stage, the 'action' stages are considered implicit and given
                    less attention
                  </p>
                  <p>
                    Consideration is very nice, that time during which you still
                    don't have to make a decision. It's even better when it
                    isn't necessary to do anything afterwards
                  </p>
                </div>
              </q-card>
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Decisive
                </li>
                <div class="soci-dichotomies__card--content__list--item__text">
                  <p>
                    Types include
                    <strong class="highlight-text" style="color: #71095e"
                      >Betas</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >Gammas</strong
                    >
                    and value introverted intuition (<strong
                      class="highlight-text"
                      style="color: #71095e"
                      >Ni</strong
                    >) and extroverted sensing (<strong class="highlight-text" style="color: #0d85a0"
                      >Se</strong
                    >)
                  </p>
                  <p>
                    Natural
                    <strong class="highlight-text" style="color: #71095e"
                      >state</strong
                    >
                    is
                    <strong class="highlight-text" style="color: #0d85a0"
                      >readiness</strong
                    >
                  </p>
                  <p>
                    Work best if they are able to start
                    <strong class="highlight-text" style="color: #71095e"
                      >mobilizing</strong
                    >
                    in
                    <strong class="highlight-text" style="color: #0d85a0"
                      >preparation</strong
                    >
                    for what they must do
                  </p>
                  <p>
                    Easily go from 'relaxed' to 'mobilized', but not from
                    'mobilized' to 'relaxed'. Thus, they may need external
                    stimuli (like a movie) to relax
                  </p>
                  <p>
                    Tend to perform an entire task at once, and to maintain
                    their internal 'readiness' between tasks
                  </p>
                  <p>
                    Become of aware of their own mobilization at its maximals
                    (e.g., when it is time for action). However, they are often
                    poorly aware of when the mobilization firsts manifests;
                  </p>
                  <p>
                    Focuses and places the most importance on taking action,
                    preparation is considered implicit and given less attention
                  </p>
                  <p>
                    I will not get stuck in the process of consideration; it
                    always ends in a decision being made
                  </p>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Serious | Merry">
            <div class="row">
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Serious
                </li>
                <div
                  style="max-width: 550px"
                  class="soci-dichotomies__card--content__list--item__text"
                >
                  <p>
                    Types include
                    <strong class="highlight-text" style="color: #71095e"
                      >Gammas</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >Deltas</strong
                    >
                  </p>
                  <p>
                    Value extroverted thinking (<strong
                      class="highlight-text"
                      style="color: #71095e"
                      >Te</strong
                    >) and introverted feeling (<strong
                      class="highlight-text"
                      style="color: #0d85a0"
                      >Fi</strong
                    >)
                  </p>
                  <p>
                    Bad at noticing emotional background and do not separate the
                    emotional aspect (particularly 'fun') from the activity
                  </p>
                  <p>
                    Acquaintance with others is established by ritual (e.g.,
                    introduction), and they prefer if the context of interaction
                    is externally set (eg, by a mediator (think 'arranged
                    marriages') or situation) so that they can skip the first
                    phases and begin closer interaction. They approach others
                    through stages defined by 'rules' and 'rituals', which may
                    be created by themselves and/or already existing; thus, they
                    are very aware of the stages of the process of acquaintance,
                    e.g., when a person is no longer a stranger
                  </p>
                  <p>
                    Inclined to believe there are 'objective truths' the truth
                    is not always relative. Therefore, they believe that there
                    are two types of actions/perspectives: those which are
                    subjective (connected with personal preferences and
                    motivations) and those which are objective (only one
                    'correct' or 'best' way of doing something). Whether
                    something is correct or not is judged by comparing it with
                    what they see as 'objectively correct'. In disagreement,
                    they first attempt to make sure that the other person
                    understands the concepts and terms 'correctly'
                  </p>
                  <p>
                    They are inclined to offer (or impose) what they see as the
                    'best' or 'correct' way of doing something ('it should be
                    done like this'). If they think something is done
                    incorrectly, they ask WHO did it that way
                  </p>
                </div>
              </q-card>
              <q-card
                class="column shadow-3 soci-dichotomies__card--content__list--item"
                style="margin: 0 auto"
              >
                <li
                  class="heading-regular soci-dichotomies__card--content__list--title roboto-black"
                >
                  Merry
                </li>
                <div
                  style="max-width: 550px"
                  class="soci-dichotomies__card--content__list--item__text"
                >
                  <p>
                    Types include
                    <strong class="highlight-text" style="color: #71095e"
                      >Alphas</strong
                    >
                    and
                    <strong class="highlight-text" style="color: #0d85a0"
                      >Betas</strong
                    >
                  </p>
                  <p>
                    Value introverted thinking (<strong
                      class="highlight-text"
                      style="color: #71095e"
                      >Ti</strong
                    >) and extroverted feeling (<strong
                      class="highlight-text"
                      style="color: #0d85a0"
                      >Fe</strong
                    >)
                  </p>
                  <p>
                    Good at noticing emotional background and perceive the
                    emotional aspect separate from the activity
                  </p>
                  <p>
                    'Getting to know someone' happens naturally, and they are
                    well aware of the purpose(s) for which they are meeting. The
                    proper emotional distance is easily established,
                    adapted/regulated, and manipulated, and they easily decrease
                    distance through their emotional 'brilliance'. A person's
                    name (and other formalities) are peripheral to their
                    relation with and interest in them, and thus they don't care
                    much about formal introductions
                  </p>
                  <p>
                    Not inclined to deduce 'objective truths' from their own and
                    others' experiences, everything is relative. This relativity
                    is perceived as an extenuation of the differing beliefs,
                    opinions, intentions, etc. of each person. Accordingly,
                    another person's actions are judged as correct or incorrect
                    according to a set of subjective criteria. They attempt to
                    compare others' views to their own, and to explain their own
                    views in order to make sure that all parties understand the
                    concepts being spoken of
                  </p>
                  <p>
                    They are inclined to propose (or impose) another conception
                    of the situation ('look at it this way'). If they think
                    something is done incorrectly, they will ask WHY it was done
                    that way. When talking about optimums, they are inclined to
                    do it subjectively ('optimum compared to what?')
                  </p>
                </div>
              </q-card>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-card>
    <!-- PROFILE STICKY -->
    <!-- Add v-if for logged in -->
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
import { ref } from "vue";
export default {
  setup() {
    return {
      firstTab: ref("Introvert | Extrovert"),
    };
  },
};
</script>
