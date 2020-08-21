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
		path: '/game',
		component : Layout,
		children : [
			{
				path : '/',
				component: () => import('@/views/Game')
			}
		]
	},
	{
		path: '/search',
		component : Layout,
		children : [
			{
				path : '/',
				component: () => import('@/views/Search')
			}
		]
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
