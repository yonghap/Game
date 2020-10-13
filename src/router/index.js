import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Layout from '@/layout'

const routes = [
	{
		path: '/',
		component: () => import('@/views/Home')
	},
	{
		path: '/about',
		component : Layout,
		children : [
			{
				path : '/',
				component: () => import('@/views/About')
			}
		]
	},
	{
		path : '/detail/:id',
		component : () => import('@/views/Game')
	},
	{
		path: '/best',
		component : Layout,
		children : [
			{
				path : '/',
				meta : { 'name' : 'best', 'title' : '인기제품', 'type' : 'default' },
				component: () => import('@/views/Search')
			}
		]
	},
	{
		path: '/new',
		component : Layout,
		children : [
			{
				path : '/',
				meta : { 'name' : 'new', 'title' : '신규출시', 'type' : 'date' },
				component: () => import('@/views/Search')
			}
		]
	},
	{
		path: '/evaluate',
		component : Layout,
		children : [
			{
				path : '/',
				meta : { 'name' : 'evaluate', 'title' : '평가하기', 'type' : 'default' },
				component: () => import('@/views/Evaluate')
			}
		]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: 'Game',
	routes
})

export default router
