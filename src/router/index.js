import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Display from '@/views/Display';
import Article from '@/views/Article';
import Aboutme from '@/views/Aboutme';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/(home)?',
    name: 'Home',
    component: Home,
  }, {
    path: '/display',
    name: 'Display',
    component: Display,
  }, {
    path: '/article',
    name: 'Article',
    component: Article,
  }, {
    path: '/aboutme',
    name: 'Aboutme',
    component: Aboutme,
  }],
});
