import { mutations } from './ui'

let state

beforeEach(() => {
  state = {
    navDrawer: false,
  }
})

describe('Vuex Module > ui', () => {
  describe('MUTATIONS', () => {
    test('clear state', () => {
      state.navDrawer = true
      mutations.CLEAR_STATE(state)
      expect(state).toEqual({ navDrawer: false })
    })
  })
})
