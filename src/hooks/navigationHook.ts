import type { RouteLocationRaw } from 'vue-router'
import router from '../router'

export const useNavigation = (navRoute: RouteLocationRaw) => {
  return router.push(navRoute)
}
