import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    event_id: null,
    isAuthenticated: false, 
  }),
  actions: {
    login(userData:any) {
      this.user = userData; 
      this.isAuthenticated = true;
    },
    setPostId(id:any) {
      this.event_id = id
    },
    logout() {
      this.user = null;
      this.isAuthenticated = false;
    },
    checkAuth() {
      if (this.isAuthenticated) {
        return true;
      } else {
        return false;
      }
    },
  },
});
