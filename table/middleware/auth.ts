import { useAuthStore } from '@/stores/auth';

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();
    console.log(authStore.isAuthenticated)

    if(!authStore.isAuthenticated){
    return navigateTo('/login')
    }
})
