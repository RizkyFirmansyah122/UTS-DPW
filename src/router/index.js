import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Banner
import Banner from '../views/Banner/list'
import AddBanner from '../views/Banner/add'
import EditBanner from '../views/Banner/edit'
import DetailBanner from '../views/Banner/detail'

// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		{  						 //user
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{   					//adduser
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{						 // detail user
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{ 							//banner
			path: '/list-banner',
			name: 'list-banner',
			component: Banner
		},
		{
			path: '/add-banner',
			name: 'list-banner',
			component: AddBanner
		},
		{
			path: '/edit-banner',
			name: 'list-banner',
			component: EditBanner
		},
		{
			path: '/detail-banner',
			name: 'list-banner',
			component: DetailBanner
		},
		{ 							 // product
			path: '/list-product',
			name: 'list-product',
			component: Product
		}
	]
})
