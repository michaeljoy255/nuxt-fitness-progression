import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import PrimaryHeaderBar from './primary-header-bar'

const localVue = createLocalVue()
let wrapper

beforeEach(() => {
  const vuetify = new Vuetify()
  wrapper = mount(PrimaryHeaderBar, {
    stubs: {},
    propsData: {},
    mocks: {
      $store: {},
      $router: {},
      $route: {},
    },
    localVue,
    vuetify,
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Component > primary-header-bar', () => {
  test('matches the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
