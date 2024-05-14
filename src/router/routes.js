const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      // register
      {
        path: "/register",
        name: "register",
        component: () => import("components/RegisterMember.vue"),
      },
      // login
      {
        path: "/login",
        name: "login",
        component: () => import("components/LoginMember.vue"),
      },
      // logout
      {
        path: "/logout",
        name: "logout",
        component: () => import("components/LogoutMember.vue"),
      },
      // home
      {
        path: "/",
        name: "home",
        component: () => import("pages/HomePage.vue"),
      },
      // project details
      {
        path: "/projectdetails",
        name: "projectdetails",
        component: () => import("pages/ProjectDetails.vue"),
      },
      // quiz
      {
        path: "/quiz",
        name: "quiz",
        component: () => import("components/MemberQuiz.vue"),
      },
      // sociotypes
      {
        path: "/personalities",
        name: "personalities",
        component: () => import("components/PersonalityTypes.vue"),
      },
      // member profile
      {
        path: "/profile",
        name: "profile",
        component: () => import("components/MemberProfile.vue"),
      },
      // quadra
      {
        path: "/quadra",
        name: "quadra",
        component: () => import("pages/SociQuadra.vue"),
      },
      // club
      {
        path: "/club",
        name: "club",
        component: () => import("pages/SociClub.vue"),
      },
      // temperament
      {
        path: "/temperament",
        name: "temperament",
        component: () => import("pages/SociTemperament.vue"),
      },
      // romance style
      {
        path: "/romstyle",
        name: "romstyle",
        component: () => import("pages/SociRomanceStyles.vue"),
      },
      // dichotomies
      {
        path: "/dichotomies",
        name: "dichotomies",
        component: () => import("pages/TypeDichotomies.vue"),
      },
      // key terms
      {
        path: "/terms",
        name: "terms",
        component: () => import("pages/KeyTerms.vue"),
      },
      /* TEST PAGE - WILL DELETE */
      {
        path: "/test",
        name: "test",
        component: () => import("components/PossibleComps.vue"),
      },
      /* 16 SOCIOTYPES */
      {
        path: "/ILI",
        name: "ILI",
        component: () => import("pages/types/TypeILI.vue"),
      },
      {
        path: "/ILE",
        name: "ILE",
        component: () => import("pages/types/TypeILE.vue"),
      },
      {
        path: "/ESE",
        name: "ESE",
        component: () => import("pages/types/TypeESE.vue"),
      },
      {
        path: "/SEI",
        name: "SEI",
        component: () => import("pages/types/TypeSEI.vue"),
      },
      {
        path: "/LII",
        name: "LII",
        component: () => import("pages/types/TypeLII.vue"),
      },
      {
        path: "/EIE",
        name: "EIE",
        component: () => import("pages/types/TypeEIE.vue"),
      },
      {
        path: "/LSI",
        name: "LSI",
        component: () => import("pages/types/TypeLSI.vue"),
      },
      {
        path: "/SLE",
        name: "SLE",
        component: () => import("pages/types/TypeSLE.vue"),
      },
      {
        path: "/IEI",
        name: "IEI",
        component: () => import("pages/types/TypeIEI.vue"),
      },
      {
        path: "/SEE",
        name: "SEE",
        component: () => import("pages/types/TypeSEE.vue"),
      },
      {
        path: "/LIE",
        name: "LIE",
        component: () => import("pages/types/TypeLIE.vue"),
      },
      {
        path: "/ESI",
        name: "ESI",
        component: () => import("pages/types/TypeESI.vue"),
      },
      {
        path: "/LSE",
        name: "LSE",
        component: () => import("pages/types/TypeLSE.vue"),
      },
      {
        path: "/EII",
        name: "EII",
        component: () => import("pages/types/TypeEII.vue"),
      },
      {
        path: "/IEE",
        name: "IEE",
        component: () => import("pages/types/TypeIEE.vue"),
      },
      {
        path: "/SLI",
        name: "SLI",
        component: () => import("pages/types/TypeSLI.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
