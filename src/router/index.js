import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import StudentIndex from '../views/students/StudentIndex.vue';
import StudentCreate from '../views/students/StudentCreate.vue';
import StudentEdit from '../views/students/StudentEdit.vue';
import AddressIndex from '../views/addresses/AddressIndex.vue';
import AddressCreate from '../views/addresses/AddressCreate.vue';
import AddressEdit from '../views/addresses/AddressEdit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/students',
      name: 'StudentIndex',
      component: StudentIndex,
    },
    {
      path: '/students/create',
      name: 'StudentCreate',
      component: StudentCreate,
    },
    {
      path: '/students/edit/:id',
      name: 'StudentEdit',
      component: StudentEdit,
      props: true,
    },
    {
      path: '/addresses',
      name: 'AddressIndex',
      component: AddressIndex,
    },
    {
      path: '/addresses/create',
      name: 'AddressCreate',
      component: AddressCreate,
    },
    {
      path: '/addresses/edit/:id',
      name: 'AddressEdit',
      component: AddressEdit,
      props: true,
    },
  ],
});

export default router;
