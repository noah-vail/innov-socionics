<template>
  <div class="text-center">
    <header class="header">
      <div class="header__logo-box">
        <!-- IMG GOES HERE -->
        <i class="bi-gem header__logo" style="font-size: 4.5rem; color: #092a71"></i>
      </div>
      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main roboto-bold-italic"
            >Innovative</span
          >
          <span class="heading-primary--sub roboto-bold-italic">Socionics</span>
        </h1>
        <q-btn
          class="shadow-2 roboto-bold-italic btn btn--monochrome btn--animated"
          to="/quiz"
          style="margin-bottom: 2rem; margin-top: 2rem; margin-left: -3rem"
          >Discover Your Mind
        </q-btn>
      </div>
    </header>
    <main>
      <section class="section-socionics" id="socionics">
        <div class="u-center-text u-margin-bottom-medium">
          <h2 class="heading-secondary2 roboto-black">Socionics</h2>
        </div>
        <div>
          <div>
            <div
              class="text-left heading-tertiary roboto-medium"
              style="padding-left: 0.5rem"
            >
              Origin of Socionics
            </div>
          </div>
        </div>
        <div class="section-socionics__para roboto-regular">
          <p class="paragraph">
            Socionics is a theory of how individuals select and process
            information. It can be categorized as a type of nomothetic
            psychology. Although information metabolism (IM) is at the theory's
            most elementary level, most applications of socionics focus on the
            direct and indirect manifestations of a person's information
            metabolism.
          </p>
          <p class="paragraph">
            This primarily includes studying the effect of information
            metabolism on one's personality (behavior, mannerisms, etc.), but it
            also extends to studying interpersonal relationship dynamics, group
            dynamics, potential careers, societal role, and more. Socionics has
            16 sociotypes, with each sociotype representing a specific and
            unique mode of information metabolism. A person only has one
            sociotype.
          </p>
          <p class="paragraph">
            Socionics was initially conceived, created, and developed by
            Lithuanian researcher Aushra Augusta in the 1970's. Aushra Augusta
            was an economist, sociologist, and psychologist; she was the dean of
            the Vilnius Pedagogical University's department of family sciences.
            Aushra used both Carl Jung's work on Psychological Types as well as
            Antoni Kepinski's theory of information metabolism in developing the
            foundation of socionics.
          </p>
        </div>
        <div>
          <div>
            <div
              class="text-left heading-tertiary roboto-medium"
              style="padding-left: 0.5rem"
            >
              Socionics Theory
            </div>
          </div>
        </div>
        <div class="section-socionics__para roboto-regular">
          <p class="paragraph">
            The study of socionics can be broken down into two primary
            components: structure and behavior. The structural component of the
            theory delineates the formal rules and axioms; in general, the
            structural component is clearly defined and applied. On the other
            hand, the behavioral component deals with the more amorphous aspect
            of describing the application of the theory as it relates to real
            world phenomena. This entails careful observation and analysis of
            human behavior and interaction. As such, the behavioral component is
            a much more debated and contested aspect of the theory (than the
            structural component), and it continues to evolve.
          </p>
          <p class="paragraph">
            Described below are the major aspects of the theory. The foundation
            of the theory is built on the four Jungian dichotomies and Model A,
            essentially the synthesis of information elements and functions as a
            means of modeling information metabolism. The more structurally
            light (and behaviorally dense) topics include descriptions of the
            individual (i) sociotypes, (ii) small groups, and (iii) intertype
            relations. If you are new to socionics and want to learn about the
            theory from the ground up, it would be ideal to read through the
            topics in the order they are listed.
          </p>
        </div>
      </section>

      <!-- COLORED BACKGROUND -->
      <section class="section-info-elements" id="info-elem">
        <div class="u-center-text u-margin-bottom-medium">
          <h2 class="heading-secondary2 roboto-black">Information Elements</h2>
        </div>
        <q-card class="section-info-elements__card">
          <div style="padding-top: 2rem">
            <p class="paragraph roboto-light umbt text-left">
              Used in Model A to describe how the psyche metabolizes
              information. More specifically, the positioning of these
              information elements in Model A describes which aspects of reality
              are:
            </p>
            <p
              class="paragraph roboto-light text-left"
              style="padding-left: 2rem"
            >
              <strong class="text-secondary roboto-black highlight-text"
                >Prioritized</strong
              >,
              <strong class="text-primary roboto-black highlight-text"
                >Neutral</strong
              >, or
              <strong class="text-accent roboto-black highlight-text"
                >Devalued</strong
              >
            </p>
          </div>
        </q-card>

        <q-card class="section-info-elements__card">
          <div
            class="heading-tertiary roboto-medium u-center-text"
            style="padding-top: 1.5rem"
          >
            8 Psyche Properties
          </div>
          <ul class="section-info-elements__card--list">
            <div style="padding-left: 2rem; padding-right: 2rem">
              <li
                style="padding-top: 1rem"
                class="heading-regular--sub section-info-elements__card--list__item--numbered roboto-black"
              >
                Introverted Logic
                <strong
                  class="heading-regular"
                  style="color: #71095e; padding-left: 0.5rem"
                  >Ti</strong
                >
              </li>
              <div
                class="paragraph roboto-light"
                style="margin-bottom: 0.5rem !important"
              >
                Analysis, hierarchy, classification, understanding, order,
                system, structure, formal logic
              </div>
              <div class="paragraph roboto-light">
                Clarity and exactitude of thought, a sense of order and
                regularity in different levels of structure; a sense of building
                a complete system from simple and well-understood parts
              </div>
            </div>

            <div style="padding-left: 2rem; padding-right: 2rem">
              <li
                class="heading-regular--sub section-info-elements__card--list__item--numbered roboto-black"
              >
                Extroverted Logic
                <strong
                  class="heading-regular"
                  style="padding-left: 0.5rem; color: #092a71"
                  >Te</strong
                >
              </li>
              <div
                class="paragraph roboto-light"
                style="margin-bottom: 0.5rem !important"
              >
                Benefit, efficiency, action, knowledge, method, mechanism, act,
                work, motion, reason, technology, fact, expediency, economy,
                asks 'why' to get information, facts, analysis collected data to
                make logical conclusions, law, legal right, generally accepted
                knowledge and rules/laws is more the realm of Te
              </div>
              <div class="paragraph roboto-light">
                An active, but steady and purposeful state conducive to
                performing goal-oriented activities
              </div>
            </div>

            <div style="padding-left: 2rem; padding-right: 2rem">
              <li
                class="heading-regular--sub section-info-elements__card--list__item--numbered roboto-black"
              >
                Introverted Sensing
                <strong
                  class="heading-regular"
                  style="color: #71095e; padding-left: 0.5rem"
                  >Si</strong
                >
              </li>
              <div
                class="paragraph roboto-light"
                style="margin-bottom: 0.5rem !important"
              >
                Harmony, pleasure, health, comfort, pleasantness, satisfaction,
                convenience, quality, cosiness, aesthetics
              </div>
              <div class="paragraph roboto-light">
                A physically relaxed and comfortable state free of irritants;
                enjoying the pleasure of the moment
              </div>
            </div>

            <div style="padding-left: 2rem; padding-right: 2rem">
              <li
                class="heading-regular--sub section-info-elements__card--list__item--numbered roboto-black"
              >
                Extroverted Sensing
                <strong
                  class="heading-regular"
                  style="padding-left: 0.5rem; color: #092a71"
                  >Se</strong
                >
              </li>
              <div
                class="paragraph roboto-light"
                style="margin-bottom: 0.5rem !important"
              >
                Authority, influence, desire, political interest/personal
                investment, competition/struggle, willpower, impact, force,
                appearance, readiness, tactics, territory
              </div>
              <div class="paragraph roboto-light">
                A mobilized state full of vitality and energy or implied
                strength; the desire to make strong, bold, and powerful
                movements
              </div>
            </div>

            <div style="padding-left: 2rem; padding-right: 2rem">
              <li
                class="heading-regular--sub section-info-elements__card--list__item--numbered roboto-black"
              >
                Introverted Feeling
                <strong
                  class="heading-regular"
                  style="color: #71095e; padding-left: 0.5rem"
                  >Fi</strong
                >
              </li>
              <div
                class="paragraph roboto-light"
                style="margin-bottom: 0.5rem !important"
              >
                Endearment, closeness, moral satisfaction, and emotional
                sensitivity; deep personal conviction that may produce moral
                firmness and resolve; love, hatred, or disgust for others
              </div>
              <div class="paragraph roboto-light">
                Like/dislike, decency and niceness, morals, good/bad, etiquette,
                humanism, attraction/repulsion, empathy, compassion, attitude
                towards other human beings, how others are treated, think about
                other's humanity 'let's hear his side', judgements determined by
                people doing things
              </div>
            </div>

            <div style="padding-left: 2rem; padding-right: 2rem">
              <li
                class="heading-regular--sub section-info-elements__card--list__item--numbered roboto-black"
              >
                Extroverted Feeling
                <strong
                  class="heading-regular"
                  style="padding-left: 0.5rem; color: #092a71"
                  >Fe</strong
                >
              </li>
              <div
                class="paragraph roboto-light"
                style="margin-bottom: 0.5rem !important"
              >
                Emotions and emotional expression, passion, mood, excitation,
                exuberance, romanticism, imitation, acting, not a moral arbiter
                of good/evil, how they are treated as opposed to how others are
                treated, sympathy, at certain instances disregards other
                people's humanity in certain situations, judgements are
                determined by the situation - at things being done
              </div>
              <div class="paragraph roboto-light">
                Passions; the desire to express one's feelings and experiences
                through expressive gestures such as dance or song
              </div>
            </div>

            <div style="padding-left: 2rem; padding-right: 2rem">
              <li
                class="heading-regular--sub section-info-elements__card--list__item--numbered roboto-black"
              >
                Introverted Intuition
                <strong
                  class="heading-regular"
                  style="color: #71095e; padding-left: 0.5rem"
                  >Ni</strong
                >
              </li>
              <div
                class="paragraph roboto-light"
                style="margin-bottom: 0.5rem !important"
              >
                A dreamy, mysterious, wistful, melancholic, or reflective state
                of inner discovery and searching; reflecting upon the future or
                the past
              </div>
              <div class="paragraph roboto-light">
                Development over time (processes), cause and effect, history,
                planning, forecasting, past/future, rhythm, speed, urgency,
                fantasy
              </div>
            </div>

            <div style="padding-left: 2rem; padding-right: 2rem">
              <li
                class="heading-regular--sub section-info-elements__card--list__item--last roboto-black"
              >
                Extroverted Intuition
                <strong
                  class="heading-regular"
                  style="padding-left: 0.5rem; color: #092a71"
                  >Ne</strong
                >
              </li>
              <div
                class="paragraph roboto-light"
                style="margin-bottom: 0.5rem !important"
              >
                Potential/possibility, the unique and unusual, ability, essence,
                perception of the whole, uncertainty, the unknown, search,
                internal makeup, suddenness, chance, being, permanence,
                impermanence
              </div>
              <div class="paragraph roboto-light">
                A state of trying to see novel connections between or
                combinations of previously disparate things; a continual
                searching for change and newness, including things unexpected
                and random
              </div>
            </div>
          </ul>
          <q-btn
            unelevated
            class="shadow-3 btn btn--types btn--animated roboto-medium-italic"
            to="/personalities"
            label="discover sociotypes"
            style="margin-top: 2rem; margin-bottom: 1rem; margin-right: 1.5rem"
          />
        </q-card>
      </section>

      <!-- BAIGE BACKGROUND -->
      <section class="section-model" id="model">
        <!-- MODEL-->
        <div
          class="u-center-text u-margin-bottom-medium"
          style="padding-top: 2.5rem"
        >
          <h2 class="heading-secondary2 roboto-black">Model A</h2>
        </div>
        <div>
          <div>
            <div
              class="text-left heading-tertiary roboto-medium"
              style="padding-left: 0.5rem"
            >
              Introduction to Model A
            </div>
          </div>
        </div>
        <div class="section-model__para">
          <p class="paragraph roboto-regular">
            Socionics organizes a person's psyche by dividing it into eight
            separate functions; this organizational structure is commonly
            referred to as Model A.
          </p>
          <p class="paragraph roboto-regular">
            Model A is one of the central foundations of socionics. Each
            function serves a different purpose and contains one information
            element.
          </p>
          <p class="paragraph roboto-regular">
            Put another way, Model A can be thought of as a synthesis of
            functions and information elements. Each sociotype has a unique
            pairing of functions and information elements, which gives each
            sociotype a unique Model A formulation.
          </p>
        </div>
        <q-card class="section-model__card">
          <p
            class="heading-tertiary roboto-medium u-center-text"
            style="padding-top: 1.5rem"
          >
            Structure & Axiom
          </p>
          <h6 class="heading-regular roboto-black">Ego Block</h6>
          <ul class="section-model__card--list roboto-black-italic">
            <div class="section-model__card--list__item">
              <li
                class="heading-regular--sub roboto-black-italic"
                style="padding-bottom: 0.2rem"
              >
                Leading Function
              </li>
              <div
                class="roboto-light section-info-elements__card--list__item--text"
              >
                These functions describe the aspects of reality that a person
                perceives with the greatest depth and clarity and verbalizes
                with the greatest ease. The Ego block also describes the most
                natural and common states of mind and behavior styles used when
                interacting with other people, and also a certain perspective
                that a person injects into the things he says
              </div>
            </div>
            <div>
              <li
                class="heading-regular--sub roboto-black-italic section-model__card--list__item"
                style="padding-bottom: 0.2rem; padding-top: 1.2rem"
              >
                Creative Function
              </li>
              <div class="roboto-light section-model__card--list__item--text">
                These functions describe the aspects of reality that a person
                perceives with the greatest depth and clarity and verbalizes
                with the greatest ease. The Ego block also describes the most
                natural and common states of mind and behavior styles used when
                interacting with other people, and also a certain perspective
                that a person injects into the things he says
              </div>
            </div>
          </ul>
          <h6 class="heading-regular roboto-black umts">Super-Ego Block</h6>
          <ul class="section-model__card--list roboto-black-italic">
            <div>
              <div>
                <li
                  class="heading-regular--sub section-model__card--list__item roboto-black-italic"
                >
                  Role Function
                </li>
                <div class="roboto-light section-model__card--list__item--text">
                  When a person is actively using his base function, the role
                  function is essentially turned off. The two cannot both be
                  'on' at the same time, because they represent two opposing
                  approaches to similar things. Because of this opposition, the
                  more one gets carried away with one's base function, the more
                  the role function is ignored or suppressed
                </div>
              </div>
              <div>
                <li
                  style="padding-top: 1.2rem"
                  class="heading-regular--sub section-model__card--list__item roboto-black-italic"
                >
                  Vulnerable Function
                </li>
                <div class="roboto-light section-model__card--list__item--text">
                  The vulnerable function is also called the Point or Place of
                  Least Resistance (PoLR) or sensitive function. The element in
                  this function creates a feeling of frustration and inadequacy.
                  A person does not understand the importance of this element
                  entirely, and it can easily lead to painful consequences if
                  not adequately considered
                </div>
              </div>
            </div>
          </ul>
          <h6 class="heading-regular roboto-black umts">Super-Id Block</h6>
          <ul class="section-model__card--list">
            <div>
              <li
                class="heading-regular--sub section-model__card--list__item roboto-black-italic"
              >
                Suggestive Function
              </li>
              <div class="roboto-light section-model__card--list__item--text">
                <div
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  The suggestive function is also called the dual-seeking
                  function. The subject finds it difficult to be overwhelmed by
                  this element, since it perfectly complements and drives the
                  activity of the leading function. The more it is present in
                  his daily life, the more he will naturally adapt to its
                  presence. They are easily entertained by this kind of
                  information, and its sustained presence creates a soothing
                  psychological effect
                </div>
                <div class="paragraph roboto-light">
                  People focus deeply on the use of this function in day-to-day
                  life, always attempting to digest information received from
                  the environment through this aspect of reality. This is
                  because it complements the leading function, making an
                  individual not only more understanding but more satisfied
                  about their pursuits in the Ego
                </div>
              </div>
            </div>
            <div>
              <li
                style="padding-top: 1.2rem"
                class="heading-regular--sub section-model__card--list__item roboto-black-italic"
              >
                Mobilizing Function
              </li>
              <div class="roboto-light section-model__card--list__item--text">
                <div class="paragraph roboto-light">
                  The mobilizing function is also called the activating function
                  and the hidden agenda function. Help in this element is
                  appreciated, but past a certain point is seen as excessive.
                  The subject is more comfortable using this function than the
                  suggestive function but still can only use it sporadically
                </div>
              </div>
            </div>
          </ul>
          <h6 class="heading-regular roboto-black umts">Id Block</h6>
          <ul class="section-model__card--list">
            <div>
              <div>
                <li
                  class="heading-regular--sub section-model__card--list__item roboto-black-italic"
                >
                  Ignoring Function
                </li>
                <div class="roboto-light section-model__card--list__item--text">
                  The ignoring function is also called the observing, or
                  limiting function. A person has very little use of this
                  element, as it is the rival image of the base function,
                  representing an antithetical approach to the same domain. It
                  lies in the subconscious as a persistent annoyance to the
                  individual. Therefore, he or she tries to ignore it
                </div>
              </div>
              <div>
                <li
                  style="padding-top: 1.2rem"
                  class="heading-regular--sub section-model__card--list__item roboto-black-italic"
                >
                  Demonstrative Function
                </li>
                <div
                  style="padding-bottom: 1.5rem"
                  class="roboto-light section-model__card--list__item--text"
                >
                  A person uses this element mainly as a kind of game, or to
                  ridicule those who he thinks take it too seriously. They often
                  intentionally go against its conventional usage simply to
                  prove a point in favor of their creative function. However,
                  this function is used quite often in private, to produce
                  information of its element to support their creative function
                  when focusing on making contact with the external world
                </div>
              </div>
            </div>
          </ul>
        </q-card>
        <div
          class="text-left heading-tertiary roboto-medium"
          style="padding-left: 1.5rem"
        >
          Rules of Positioning
        </div>
        <p class="paragraph roboto-regular">
          There are a number of positioning rules for how information elements
          are placed into the functions:
        </p>
        <q-card class="section-model__card">
          <ul class="section-model__card--list">
            <li class="section-model__card--list__item--numbered roboto-light">
              <strong style="padding-right: 0.3rem">1.</strong> The
              <strong class="text-primary roboto-medium highlight-text"
                >accepting</strong
              >
              functions must contain either
              <strong class="text-secondary roboto-medium highlight-text"
                >rational&nbsp;</strong
              >
              <em>or&nbsp;</em>
              <strong class="text-secondary roboto-medium highlight-text"
                >irrational</strong
              >
              elements, and the opposite for producing functions
            </li>
            <li class="section-model__card--list__item roboto-light">
              <strong style="padding-right: 0.3rem">2.</strong> The
              <strong class="text-primary roboto-medium highlight-text"
                >mental</strong
              >
              (or conscious) functions must contain either
              <strong class="text-secondary roboto-medium highlight-text"
                >static&nbsp;</strong
              >
              <em>or&nbsp;</em>
              <strong class="text-secondary roboto-medium highlight-text"
                >dynamic</strong
              >
              elements, and the vital (or unconscious) functions the opposite
            </li>
            <li class="section-model__card--list__item--last roboto-light">
              <strong style="padding-right: 0.3rem">3.</strong> Each
              <strong class="text-primary roboto-medium highlight-text"
                >block</strong
              >
              must contain exactly
              <em class="roboto-light-italic">one&nbsp;</em>
              <strong class="text-secondary roboto-medium highlight-text"
                >introverted</strong
              >
              element and
              <em class="roboto-light-italic">one&nbsp;</em>
              <strong class="text-secondary roboto-medium highlight-text"
                >extroverted</strong
              >
              element
            </li>
          </ul>
        </q-card>
      </section>

      <!-- COLORED BACKGROUND -->
      <section class="section-quadra" id="quadra">
        <div
          class="u-center-text u-margin-bottom-medium"
          style="padding-top: 3rem"
        >
          <h2 class="heading-secondary2 roboto-black">Quadra</h2>
        </div>
        <div class="section-quadra__para">
          <p class="paragraph roboto-regular">
            A quadra is a group of four socionic types which have the same
            valued elements (i.e. the same elements as their 1st, 2nd, 5th, and
            6th functions).
          </p>
          <p class="paragraph roboto-regular">
            The same intertype relations exist between the types of any quadra:
          </p>
          <p class="paragraph roboto-regular text-center">
            <strong style="color: #500971" class="roboto-black highlight-text"
              >Identity</strong
            >,
            <strong style="color: #71095e" class="roboto-black highlight-text"
              >Dual</strong
            >,
            <strong style="color: #092a71" class="roboto-black highlight-text"
              >Activation</strong
            >, and
            <strong style="color: #711c09" class="roboto-black highlight-text"
              >Mirror</strong
            >
          </p>
          <p class="paragraph roboto-regular">
            These relations are generally favorable, with types sharing similar
            or compatible strivings, unspoken values, and expectations for
            interaction .
          </p>
        </div>

        <q-card class="section-quadra__card">
          <ul class="section-quadra__card--list roboto-regular-italic">
            <li class="section-quadra__card--list__item--first">
              <strong
                class="heading-regular--sub roboto-black-italic"
                style="color: #097150"
                >Alpha</strong
              >
              values &rarr;
              <strong class="roboto-black-italic" style="color: #71095e"
                >Ti</strong
              >,
              <strong class="roboto-black-italic" style="color: #71095e"
                >Ne</strong
              >,
              <strong class="roboto-black-italic" style="color: #71095e"
                >Fe</strong
              >, and
              <strong class="roboto-black-italic" style="color: #71095e"
                >Si</strong
              >
            </li>
            <li class="section-quadra__card--list__item">
              <strong
                class="heading-regular--sub roboto-black-italic"
                style="color: #097150"
                >Beta</strong
              >
              values &rarr;
              <strong class="roboto-black-italic" style="color: #71095e"
                >Ti</strong
              >,
              <strong class="roboto-black-italic" style="color: #71095e"
                >Se</strong
              >,
              <strong class="roboto-black-italic" style="color: #71095e"
                >Fe</strong
              >, and
              <strong class="roboto-black-italic" style="color: #71095e"
                >Ni</strong
              >
            </li>
            <li class="section-quadra__card--list__item">
              <strong
                class="heading-regular--sub roboto-black-italic"
                style="color: #097150"
                >Gamma</strong
              >
              values &rarr;
              <strong class="roboto-black-italic" style="color: #092a71"
                >Fi</strong
              >,
              <strong class="roboto-black-italic" style="color: #092a71"
                >Se</strong
              >,
              <strong class="roboto-black-italic" style="color: #092a71"
                >Te</strong
              >, and
              <strong class="roboto-black-italic" style="color: #092a71"
                >Ni</strong
              >
            </li>
            <li class="section-quadra__card--list__item--last">
              <strong
                class="heading-regular--sub roboto-black-italic"
                style="color: #097150"
                >Delta</strong
              >
              values &rarr;
              <strong class="roboto-black-italic" style="color: #092a71"
                >Fi</strong
              >,
              <strong class="roboto-black-italic" style="color: #092a71"
                >Ne</strong
              >,
              <strong class="roboto-black-italic" style="color: #092a71"
                >Te</strong
              >, and
              <strong class="roboto-black-italic" style="color: #092a71"
                >Si</strong
              >
            </li>
          </ul>
        </q-card>
        <div class="section-quadra__para">
          <p class="paragraph roboto-regular">
            Attempts at accurate descriptions of quadras are notoriously
            difficult, as each quadra description must find some commonality
            among four types that collectively represent all four temperaments
            and two different clubs.
          </p>
          <p class="paragraph roboto-regular">
            Because the shared quadra values are abstract, quadra descriptions
            typically rely on presumed shared interests. All the typical
            problems of type diagnosis apply as well
          </p>
          <p class="paragraph roboto-regular">
            Quadra values are best understood in terms of preference, and are
            unrelated to strength. For instance, a type with Ne in their Ego
            will necessarily have Ni in their Id and therefore be quite
            confident in both, but when there is a choice in priority, that type
            will tend to prefer to focus on Ne over Ni.
          </p>
          <p class="paragraph roboto-regular">
            A type of the same quadra, but without either function in the Ego,
            will likewise prefer Ne over Ni but not be particularly confident in
            either, so welcoming help from others on Ne issues far more than
            over Ni issues. Therefore both types have Ne as a quadra value
          </p>
        </div>

        <div>
          <q-btn
            unelevated
            class="shadow-3 btn btn--monochrome btn--animated roboto-medium-italic"
            to="/quadra"
            style="margin-top: 6rem; margin-bottom: 2rem"
            >Discover the Quadra
          </q-btn>
        </div>
      </section>

      <section class="section-dichotomies" id="dichotomies">
        <div class="u-center-text u-margin-bottom-medium">
          <h2 class="heading-secondary2 roboto-black">Socionics Dichotomies</h2>
        </div>
        <div>
          <div class="row">
            <div class="col">
              <div>
                <div
                  class="text-left heading-tertiary roboto-medium"
                  style="padding-left: 0.5rem"
                >
                  Introduction
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-dichotomies__para roboto-regular">
          <p class="paragraph">
            A dichotomy is a binary trait that divides phenomena into one of two
            opposite categories and are a necessary attribute of any typology.
          </p>
          <p class="paragraph">
            Therefore dichotomies are fundamentally built into the rules of
            function positioning. For example, you cannot have sensing and
            intuition as your first two functions, or both ethics and logic.
          </p>
          <p class="paragraph">
            Dichotomies in Jung's Typology and in socionics exist side by side
            with functional models and are generally recognized to be a result
            of the position of various IM elements rather than an independent
            property
          </p>
          <p class="paragraph">
            For example, rationality / irrationality and extraversion /
            introversion are defined by the leading function
          </p>
          <p class="paragraph umbs">
            Sensing / intuition and logic / ethics are determined by which of
            these functions is present among the first two functions
          </p>
        </div>

        <q-card class="section-intertype__card2">
          <div>
            <div class="heading-tertiary roboto-medium">Dichotomies</div>
          </div>
          <ul class="section-intertype__card2--list">
            <div class="section-intertype__card2--list__itemBox">
              <li
                class="heading-regular--sub section-intertype__card2--list__itemBox--item roboto-black"
              >
                Introvert / Extrovert
              </li>
              <div class="section-dichotomies__para">
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Extraversion</strong
                  >
                  in socionics is a perceptual quality defined by a focus on the
                  characteristics and behavior of objects (people, things,
                  events) outside the observer
                </p>
                <p class="paragraph roboto-light">
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Introversion</strong
                  >
                  in socionics is a perceptual quality defined by a focus on the
                  observer's response to and perception of objects
                </p>
              </div>
            </div>
            <div class="section-intertype__card2--list__itemBox">
              <li
                class="heading-regular--sub section-intertype__card2--list__itemBox--item roboto-black"
              >
                Intuitive / Sensing
              </li>
              <div class="section-dichotomies__para">
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Sensing</strong
                  >
                  in socionics is a perceptual quality defined by a focus on the
                  tangible, directly sensible, and visible content of reality
                </p>
                <p class="paragraph roboto-light">
                  In contrast,
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Intuition</strong
                  >
                  means a focus on intangible, indirectly perceivable, and
                  hidden content of reality.
                </p>
              </div>
            </div>
            <div class="section-intertype__card2--list__itemBox">
              <li
                class="heading-regular--sub section-intertype__card2--list__itemBox--item roboto-black"
              >
                Logical / Ethical
              </li>
              <div class="section-dichotomies__para">
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Ethics</strong
                  >
                  in socionics is a perceptual quality defined by a focus on the
                  human, social, moral, and emotional content of reality
                </p>
                <p class="paragraph roboto-light">
                  In contrast,
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Logic</strong
                  >
                  entails a focus on the inanimate, measurable, systemic, and
                  procedural content of reality.
                </p>
              </div>
            </div>
            <div class="section-intertype__card2--list__itemBox">
              <li
                class="heading-regular--sub section-intertype__card2--list__itemBox--item roboto-black"
              >
                Rational (Judging) / Irrational (Perceiving)
              </li>
              <div class="section-dichotomies__para">
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Rationality</strong
                  >
                  in socionics is a perceptual quality defined by a focus on
                  actions and emotions
                </p>
                <p class="paragraph roboto-light">
                  In contrast,
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Irrationality</strong
                  >
                  means a focus on states of mind and body.
                </p>
              </div>
            </div>
            <div class="section-intertype__card2--list__itemBox">
              <li
                class="heading-regular--sub section-intertype__card2--list__itemBox--item roboto-black"
              >
                Static / Dynamic
              </li>
              <div class="section-dichotomies__para">
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Statics</strong
                  >
                  focus on properties and structures of things
                </p>
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Dynamics</strong
                  >
                  focus on movements and interactions of things.
                </p>
                <p class="paragraph roboto-light">
                  This is a general characteristic, however, and a person will
                  display static or dynamic perception at any given moment
                  depending on which IM element is in use.
                </p>
              </div>
            </div>

            <div class="section-intertype__card2--list__itemBox">
              <li
                class="heading-regular--sub section-intertype__card2--list__itemBox--item roboto-black"
              >
                Democratic / Aristocratic
              </li>
              <div class="section-dichotomies__para">
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong class="roboto-medium-italic highlight-text"
                    >Alphas</strong
                  >
                  and
                  <strong class="roboto-medium-italic highlight-text"
                    >Gammas</strong
                  >
                  are the
                  <strong
                    style="color: #092a71"
                    class="roboto-bold highlight-text"
                    >Democractic</strong
                  >
                  types
                </p>
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong class="roboto-medium-italic highlight-text"
                    >Betas</strong
                  >
                  and
                  <strong class="roboto-medium-italic highlight-text"
                    >Deltas</strong
                  >
                  are the
                  <strong
                    style="color: #092a71"
                    class="roboto-bold highlight-text"
                    >Aristocratic</strong
                  >
                  types
                </p>
                <p class="paragraph roboto-light">
                  Another way to put this is that researchers and socials are
                  the Democractic types and Pragmatists and Humanitarians are
                  the Aristocratic types
                </p>
              </div>
            </div>

            <div class="section-intertype__card2--list__itemBox">
              <li
                class="heading-regular--sub section-intertype__card2--list__itemBox--item roboto-black"
              >
                Emotivist / Constructivist
              </li>
              <div class="section-dichotomies__para">
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Constructivists</strong
                  >
                  try to get into the right mindset for an activity and it takes
                  time for them to get from one mindset to another
                </p>
                <p class="paragraph roboto-light">
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Emotivists</strong
                  >
                  try to enter the emotional atmosphere of the conversation and
                  they try to keep the emotion in the conversation positive.
                </p>
              </div>
            </div>

            <div class="section-intertype__card2--list__itemBox">
              <li
                class="heading-regular--sub section-intertype__card2--list__itemBox--item roboto-black"
              >
                Merry / Serious
              </li>
              <div class="section-dichotomies__para">
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Merry</strong
                  >
                  types value introverted thinking (<strong
                    class="highlight-text"
                    >Ti</strong
                  >) and extroverted feeling (<strong class="highlight-text"
                    >Fe</strong
                  >)
                </p>
                <p class="paragraph roboto-light">
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Serious</strong
                  >
                  types value extroverted thinking (<strong
                    class="highlight-text"
                    >Te</strong
                  >) and introverted feeling (<strong class="highlight-text"
                    >Fi</strong
                  >)
                </p>
              </div>
            </div>
            <div class="section-intertype__card2--list__itemBox">
              <li
                class="heading-regular--sub section-intertype__card2--list__itemBox--item roboto-black"
              >
                Judicious / Decisive
              </li>
              <div class="section-dichotomies__para">
                <p
                  class="paragraph roboto-light"
                  style="margin-bottom: 0.5rem !important"
                >
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Judicious</strong
                  >
                  types include Alphas and Deltas and value extroverted
                  intuition (<strong class="highlight-text">Ne</strong>) and
                  introverted sensing (<strong class="highlight-text">Si</strong
                  >)
                </p>
                <p class="paragraph roboto-light">
                  <strong
                    style="color: #092a71"
                    class="roboto-medium highlight-text"
                    >Decisive</strong
                  >
                  types include Betas and Gammas and value introverted intuition
                  (<strong class="highlight-text">Ni</strong>) and extroverted
                  sensing (<strong class="highlight-text">Se</strong>)
                </p>
              </div>
            </div>
          </ul>
        </q-card>
        <div>
          <q-btn
            unelevated
            class="shadow-3 btn btn--primary btn--animated roboto-medium-italic"
            to="/dichotomies"
            style="margin-top: 6rem"
            >Discover Dichotomies
          </q-btn>
        </div>
      </section>
      <section>
        <!-- STICKY LEGEND -->
        <q-page-sticky
          class="home-legend"
          position="bottom-left"
          :offset="[32, 25]"
        >
          <q-fab
            vertical-actions-align="left"
            icon="bi-diamond-half"
            label="Legend"
            color="secondary"
            direction="up"
            class="shadow-5 home-legend__btn2 roboto-medium-italic"
            padding="5px 14px"
          >
            <q-fab-action
              elevated
              class="shadow-3 home-legend__btn roboto-medium-italic"
              label="Dichotomy"
              padding="3px 10px"
              onclick="document.getElementById('dichotomies').scrollIntoView()"
            >
            </q-fab-action>
            <q-fab-action
              elevated
              class="shadow-3 home-legend__btn roboto-medium-italic"
              label="Quadra"
              padding="3px 10px"
              onclick="document.getElementById('quadra').scrollIntoView()"
            >
            </q-fab-action>
            <q-fab-action
              elevated
              class="shadow-3 home-legend__btn roboto-medium-italic"
              label="Model A"
              padding="3px 10px"
              onclick="document.getElementById('model').scrollIntoView()"
            >
            </q-fab-action>
            <q-fab-action
              elevated
              class="shadow-3 home-legend__btn roboto-medium-italic"
              label="Info Elements"
              padding="3px 10px"
              onclick="document.getElementById('info-elem').scrollIntoView()"
            >
            </q-fab-action>
            <q-fab-action
              elevated
              class="shadow-3 home-legend__btn roboto-medium-italic"
              label="Socionics"
              padding="3px 10px"
              onclick="document.getElementById('socionics').scrollIntoView()"
            >
            </q-fab-action>
          </q-fab>
        </q-page-sticky>
      </section>
    </main>

    <!-- SCROLL STICKY -->
    <q-page-sticky
      class="sticky-scroll"
      position="bottom-right"
      :offset="[33, 22]"
    >
      <q-btn
        fab
        color="secondary"
        icon="keyboard_arrow_up"
        class="shadow-3 sticky-scroll__btn text-white"
        @click="goToTop()"
      />
    </q-page-sticky>

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
          glossy
          label="Profile"
          class="sticky-profile__profile"
          v-close-popup
          to="/profile"
          style="font-size: 1rem"
        >
          <i class="bi bi-person-fill" style="font-size: 1.5rem"></i>
        </q-fab-action>
        <q-fab-action
          glossy
          label="Login"
          class="sticky-profile__login"
          v-close-popup
          to="/login"
          style="font-size: 1rem"
        >
          <i class="bi bi-shield-lock-fill" style="font-size: 1.5rem"></i>
        </q-fab-action>
        <q-fab-action
          glossy
          label="Logout"
          class="sticky-profile__logout"
          v-close-popup
          to="/logout"
          style="font-size: 1rem"
        >
          <i class="bi bi-shield-slash-fill" style="font-size: 1.5rem"></i>
        </q-fab-action>
      </q-fab>
    </q-page-sticky>
  </div>
</template>

<script>
//import { reactive, onMounted, ref } from "vue";

export default {
  setup() {
    const scroll = () => {
      document.getElementById("socionics").scrollIntoView();
    };

    const goToTop = () => {
      window.scrollTo(0, 0);
    };
    return {
      goToTop,
      scroll,
    };
  },
};
</script>
