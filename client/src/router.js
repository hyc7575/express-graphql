import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Home2 from './views/Home2';
import Home3 from './views/Home3';
import AddUser from './views/AddUser';

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/home',
			name: 'home',
			component: Home
		},
		{
			path: '/home2',
			name: 'home2',
			component: Home2
		},
		{
			path: '/home3',
			name: 'home3',
			component: Home3
		},
		{
			path: '/addUser',
			name: 'addUser',
			component: AddUser
		}
	]
})