import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import EmptyStub from '../test/stubs/empty-stub'
import NavDrawer from './nav-drawer'

const localVue = createLocalVue()
let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(NavDrawer, {
    stubs: {
      NavDrawerListItem: EmptyStub,
    },
    mocks: {
      $store: {
        state: {
          ui: {
            navDrawer: false,
          },
        },
      },
    },
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Component > nav-drawer', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
