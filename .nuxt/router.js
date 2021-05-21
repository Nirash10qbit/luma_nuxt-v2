import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _76801afa = () => interopDefault(import('..\\pages\\auth\\index.vue' /* webpackChunkName: "pages/auth/index" */))
const _d6168802 = () => interopDefault(import('..\\pages\\confirm-password.vue' /* webpackChunkName: "pages/confirm-password" */))
const _f6661ce0 = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _0fe3896b = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _7323d720 = () => interopDefault(import('..\\pages\\templates\\index.vue' /* webpackChunkName: "pages/templates/index" */))
const _39849309 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _8af14586 = () => interopDefault(import('..\\pages\\two-factor-challenge.vue' /* webpackChunkName: "pages/two-factor-challenge" */))
const _bf43f956 = () => interopDefault(import('..\\pages\\two-factor-challenge-recovery.vue' /* webpackChunkName: "pages/two-factor-challenge-recovery" */))
const _76ad4ec5 = () => interopDefault(import('..\\pages\\auth\\dashboard.vue' /* webpackChunkName: "pages/auth/dashboard" */))
const _fc38c214 = () => interopDefault(import('..\\pages\\auth\\forgot-password.vue' /* webpackChunkName: "pages/auth/forgot-password" */))
const _e330d4cc = () => interopDefault(import('..\\pages\\auth\\login.vue' /* webpackChunkName: "pages/auth/login" */))
const _1b8574b0 = () => interopDefault(import('..\\pages\\auth\\profile\\index.vue' /* webpackChunkName: "pages/auth/profile/index" */))
const _f2e935fc = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _6bc38998 = () => interopDefault(import('..\\pages\\auth\\verify.vue' /* webpackChunkName: "pages/auth/verify" */))
const _735b16a5 = () => interopDefault(import('..\\pages\\templates\\customer-details.vue' /* webpackChunkName: "pages/templates/customer-details" */))
const _220a0dbd = () => interopDefault(import('..\\pages\\templates\\new-customer.vue' /* webpackChunkName: "pages/templates/new-customer" */))
const _f668f592 = () => interopDefault(import('..\\pages\\templates\\tables.vue' /* webpackChunkName: "pages/templates/tables" */))
const _754398cc = () => interopDefault(import('..\\pages\\auth\\profile\\resets-password.vue' /* webpackChunkName: "pages/auth/profile/resets-password" */))
const _19dfa363 = () => interopDefault(import('..\\pages\\auth\\profile\\update.vue' /* webpackChunkName: "pages/auth/profile/update" */))
const _f76f6e6e = () => interopDefault(import('..\\pages\\_layout\\billing.vue' /* webpackChunkName: "pages/_layout/billing" */))
const _a70dd7e0 = () => interopDefault(import('..\\pages\\_layout\\billing-history.vue' /* webpackChunkName: "pages/_layout/billing-history" */))
const _641c7e29 = () => interopDefault(import('..\\pages\\_layout\\billing-invoice.vue' /* webpackChunkName: "pages/_layout/billing-invoice" */))
const _3bad5882 = () => interopDefault(import('..\\pages\\_layout\\billing-payment.vue' /* webpackChunkName: "pages/_layout/billing-payment" */))
const _298bc598 = () => interopDefault(import('..\\pages\\_layout\\billing-upgrade.vue' /* webpackChunkName: "pages/_layout/billing-upgrade" */))
const _1fac93c4 = () => interopDefault(import('..\\pages\\_layout\\blog.vue' /* webpackChunkName: "pages/_layout/blog" */))
const _5fcd0e8e = () => interopDefault(import('..\\pages\\_layout\\blog-post.vue' /* webpackChunkName: "pages/_layout/blog-post" */))
const _05cdc9e6 = () => interopDefault(import('..\\pages\\_layout\\change-password.vue' /* webpackChunkName: "pages/_layout/change-password" */))
const _1d574c6c = () => interopDefault(import('..\\pages\\_layout\\discussion.vue' /* webpackChunkName: "pages/_layout/discussion" */))
const _3ce28099 = () => interopDefault(import('..\\pages\\_layout\\discussions.vue' /* webpackChunkName: "pages/_layout/discussions" */))
const _4e4c1145 = () => interopDefault(import('..\\pages\\_layout\\discussions-ask.vue' /* webpackChunkName: "pages/_layout/discussions-ask" */))
const _ddff70e8 = () => interopDefault(import('..\\pages\\_layout\\edit-account.vue' /* webpackChunkName: "pages/_layout/edit-account" */))
const _16b5a632 = () => interopDefault(import('..\\pages\\_layout\\edit-account-notifications.vue' /* webpackChunkName: "pages/_layout/edit-account-notifications" */))
const _43e09b30 = () => interopDefault(import('..\\pages\\_layout\\edit-account-profile.vue' /* webpackChunkName: "pages/_layout/edit-account-profile" */))
const _08aa1238 = () => interopDefault(import('..\\pages\\_layout\\faq.vue' /* webpackChunkName: "pages/_layout/faq" */))
const _09eeed53 = () => interopDefault(import('..\\pages\\_layout\\forgot-password.vue' /* webpackChunkName: "pages/_layout/forgot-password" */))
const _89c5b6a2 = () => interopDefault(import('..\\pages\\_layout\\help-center.vue' /* webpackChunkName: "pages/_layout/help-center" */))
const _2a207281 = () => interopDefault(import('..\\pages\\_layout\\home.vue' /* webpackChunkName: "pages/_layout/home" */))
const _a5ad1bac = () => interopDefault(import('..\\pages\\_layout\\instructor-courses.vue' /* webpackChunkName: "pages/_layout/instructor-courses" */))
const _709446f4 = () => interopDefault(import('..\\pages\\_layout\\instructor-dashboard.vue' /* webpackChunkName: "pages/_layout/instructor-dashboard" */))
const _71761627 = () => interopDefault(import('..\\pages\\_layout\\instructor-earnings.vue' /* webpackChunkName: "pages/_layout/instructor-earnings" */))
const _22387bb0 = () => interopDefault(import('..\\pages\\_layout\\instructor-edit-course.vue' /* webpackChunkName: "pages/_layout/instructor-edit-course" */))
const _bd82e7ac = () => interopDefault(import('..\\pages\\_layout\\instructor-edit-quiz.vue' /* webpackChunkName: "pages/_layout/instructor-edit-quiz" */))
const _88af10ca = () => interopDefault(import('..\\pages\\_layout\\instructor-profile.vue' /* webpackChunkName: "pages/_layout/instructor-profile" */))
const _4983b125 = () => interopDefault(import('..\\pages\\_layout\\instructor-quizzes.vue' /* webpackChunkName: "pages/_layout/instructor-quizzes" */))
const _09a135e1 = () => interopDefault(import('..\\pages\\_layout\\instructor-statement.vue' /* webpackChunkName: "pages/_layout/instructor-statement" */))
const _37d2c437 = () => interopDefault(import('..\\pages\\_layout\\login.vue' /* webpackChunkName: "pages/_layout/login" */))
const _109e2b6e = () => interopDefault(import('..\\pages\\_layout\\messages.vue' /* webpackChunkName: "pages/_layout/messages" */))
const _48b1aed8 = () => interopDefault(import('..\\pages\\_layout\\pricing.vue' /* webpackChunkName: "pages/_layout/pricing" */))
const _0edfafba = () => interopDefault(import('..\\pages\\_layout\\signup.vue' /* webpackChunkName: "pages/_layout/signup" */))
const _b305fbe2 = () => interopDefault(import('..\\pages\\_layout\\student-course.vue' /* webpackChunkName: "pages/_layout/student-course" */))
const _2ccee0f4 = () => interopDefault(import('..\\pages\\_layout\\student-courses.vue' /* webpackChunkName: "pages/_layout/student-courses" */))
const _188a7e60 = () => interopDefault(import('..\\pages\\_layout\\student-dashboard.vue' /* webpackChunkName: "pages/_layout/student-dashboard" */))
const _5d960ea8 = () => interopDefault(import('..\\pages\\_layout\\student-lesson.vue' /* webpackChunkName: "pages/_layout/student-lesson" */))
const _619142ea = () => interopDefault(import('..\\pages\\_layout\\student-my-courses.vue' /* webpackChunkName: "pages/_layout/student-my-courses" */))
const _6a4aa381 = () => interopDefault(import('..\\pages\\_layout\\student-my-paths.vue' /* webpackChunkName: "pages/_layout/student-my-paths" */))
const _6b919d86 = () => interopDefault(import('..\\pages\\_layout\\student-my-quizzes.vue' /* webpackChunkName: "pages/_layout/student-my-quizzes" */))
const _996e0fce = () => interopDefault(import('..\\pages\\_layout\\student-path.vue' /* webpackChunkName: "pages/_layout/student-path" */))
const _8cfca7ac = () => interopDefault(import('..\\pages\\_layout\\student-paths.vue' /* webpackChunkName: "pages/_layout/student-paths" */))
const _3b4de665 = () => interopDefault(import('..\\pages\\_layout\\student-profile.vue' /* webpackChunkName: "pages/_layout/student-profile" */))
const _0e35cb51 = () => interopDefault(import('..\\pages\\_layout\\student-quiz-result.vue' /* webpackChunkName: "pages/_layout/student-quiz-result" */))
const _c2ddbd9c = () => interopDefault(import('..\\pages\\_layout\\student-skill-assessment.vue' /* webpackChunkName: "pages/_layout/student-skill-assessment" */))
const _01388de6 = () => interopDefault(import('..\\pages\\_layout\\student-skill-result.vue' /* webpackChunkName: "pages/_layout/student-skill-result" */))
const _6874aedd = () => interopDefault(import('..\\pages\\_layout\\student-take-course.vue' /* webpackChunkName: "pages/_layout/student-take-course" */))
const _d9a6b50c = () => interopDefault(import('..\\pages\\_layout\\student-take-lesson.vue' /* webpackChunkName: "pages/_layout/student-take-lesson" */))
const _ed50b2d2 = () => interopDefault(import('..\\pages\\_layout\\student-take-quiz.vue' /* webpackChunkName: "pages/_layout/student-take-quiz" */))
const _58939073 = () => interopDefault(import('..\\pages\\_layout\\teachers.vue' /* webpackChunkName: "pages/_layout/teachers" */))
const _12d9c384 = () => interopDefault(import('..\\pages\\_layout\\ui-alerts.vue' /* webpackChunkName: "pages/_layout/ui-alerts" */))
const _0a79ce06 = () => interopDefault(import('..\\pages\\_layout\\ui-app-layout.vue' /* webpackChunkName: "pages/_layout/ui-app-layout" */))
const _6b0d0c00 = () => interopDefault(import('..\\pages\\_layout\\ui-avatar.vue' /* webpackChunkName: "pages/_layout/ui-avatar" */))
const _54dc13e8 = () => interopDefault(import('..\\pages\\_layout\\ui-cards.vue' /* webpackChunkName: "pages/_layout/ui-cards" */))
const _424426c3 = () => interopDefault(import('..\\pages\\_layout\\ui-chart-area.vue' /* webpackChunkName: "pages/_layout/ui-chart-area" */))
const _6fd90166 = () => interopDefault(import('..\\pages\\_layout\\ui-chart-bar.vue' /* webpackChunkName: "pages/_layout/ui-chart-bar" */))
const _c85c1690 = () => interopDefault(import('..\\pages\\_layout\\ui-chart-doughnut.vue' /* webpackChunkName: "pages/_layout/ui-chart-doughnut" */))
const _27260aac = () => interopDefault(import('..\\pages\\_layout\\ui-chart-line.vue' /* webpackChunkName: "pages/_layout/ui-chart-line" */))
const _70e13780 = () => interopDefault(import('..\\pages\\_layout\\ui-chart-radar.vue' /* webpackChunkName: "pages/_layout/ui-chart-radar" */))
const _c74490d0 = () => interopDefault(import('..\\pages\\_layout\\ui-drawer.vue' /* webpackChunkName: "pages/_layout/ui-drawer" */))
const _078e60a2 = () => interopDefault(import('..\\pages\\_layout\\ui-drawer-layout.vue' /* webpackChunkName: "pages/_layout/ui-drawer-layout" */))
const _d56dbbec = () => interopDefault(import('..\\pages\\_layout\\ui-fixed-layout.vue' /* webpackChunkName: "pages/_layout/ui-fixed-layout" */))
const _6df2f26b = () => interopDefault(import('..\\pages\\_layout\\ui-form-image-group.vue' /* webpackChunkName: "pages/_layout/ui-form-image-group" */))
const _500b54d8 = () => interopDefault(import('..\\pages\\_layout\\ui-forms.vue' /* webpackChunkName: "pages/_layout/ui-forms" */))
const _0e191998 = () => interopDefault(import('..\\pages\\_layout\\ui-header.vue' /* webpackChunkName: "pages/_layout/ui-header" */))
const _07020c93 = () => interopDefault(import('..\\pages\\_layout\\ui-header-layout.vue' /* webpackChunkName: "pages/_layout/ui-header-layout" */))
const _dd66a37a = () => interopDefault(import('..\\pages\\_layout\\ui-icons.vue' /* webpackChunkName: "pages/_layout/ui-icons" */))
const _6c70f910 = () => interopDefault(import('..\\pages\\_layout\\ui-input-group-merge.vue' /* webpackChunkName: "pages/_layout/ui-input-group-merge" */))
const _ffb27fe2 = () => interopDefault(import('..\\pages\\_layout\\ui-perfect-scrollbar.vue' /* webpackChunkName: "pages/_layout/ui-perfect-scrollbar" */))
const _6de95576 = () => interopDefault(import('..\\pages\\_layout\\ui-sidebar.vue' /* webpackChunkName: "pages/_layout/ui-sidebar" */))
const _33d08517 = () => interopDefault(import('..\\pages\\_layout\\ui-sidebar-menu.vue' /* webpackChunkName: "pages/_layout/ui-sidebar-menu" */))
const _f1a7c29e = () => interopDefault(import('..\\pages\\_layout\\ui-syntax-highlight.vue' /* webpackChunkName: "pages/_layout/ui-syntax-highlight" */))
const _cf1e8936 = () => interopDefault(import('..\\pages\\_layout\\ui-tabs.vue' /* webpackChunkName: "pages/_layout/ui-tabs" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/auth",
    component: _76801afa,
    name: "auth___en"
  }, {
    path: "/confirm-password",
    component: _d6168802,
    name: "confirm-password___en"
  }, {
    path: "/reset-password",
    component: _f6661ce0,
    name: "reset-password___en"
  }, {
    path: "/ro",
    component: _0fe3896b,
    name: "index___ro"
  }, {
    path: "/templates",
    component: _7323d720,
    name: "templates___en"
  }, {
    path: "/test",
    component: _39849309,
    name: "test___en"
  }, {
    path: "/two-factor-challenge",
    component: _8af14586,
    name: "two-factor-challenge___en"
  }, {
    path: "/two-factor-challenge-recovery",
    component: _bf43f956,
    name: "two-factor-challenge-recovery___en"
  }, {
    path: "/auth/dashboard",
    component: _76ad4ec5,
    name: "auth-dashboard___en"
  }, {
    path: "/auth/forgot-password",
    component: _fc38c214,
    name: "auth-forgot-password___en"
  }, {
    path: "/auth/login",
    component: _e330d4cc,
    name: "auth-login___en"
  }, {
    path: "/auth/profile",
    component: _1b8574b0,
    name: "auth-profile___en"
  }, {
    path: "/auth/register",
    component: _f2e935fc,
    name: "auth-register___en"
  }, {
    path: "/auth/verify",
    component: _6bc38998,
    name: "auth-verify___en"
  }, {
    path: "/ro/auth",
    component: _76801afa,
    name: "auth___ro"
  }, {
    path: "/ro/confirm-password",
    component: _d6168802,
    name: "confirm-password___ro"
  }, {
    path: "/ro/reset-password",
    component: _f6661ce0,
    name: "reset-password___ro"
  }, {
    path: "/ro/templates",
    component: _7323d720,
    name: "templates___ro"
  }, {
    path: "/ro/test",
    component: _39849309,
    name: "test___ro"
  }, {
    path: "/ro/two-factor-challenge",
    component: _8af14586,
    name: "two-factor-challenge___ro"
  }, {
    path: "/ro/two-factor-challenge-recovery",
    component: _bf43f956,
    name: "two-factor-challenge-recovery___ro"
  }, {
    path: "/templates/customer-details",
    component: _735b16a5,
    name: "templates-customer-details___en"
  }, {
    path: "/templates/new-customer",
    component: _220a0dbd,
    name: "templates-new-customer___en"
  }, {
    path: "/templates/tables",
    component: _f668f592,
    name: "templates-tables___en"
  }, {
    path: "/auth/profile/resets-password",
    component: _754398cc,
    name: "auth-profile-resets-password___en"
  }, {
    path: "/auth/profile/update",
    component: _19dfa363,
    name: "auth-profile-update___en"
  }, {
    path: "/ro/auth/dashboard",
    component: _76ad4ec5,
    name: "auth-dashboard___ro"
  }, {
    path: "/ro/auth/forgot-password",
    component: _fc38c214,
    name: "auth-forgot-password___ro"
  }, {
    path: "/ro/auth/login",
    component: _e330d4cc,
    name: "auth-login___ro"
  }, {
    path: "/ro/auth/profile",
    component: _1b8574b0,
    name: "auth-profile___ro"
  }, {
    path: "/ro/auth/register",
    component: _f2e935fc,
    name: "auth-register___ro"
  }, {
    path: "/ro/auth/verify",
    component: _6bc38998,
    name: "auth-verify___ro"
  }, {
    path: "/ro/templates/customer-details",
    component: _735b16a5,
    name: "templates-customer-details___ro"
  }, {
    path: "/ro/templates/new-customer",
    component: _220a0dbd,
    name: "templates-new-customer___ro"
  }, {
    path: "/ro/templates/tables",
    component: _f668f592,
    name: "templates-tables___ro"
  }, {
    path: "/ro/auth/profile/resets-password",
    component: _754398cc,
    name: "auth-profile-resets-password___ro"
  }, {
    path: "/ro/auth/profile/update",
    component: _19dfa363,
    name: "auth-profile-update___ro"
  }, {
    path: "/ro/:layout/billing",
    component: _f76f6e6e,
    name: "layout-billing___ro"
  }, {
    path: "/ro/:layout/billing-history",
    component: _a70dd7e0,
    name: "layout-billing-history___ro"
  }, {
    path: "/ro/:layout/billing-invoice",
    component: _641c7e29,
    name: "layout-billing-invoice___ro"
  }, {
    path: "/ro/:layout/billing-payment",
    component: _3bad5882,
    name: "layout-billing-payment___ro"
  }, {
    path: "/ro/:layout/billing-upgrade",
    component: _298bc598,
    name: "layout-billing-upgrade___ro"
  }, {
    path: "/ro/:layout/blog",
    component: _1fac93c4,
    name: "layout-blog___ro"
  }, {
    path: "/ro/:layout/blog-post",
    component: _5fcd0e8e,
    name: "layout-blog-post___ro"
  }, {
    path: "/ro/:layout/change-password",
    component: _05cdc9e6,
    name: "layout-change-password___ro"
  }, {
    path: "/ro/:layout/discussion",
    component: _1d574c6c,
    name: "layout-discussion___ro"
  }, {
    path: "/ro/:layout/discussions",
    component: _3ce28099,
    name: "layout-discussions___ro"
  }, {
    path: "/ro/:layout/discussions-ask",
    component: _4e4c1145,
    name: "layout-discussions-ask___ro"
  }, {
    path: "/ro/:layout/edit-account",
    component: _ddff70e8,
    name: "layout-edit-account___ro"
  }, {
    path: "/ro/:layout/edit-account-notifications",
    component: _16b5a632,
    name: "layout-edit-account-notifications___ro"
  }, {
    path: "/ro/:layout/edit-account-profile",
    component: _43e09b30,
    name: "layout-edit-account-profile___ro"
  }, {
    path: "/ro/:layout/faq",
    component: _08aa1238,
    name: "layout-faq___ro"
  }, {
    path: "/ro/:layout/forgot-password",
    component: _09eeed53,
    name: "layout-forgot-password___ro"
  }, {
    path: "/ro/:layout/help-center",
    component: _89c5b6a2,
    name: "layout-help-center___ro"
  }, {
    path: "/ro/:layout/home",
    component: _2a207281,
    name: "layout-home___ro"
  }, {
    path: "/ro/:layout/instructor-courses",
    component: _a5ad1bac,
    name: "layout-instructor-courses___ro"
  }, {
    path: "/ro/:layout/instructor-dashboard",
    component: _709446f4,
    name: "layout-instructor-dashboard___ro"
  }, {
    path: "/ro/:layout/instructor-earnings",
    component: _71761627,
    name: "layout-instructor-earnings___ro"
  }, {
    path: "/ro/:layout/instructor-edit-course",
    component: _22387bb0,
    name: "layout-instructor-edit-course___ro"
  }, {
    path: "/ro/:layout/instructor-edit-quiz",
    component: _bd82e7ac,
    name: "layout-instructor-edit-quiz___ro"
  }, {
    path: "/ro/:layout/instructor-profile",
    component: _88af10ca,
    name: "layout-instructor-profile___ro"
  }, {
    path: "/ro/:layout/instructor-quizzes",
    component: _4983b125,
    name: "layout-instructor-quizzes___ro"
  }, {
    path: "/ro/:layout/instructor-statement",
    component: _09a135e1,
    name: "layout-instructor-statement___ro"
  }, {
    path: "/ro/:layout/login",
    component: _37d2c437,
    name: "layout-login___ro"
  }, {
    path: "/ro/:layout/messages",
    component: _109e2b6e,
    name: "layout-messages___ro"
  }, {
    path: "/ro/:layout/pricing",
    component: _48b1aed8,
    name: "layout-pricing___ro"
  }, {
    path: "/ro/:layout/signup",
    component: _0edfafba,
    name: "layout-signup___ro"
  }, {
    path: "/ro/:layout/student-course",
    component: _b305fbe2,
    name: "layout-student-course___ro"
  }, {
    path: "/ro/:layout/student-courses",
    component: _2ccee0f4,
    name: "layout-student-courses___ro"
  }, {
    path: "/ro/:layout/student-dashboard",
    component: _188a7e60,
    name: "layout-student-dashboard___ro"
  }, {
    path: "/ro/:layout/student-lesson",
    component: _5d960ea8,
    name: "layout-student-lesson___ro"
  }, {
    path: "/ro/:layout/student-my-courses",
    component: _619142ea,
    name: "layout-student-my-courses___ro"
  }, {
    path: "/ro/:layout/student-my-paths",
    component: _6a4aa381,
    name: "layout-student-my-paths___ro"
  }, {
    path: "/ro/:layout/student-my-quizzes",
    component: _6b919d86,
    name: "layout-student-my-quizzes___ro"
  }, {
    path: "/ro/:layout/student-path",
    component: _996e0fce,
    name: "layout-student-path___ro"
  }, {
    path: "/ro/:layout/student-paths",
    component: _8cfca7ac,
    name: "layout-student-paths___ro"
  }, {
    path: "/ro/:layout/student-profile",
    component: _3b4de665,
    name: "layout-student-profile___ro"
  }, {
    path: "/ro/:layout/student-quiz-result",
    component: _0e35cb51,
    name: "layout-student-quiz-result___ro"
  }, {
    path: "/ro/:layout/student-skill-assessment",
    component: _c2ddbd9c,
    name: "layout-student-skill-assessment___ro"
  }, {
    path: "/ro/:layout/student-skill-result",
    component: _01388de6,
    name: "layout-student-skill-result___ro"
  }, {
    path: "/ro/:layout/student-take-course",
    component: _6874aedd,
    name: "layout-student-take-course___ro"
  }, {
    path: "/ro/:layout/student-take-lesson",
    component: _d9a6b50c,
    name: "layout-student-take-lesson___ro"
  }, {
    path: "/ro/:layout/student-take-quiz",
    component: _ed50b2d2,
    name: "layout-student-take-quiz___ro"
  }, {
    path: "/ro/:layout/teachers",
    component: _58939073,
    name: "layout-teachers___ro"
  }, {
    path: "/ro/:layout/ui-alerts",
    component: _12d9c384,
    name: "layout-ui-alerts___ro"
  }, {
    path: "/ro/:layout/ui-app-layout",
    component: _0a79ce06,
    name: "layout-ui-app-layout___ro"
  }, {
    path: "/ro/:layout/ui-avatar",
    component: _6b0d0c00,
    name: "layout-ui-avatar___ro"
  }, {
    path: "/ro/:layout/ui-cards",
    component: _54dc13e8,
    name: "layout-ui-cards___ro"
  }, {
    path: "/ro/:layout/ui-chart-area",
    component: _424426c3,
    name: "layout-ui-chart-area___ro"
  }, {
    path: "/ro/:layout/ui-chart-bar",
    component: _6fd90166,
    name: "layout-ui-chart-bar___ro"
  }, {
    path: "/ro/:layout/ui-chart-doughnut",
    component: _c85c1690,
    name: "layout-ui-chart-doughnut___ro"
  }, {
    path: "/ro/:layout/ui-chart-line",
    component: _27260aac,
    name: "layout-ui-chart-line___ro"
  }, {
    path: "/ro/:layout/ui-chart-radar",
    component: _70e13780,
    name: "layout-ui-chart-radar___ro"
  }, {
    path: "/ro/:layout/ui-drawer",
    component: _c74490d0,
    name: "layout-ui-drawer___ro"
  }, {
    path: "/ro/:layout/ui-drawer-layout",
    component: _078e60a2,
    name: "layout-ui-drawer-layout___ro"
  }, {
    path: "/ro/:layout/ui-fixed-layout",
    component: _d56dbbec,
    name: "layout-ui-fixed-layout___ro"
  }, {
    path: "/ro/:layout/ui-form-image-group",
    component: _6df2f26b,
    name: "layout-ui-form-image-group___ro"
  }, {
    path: "/ro/:layout/ui-forms",
    component: _500b54d8,
    name: "layout-ui-forms___ro"
  }, {
    path: "/ro/:layout/ui-header",
    component: _0e191998,
    name: "layout-ui-header___ro"
  }, {
    path: "/ro/:layout/ui-header-layout",
    component: _07020c93,
    name: "layout-ui-header-layout___ro"
  }, {
    path: "/ro/:layout/ui-icons",
    component: _dd66a37a,
    name: "layout-ui-icons___ro"
  }, {
    path: "/ro/:layout/ui-input-group-merge",
    component: _6c70f910,
    name: "layout-ui-input-group-merge___ro"
  }, {
    path: "/ro/:layout/ui-perfect-scrollbar",
    component: _ffb27fe2,
    name: "layout-ui-perfect-scrollbar___ro"
  }, {
    path: "/ro/:layout/ui-sidebar",
    component: _6de95576,
    name: "layout-ui-sidebar___ro"
  }, {
    path: "/ro/:layout/ui-sidebar-menu",
    component: _33d08517,
    name: "layout-ui-sidebar-menu___ro"
  }, {
    path: "/ro/:layout/ui-syntax-highlight",
    component: _f1a7c29e,
    name: "layout-ui-syntax-highlight___ro"
  }, {
    path: "/ro/:layout/ui-tabs",
    component: _cf1e8936,
    name: "layout-ui-tabs___ro"
  }, {
    path: "/",
    component: _0fe3896b,
    name: "index___en"
  }, {
    path: "/:layout/billing",
    component: _f76f6e6e,
    name: "layout-billing___en"
  }, {
    path: "/:layout/billing-history",
    component: _a70dd7e0,
    name: "layout-billing-history___en"
  }, {
    path: "/:layout/billing-invoice",
    component: _641c7e29,
    name: "layout-billing-invoice___en"
  }, {
    path: "/:layout/billing-payment",
    component: _3bad5882,
    name: "layout-billing-payment___en"
  }, {
    path: "/:layout/billing-upgrade",
    component: _298bc598,
    name: "layout-billing-upgrade___en"
  }, {
    path: "/:layout/blog",
    component: _1fac93c4,
    name: "layout-blog___en"
  }, {
    path: "/:layout/blog-post",
    component: _5fcd0e8e,
    name: "layout-blog-post___en"
  }, {
    path: "/:layout/change-password",
    component: _05cdc9e6,
    name: "layout-change-password___en"
  }, {
    path: "/:layout/discussion",
    component: _1d574c6c,
    name: "layout-discussion___en"
  }, {
    path: "/:layout/discussions",
    component: _3ce28099,
    name: "layout-discussions___en"
  }, {
    path: "/:layout/discussions-ask",
    component: _4e4c1145,
    name: "layout-discussions-ask___en"
  }, {
    path: "/:layout/edit-account",
    component: _ddff70e8,
    name: "layout-edit-account___en"
  }, {
    path: "/:layout/edit-account-notifications",
    component: _16b5a632,
    name: "layout-edit-account-notifications___en"
  }, {
    path: "/:layout/edit-account-profile",
    component: _43e09b30,
    name: "layout-edit-account-profile___en"
  }, {
    path: "/:layout/faq",
    component: _08aa1238,
    name: "layout-faq___en"
  }, {
    path: "/:layout/forgot-password",
    component: _09eeed53,
    name: "layout-forgot-password___en"
  }, {
    path: "/:layout/help-center",
    component: _89c5b6a2,
    name: "layout-help-center___en"
  }, {
    path: "/:layout/home",
    component: _2a207281,
    name: "layout-home___en"
  }, {
    path: "/:layout/instructor-courses",
    component: _a5ad1bac,
    name: "layout-instructor-courses___en"
  }, {
    path: "/:layout/instructor-dashboard",
    component: _709446f4,
    name: "layout-instructor-dashboard___en"
  }, {
    path: "/:layout/instructor-earnings",
    component: _71761627,
    name: "layout-instructor-earnings___en"
  }, {
    path: "/:layout/instructor-edit-course",
    component: _22387bb0,
    name: "layout-instructor-edit-course___en"
  }, {
    path: "/:layout/instructor-edit-quiz",
    component: _bd82e7ac,
    name: "layout-instructor-edit-quiz___en"
  }, {
    path: "/:layout/instructor-profile",
    component: _88af10ca,
    name: "layout-instructor-profile___en"
  }, {
    path: "/:layout/instructor-quizzes",
    component: _4983b125,
    name: "layout-instructor-quizzes___en"
  }, {
    path: "/:layout/instructor-statement",
    component: _09a135e1,
    name: "layout-instructor-statement___en"
  }, {
    path: "/:layout/login",
    component: _37d2c437,
    name: "layout-login___en"
  }, {
    path: "/:layout/messages",
    component: _109e2b6e,
    name: "layout-messages___en"
  }, {
    path: "/:layout/pricing",
    component: _48b1aed8,
    name: "layout-pricing___en"
  }, {
    path: "/:layout/signup",
    component: _0edfafba,
    name: "layout-signup___en"
  }, {
    path: "/:layout/student-course",
    component: _b305fbe2,
    name: "layout-student-course___en"
  }, {
    path: "/:layout/student-courses",
    component: _2ccee0f4,
    name: "layout-student-courses___en"
  }, {
    path: "/:layout/student-dashboard",
    component: _188a7e60,
    name: "layout-student-dashboard___en"
  }, {
    path: "/:layout/student-lesson",
    component: _5d960ea8,
    name: "layout-student-lesson___en"
  }, {
    path: "/:layout/student-my-courses",
    component: _619142ea,
    name: "layout-student-my-courses___en"
  }, {
    path: "/:layout/student-my-paths",
    component: _6a4aa381,
    name: "layout-student-my-paths___en"
  }, {
    path: "/:layout/student-my-quizzes",
    component: _6b919d86,
    name: "layout-student-my-quizzes___en"
  }, {
    path: "/:layout/student-path",
    component: _996e0fce,
    name: "layout-student-path___en"
  }, {
    path: "/:layout/student-paths",
    component: _8cfca7ac,
    name: "layout-student-paths___en"
  }, {
    path: "/:layout/student-profile",
    component: _3b4de665,
    name: "layout-student-profile___en"
  }, {
    path: "/:layout/student-quiz-result",
    component: _0e35cb51,
    name: "layout-student-quiz-result___en"
  }, {
    path: "/:layout/student-skill-assessment",
    component: _c2ddbd9c,
    name: "layout-student-skill-assessment___en"
  }, {
    path: "/:layout/student-skill-result",
    component: _01388de6,
    name: "layout-student-skill-result___en"
  }, {
    path: "/:layout/student-take-course",
    component: _6874aedd,
    name: "layout-student-take-course___en"
  }, {
    path: "/:layout/student-take-lesson",
    component: _d9a6b50c,
    name: "layout-student-take-lesson___en"
  }, {
    path: "/:layout/student-take-quiz",
    component: _ed50b2d2,
    name: "layout-student-take-quiz___en"
  }, {
    path: "/:layout/teachers",
    component: _58939073,
    name: "layout-teachers___en"
  }, {
    path: "/:layout/ui-alerts",
    component: _12d9c384,
    name: "layout-ui-alerts___en"
  }, {
    path: "/:layout/ui-app-layout",
    component: _0a79ce06,
    name: "layout-ui-app-layout___en"
  }, {
    path: "/:layout/ui-avatar",
    component: _6b0d0c00,
    name: "layout-ui-avatar___en"
  }, {
    path: "/:layout/ui-cards",
    component: _54dc13e8,
    name: "layout-ui-cards___en"
  }, {
    path: "/:layout/ui-chart-area",
    component: _424426c3,
    name: "layout-ui-chart-area___en"
  }, {
    path: "/:layout/ui-chart-bar",
    component: _6fd90166,
    name: "layout-ui-chart-bar___en"
  }, {
    path: "/:layout/ui-chart-doughnut",
    component: _c85c1690,
    name: "layout-ui-chart-doughnut___en"
  }, {
    path: "/:layout/ui-chart-line",
    component: _27260aac,
    name: "layout-ui-chart-line___en"
  }, {
    path: "/:layout/ui-chart-radar",
    component: _70e13780,
    name: "layout-ui-chart-radar___en"
  }, {
    path: "/:layout/ui-drawer",
    component: _c74490d0,
    name: "layout-ui-drawer___en"
  }, {
    path: "/:layout/ui-drawer-layout",
    component: _078e60a2,
    name: "layout-ui-drawer-layout___en"
  }, {
    path: "/:layout/ui-fixed-layout",
    component: _d56dbbec,
    name: "layout-ui-fixed-layout___en"
  }, {
    path: "/:layout/ui-form-image-group",
    component: _6df2f26b,
    name: "layout-ui-form-image-group___en"
  }, {
    path: "/:layout/ui-forms",
    component: _500b54d8,
    name: "layout-ui-forms___en"
  }, {
    path: "/:layout/ui-header",
    component: _0e191998,
    name: "layout-ui-header___en"
  }, {
    path: "/:layout/ui-header-layout",
    component: _07020c93,
    name: "layout-ui-header-layout___en"
  }, {
    path: "/:layout/ui-icons",
    component: _dd66a37a,
    name: "layout-ui-icons___en"
  }, {
    path: "/:layout/ui-input-group-merge",
    component: _6c70f910,
    name: "layout-ui-input-group-merge___en"
  }, {
    path: "/:layout/ui-perfect-scrollbar",
    component: _ffb27fe2,
    name: "layout-ui-perfect-scrollbar___en"
  }, {
    path: "/:layout/ui-sidebar",
    component: _6de95576,
    name: "layout-ui-sidebar___en"
  }, {
    path: "/:layout/ui-sidebar-menu",
    component: _33d08517,
    name: "layout-ui-sidebar-menu___en"
  }, {
    path: "/:layout/ui-syntax-highlight",
    component: _f1a7c29e,
    name: "layout-ui-syntax-highlight___en"
  }, {
    path: "/:layout/ui-tabs",
    component: _cf1e8936,
    name: "layout-ui-tabs___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
