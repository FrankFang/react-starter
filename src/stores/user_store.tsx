import { createImmerStore } from '@/stores/shared/create_immer_store'

interface State {
  user: User
}
interface Actions {
  updateUser: (user: Partial<User>) => void
}
export const useUserStore = createImmerStore<State & Actions>(set => ({
  user: {
    id: 0,
    name: 'John Doe',
    age: 0,
  },
  updateUser: user => set(
    (state) => {
      Object.assign(state.user, user)
    },
  ),
}))
