// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import FirstPage from '../components/FirstPage.vue'
// import AboutMePage from '../components/AboutMePage.vue'
// import SkillsPage from '../components/SkillsPage.vue'
// import ProjectsPage from '../components/ProjectsPage.vue'
// import CareerPage from '../components/CareerPage.vue'

// Vue.use(VueRouter);

// export const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/portfolio/',
//       redirect: '/portfolio/1',
//     },

//     {
//       path: '/portfolio/1',
//       name: 'firstPage',
//       component: FirstPage,
//     },

//     {
//       path: '/portfolio/2',
//       name: 'aboutMe',
//       component: AboutMePage,
//     },

//     {
//       path: '/portfolio/3',
//       name: 'skillsPage',
//       component: SkillsPage,
//     },

//     {
//       path: '/portfolio/4',
//       name: 'careerPage',
//       component: CareerPage,
//     },

//     {
//       path: '/portfolio/5',
//       name: 'projectsPage',
//       component: ProjectsPage,
//     },
//   ],
//   scrollBehavior(to, from, savedPosition) {
//     console.log(to, from, savedPosition);
//     return { x: 0, y: 0 };
//   },
// });