const routes = [
{
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Todo.vue') },
      { path: '/help', component: () => import('/src/pages/Help.vue') },
    ]
  }
]



export default routes
